import {  extendType, nonNull, stringArg } from 'nexus'

export const Mutation = extendType({
    type: 'Mutation',
    definition(t) {
      t.nonNull.field('createUser', {
        type: 'User',
        args: {
          email: nonNull(stringArg()),
          name: stringArg(),
          password: nonNull(stringArg()),
        },
        resolve: (_, { email, name, password }, ctx) => {
          return ctx.prisma.user.create({
            data: {
              email,
              name,
              password
            },
          })
        },
      })
      // Add other mutations as needed
    },
  })