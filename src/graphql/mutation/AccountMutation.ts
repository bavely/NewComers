import {   nonNull, stringArg, extendType } from 'nexus'
// import { DateTime } from 'nexus-prisma/scalars';
// extendType,
export const AccountMutation = extendType({
  type: 'Mutation',
  definition(t) {
    // Create a new account
    t.field('createAccount', {
      type: 'Account',
      args: {
        userId: nonNull(stringArg()),
        providerType: nonNull(stringArg()),
        providerId: nonNull(stringArg()),
        providerAccountId: nonNull(stringArg()),
        refreshToken: stringArg(),
        accessToken: stringArg(),
        accessTokenExpires: stringArg(),
      },
      resolve: (_, args, ctx) => {
        return ctx.prisma.account.create({
          data: {
            userId: args.userId,
            providerType: args.providerType,
            providerId: args.providerId,
            providerAccountId: args.providerAccountId,
            refreshToken: args.refreshToken,
            accessToken: args.accessToken,
            accessTokenExpires: args.accessTokenExpires,
          },
        });
      },
    });

    // Delete an account
    t.field('deleteAccount', {
      type: 'Account',
      args: {
        id: nonNull(stringArg()),
      },
      resolve: (_, { id }, ctx) => {
        return ctx.prisma.account.delete({
          where: { id },
        });
      },
    });
  },
});




// extendType({
//     type: 'Mutation',
//     definition(t) {
//       t.nonNull.field('createAccount', {
//         type: 'Account',
//         args: {
//           userId: nonNull(stringArg()),
//           providerType: nonNull(stringArg()),
//           providerId: nonNull(stringArg()),
//           providerAccountId: nonNull(stringArg()),
//         },
//         resolve: (_, { userId, providerType, providerId, providerAccountId }, ctx) => {
//           return ctx.prisma.account.create({
//             data: {
//               userId, providerType, providerId, providerAccountId
//             },
//           })
//         },
//       })
//       // Add other mutations as needed
//     },
//   })