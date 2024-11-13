import { nonNull, stringArg, extendType } from 'nexus'
//extendType
export const accountsQueries = extendType({
  type: 'Query',
  definition(t) {
    // Fetch an account by unique providerId and providerAccountId
    t.field('accountByProvider', {
      type: 'Account',
      args: {
        provider: nonNull(stringArg()),
        providerAccountId: nonNull(stringArg()),
      },
      resolve: (_, { provider, providerAccountId }, ctx) => {
        return ctx.prisma.account.findUnique({
          where: { provider_providerAccountId: { provider, providerAccountId } },
        });
      },
    });

    // Fetch all accounts for a specific user
    t.list.field('accountsByUserId', {
      type: 'Account',
      args: {
        userId: nonNull(stringArg()),
      },
      resolve: (_, { userId }, ctx) => {
        return ctx.prisma.account.findMany({
          where: { userId },
        });
      },
    });
  },
});







// extendType({
//     type: 'Query',
//     definition(t) {
//       t.field('account', {
//         type: 'Account',
//         args: {
//             userId: nonNull(stringArg()),
//         },
//         resolve: (_, { userId }, ctx) => {
//           return ctx.prisma.account.findUnique({ where: { userId } })
//         },
//       })
//       // Add other queries as needed
//     },
//   })