import app from '../app';
import supertest from 'supertest';

const request = supertest(app);

const checkItemStructure = function (item) {
  expect(item).toEqual(
    expect.objectContaining({
      id: expect.any(Number),
      message: expect.any(String),
      author: expect.any(String),
      createdAt: expect.any(Date),
    })
  );
};

it('endpoint POST /comments', async () => {
  const comment = {};
  const response = await request.post('/comments').send(comment).expect(200);
  const body = JSON.parse(response.text);
  checkItemStructure(body);
});

it('endpoint GET /comments', async () => {
  const response = await request.get('/comments').expect(200);
  const body = JSON.parse(response.text);
  for (const item of body) {
    checkItemStructure(item);
  }
});
