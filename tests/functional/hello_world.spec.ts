import { test } from '@japa/runner'

test.group('Hello world', () => {
  test('Server responds with hello world', async ({ client }) => {
    const response = await client.get('/')

    response.assertStatus(200)

    response.assertBody({
      hello: 'world',
    })
  })
})
