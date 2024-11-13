import {  extendType, nonNull, stringArg } from 'nexus'

export const VerificationTokenQueries = extendType({
        type: 'Query',
        definition(t) {
            t.nonNull.list.nonNull.field('VerificationToken', {
                type: 'VerificationToken',
                resolve: (_, __, ctx) => {
                    return ctx.prisma.session.findMany()
                },
            })

            t.field('VerificationToken', {
                type: 'VerificationToken',
                args: {
                    identifier : nonNull(stringArg()), 
                    token : nonNull(stringArg()),
                },
                resolve: (_, args, ctx) => {
                    return ctx.prisma.session.findUnique({ where: { identifier: args.identifier, token: args.token } })
                },
            })

        },
    })