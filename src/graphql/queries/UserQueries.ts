import {  extendType, intArg, nonNull, stringArg } from 'nexus'


export const Query = extendType({
    type: 'Query',
    definition(t) {
      t.nonNull.list.nonNull.field('users', {
        type: 'User',
        args: {
          skip: nonNull(intArg()),
          take: nonNull(intArg()),
        },
        resolve: (_, args, ctx) => {
          return ctx.prisma.user.findMany(
            {
              skip: args.skip,
              take:   args.take
            }
          )
        },
      })
      t.field('user', {
        type: 'User',
        args: {
          id: nonNull(stringArg()),
        },
        resolve: (_, { id }, ctx) => {
          return ctx.prisma.user.findUnique({ where: { id } })
        },
      })
      // Add other queries as needed
      
    },
  })