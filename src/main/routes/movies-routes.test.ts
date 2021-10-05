import request from 'supertest'
import app from '../config/app'

describe('Movies Routes', () => {
  test('should return 200 as statusCode and an array of movies', async () => {
    const response = await request(app).get('/api/movies').send({ lang: 'en' }).expect(200)
    expect(response.statusCode).toEqual(200)
    expect(response.body.length).toBeGreaterThan(1)
  })
})
