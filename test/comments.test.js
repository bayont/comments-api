import supertest from 'supertest';
import app from '../app';
import { sequelize } from '../db/sequelize';

const request = supertest(app);

const checkItemStructure = function (item) {
  expect(item).toEqual(
    expect.objectContaining({
      id: expect.any(Number),
      message: expect.any(String),
      author: expect.any(String),
      createdAt: expect.any(String),
    })
  );
};

it('endpoint POST /comments', async () => {
  //empty comment doesn't pass my validation
  const comment = { message: "Zadanie rekrutacyjne Coffee Media", author: "Fabian Fetter" };
  const response = await request.post('/comments').send(comment).expect(200);
  const body = JSON.parse(response.text);
  checkItemStructure(body);
});

it('endpoint POST /comments invalid body', async () => {
  const brokenComments = [{}, { message: "abc" }, { author: "abc" }];
  for (const comment of brokenComments)
    await request.post('/comments').send(comment).expect(400);
})

it('endpoint GET /comments', async () => {
  const response = await request.get('/comments').expect(200);
  const body = JSON.parse(response.text);
  for (const item of body) {
    checkItemStructure(item);
  }
});

afterAll(done => {
  // Closing the DB connection allows Jest to exit successfully.
  sequelize.close();
  done()
})