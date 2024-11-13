import {   nonNull, stringArg, extendType } from 'nexus'



export const SessionMutation = extendType({
        type: 'Mutation',
        definition(t) {
            t.field('createSession', {
                type: 'Session',
                args: {
                    userId: nonNull(stringArg()),
                    expires: nonNull(stringArg()),
                    sessionToken: nonNull(stringArg()),
                    accessToken: nonNull(stringArg()),
                },
                resolve: (_, args, ctx) => {
                    return ctx.prisma.session.create({
                        data: {
                            userId: args.userId,
                            expires: args.expires,
                            sessionToken: args.sessionToken,
                            accessToken: args.accessToken
                        },
                    })
                },
            })
            // Add other mutations as needed
        },
    })