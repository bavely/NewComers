import { objectType } from 'nexus'
import { Account } from 'nexus-prisma'

export const AccountType = objectType({
  name: 'Account',
  definition(t) {
    t.nonNull.field(Account.userId);
    t.nonNull.field(Account.type);
    t.nonNull.field(Account.provider);
    t.nonNull.field(Account.providerAccountId);
    t.nonNull.field(Account.refresh_token);
    t.nonNull.field(Account.access_token);
    t.nonNull.field(Account.expires_at);
    t.nonNull.field(Account.token_type);
    t.nonNull.field(Account.scope);
    t.nonNull.field(Account.id_token);
    t.nonNull.field(Account.session_state);
    t.nonNull.field(Account.createdAt);
    t.nonNull.field(Account.updatedAt);

    // Resolve the associated user
    t.field('user', {
      type: 'User',
      resolve: (parent, _, ctx) => {
        return ctx.prisma.User.findUnique({
          where: { id: parent.userId },
        });
      },
    });
  },
});