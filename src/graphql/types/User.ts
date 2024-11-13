import { objectType } from 'nexus'
import { User } from 'nexus-prisma'
export const UserType = objectType({
    name: 'User',
    definition(t) {
      t.field(User.id)
      t.field(User.name)
      t.field(User.email)
      t.field(User.emailVerified)
      t.field(User.image)
      t.field(User.createdAt)
      t.field(User.updatedAt)
      t.list.field('accounts', {
        type: 'Account',
        resolve: (parent, _, ctx) => {
          return ctx.prisma.Account.findMany({ where: { userId: parent.id } })
        },
      })
      t.list.field('sessions', {
        type: 'Session',
        resolve: (parent, _, ctx) => {
          return ctx.prisma.Session.findMany({ where: { userId: parent.id } })
        },
      })
      t.list.field("Authenticator",
        {
          type: "Authenticator",
          resolve: (parent, _, ctx) => {
            return ctx.prisma.Authenticator.findMany({ where: { userId: parent.id } })
          },
        }
      )
    }
})


