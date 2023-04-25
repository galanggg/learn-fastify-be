import app from '../../src/app'
let apps
describe('temp route', () => {
  beforeAll(() => {
    apps = app()
  })

  afterAll(() => {
    apps.close()
  })

  it('shoould return id when post route called with valid data', async () => {
    const res = await apps.inject({
      method: 'POST',
      url: '/api/v1/test/',
      payload: {
        title: 'some test title',
      },
    })
    expect(res.statusCode).toBe(201)
    expect(res.json().id).toBeDefined()
  })

  it('should return 200 for GET route', async () => {
    const res = await apps.inject({
      method: 'GET',
      url: '/api/v1/test/',
    })
    expect(res.statusCode).toBe(200)
  })
})
