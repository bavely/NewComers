import { objectType } from 'nexus'
import { Authenticator } from 'nexus-prisma'

export const AuthenticatorType = objectType({
    name: 'Authenticator',
    definition(t) {
        t.field(Authenticator.userId)
        t.field(Authenticator.credentialID)
        t.field(Authenticator.providerAccountId)
        t.field(Authenticator.credentialPublicKey)
        t.field(Authenticator.counter)
        t.field(Authenticator.credentialDeviceType)
        t.field(Authenticator.credentialBackedUp)
        t.field(Authenticator.transports)
    },
})