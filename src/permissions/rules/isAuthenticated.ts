import { getSession } from 'next-auth/react'
import { rule } from 'graphql-shield'

export const isAuthenticated = rule({ cache: 'contextual' })(async (_parent, _args, context) => {
  const session = await getSession(context)
  return Boolean(session)
})
