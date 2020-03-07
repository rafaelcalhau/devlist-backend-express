import request from 'supertest'
import app from '../../src/app'

describe('Listing Users on public route', () => {
  it('should access a simple response with welcome message ', async () => {
    const response = await request(app).get('/api')
    const expected = { message: 'Welcome! :)' }

    expect(response.status).toBe(200)
    expect(response.body).toEqual(expected)
    expect(response.body.message).toBe('Welcome! :)')
  })
})
