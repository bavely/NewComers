import { objectType } from 'nexus'
import { VerificationToken } from 'nexus-prisma'

export const VerificationTokenType = objectType({
    name: 'VerificationToken',
    definition(t) {
        t.field(VerificationToken.identifier)
        t.field(VerificationToken.token)
        t.field(VerificationToken.expires)
    },
})