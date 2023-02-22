import app from '../app';
import request from 'supertest';

// describe('POST /user', () => {
//   it('should return 200 OK', async () => {
//     const res = await request(app).post('/user').send({
//       name: 'John',
//       surname: 'Doe',
//       dateOfBirth: '1990-01-01',
//       email: 'JohnDoe@gmail.com',
//       password: '123456',
//     });
//     expect(res.statusCode).toBe(200);
//   });
// });

describe('GET /user', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/user').send({
      id: '63ee0b5f5db94e1bee99e08e',
    });
    console.log(res);
    expect(res.statusCode).toBe(200);
  });
});

describe('PUT /user', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).put('/user').send({
      id: '63ee0b5f5db94e1bee99e08e',
      name: 'Johnny',
    });
    console.log(res);
    expect(res.statusCode).toBe(200);
  });
});

// describe('DELETE /user', () => {
//   it('should return 200 OK', async () => {
//     const res = await request(app).delete('/user').send({
//       id: '63ee0b5f5db94e1bee99e08e',
//     });
//     expect(res.statusCode).toBe(200);
//   });
// });
