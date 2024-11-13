import {   nonNull, stringArg, extendType } from 'nexus'


export const VerificationTokenMutation = extendType({
    type: 'Mutation',
    definition(t) {
      t.nonNull.field('createVerificationToken', {
        type: 'VerificationToken',
        args: {
          identifier: nonNull(stringArg()),
          token: nonNull(stringArg()),
          expires: nonNull(stringArg()),
        },
        resolve: (_, { identifier, token, expires }, ctx) => {
          return ctx.prisma.VerificationToken.create({
        data: {
          identifier,
          token,
          expires,
        },
          })
        },
      })
      // Add other mutations as needed
    },  
  })