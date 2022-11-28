class Comment {
  create({ message, author }) {
    return {
      id: 1,
      message,
      author,
      createdAt: new Date(),
    };
  }

  findAll() {
    return [
      { id: 1, message: 'Message 1', author: 'Jan', createdAt: new Date() },
      { id: 2, message: 'Message 2', author: 'Karol', createdAt: new Date() },
      { id: 3, message: 'Message 3', author: 'Karol', createdAt: new Date() },
    ];
  }
}

export default new Comment();
