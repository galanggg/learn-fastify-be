import app from '../../src/app'
let apps
describe('Root route', () => {
  beforeEach(() => {
    apps = app()
  })

  afterEach(() => {
    apps.close()
  })

  it('should return 200 when root route called', async () => {
    const res = await apps.inject({
      url: '/',
    })

    expect(res.statusCode).toBe(200)
    expect(res.json()).toEqual({ hello: 'world!' })
  })
})
