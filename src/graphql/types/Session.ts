import { objectType } from 'nexus'
import { Session } from 'nexus-prisma'
export const SessionType = objectType({
    name: 'Session',
    definition(t) {
        t.field(Session.userId)
        t.field(Session.expires)
        t.field(Session.sessionToken)
        t.field(Session.createdAt)
        t.field(Session.updatedAt)
        t.field("user", {
            type: "User",
            resolve: (parent, _, ctx) => {
                return ctx.prisma.User.findUnique({ where: { id: parent.userId } })
            },
            
        })
    }
})