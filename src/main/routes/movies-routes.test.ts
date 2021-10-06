import request from 'supertest'
import app from '../config/app'

describe('Movies Routes', () => {
  test('should return 200 as statusCode and an array of most popular movies', async () => {
    const response = await request(app).get('/api/most-popular-movies').send({ lang: 'en' }).expect(200)
    expect(response.statusCode).toEqual(200)
    expect(response.body.length).toBeGreaterThan(1)
  })
  test('should return 200 as statusCode and an array of coming soon movies', async () => {
    const response = await request(app).get('/api/coming-soon-movies').send({ lang: 'en' }).expect(200)
    expect(response.statusCode).toEqual(200)
    expect(response.body.length).toBeGreaterThan(1)
  })
})
