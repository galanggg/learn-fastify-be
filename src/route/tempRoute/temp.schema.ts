export const post = {
  type: 'object',
  required: ['title'],
  properties: {
    title: { type: 'string' },
  },
} as const // don't forget to use const !

export const postResponse = {
  201: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'string' },
    },
  },
} as const

export const getResponse = {
  200: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
        },
        title: {
          type: 'string',
        },
      },
    },
  },
}
