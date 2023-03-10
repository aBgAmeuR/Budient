import app from '../app';
import request from 'supertest';

describe('GET /transaction', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/transaction').send({
      id: '63ee0b5f5db94e1bee99e08e',
    });
    console.log(res);
    expect(res.statusCode).toBe(200);
  });
});

describe('POST /transaction', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).post('/transaction').send({
      id: '63ee0b5f5db94e1bee99e08e',
      name: 'Johnny',
    });
    console.log(res);
    expect(res.statusCode).toBe(200);
  });
});

describe('PUT /transaction', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).put('/transaction').send({
      id: '63ee0b5f5db94e1bee99e08e',
      name: 'Johnny',
    });
    console.log(res);
    expect(res.statusCode).toBe(200);
  });
});

describe('DELETE /transaction', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).delete('/transaction').send({
      id: '63ee0b5f5db94e1bee99e08e',
    });
    console.log(res);
    expect(res.statusCode).toBe(200);
  });
});

