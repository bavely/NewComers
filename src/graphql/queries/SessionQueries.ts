import {  extendType, nonNull, stringArg } from 'nexus'

export const SessionQueries = extendType({
        type: 'Query',
        definition(t) {

            t.nonNull.list.nonNull.field('sessions', {
                type: 'Session',
                resolve: (_, __, ctx) => {
                    return ctx.prisma.session.findMany()
                },
            })

            t.field('sessionsByUserId', {
                type: 'Session',
                args: {
                    userId: nonNull(stringArg()),
                },
                resolve: (_, { userId }, ctx) => {
                    return ctx.prisma.session.findMany({ where: { userId } })
                },
            })
            // Add other queries as needed
        },
    })