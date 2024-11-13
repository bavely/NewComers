import { makeSchema, asNexusMethod } from 'nexus'
import * as types from './types'
import { applyMiddleware } from 'graphql-middleware'
import * as queries from './queries'
import * as mutations from './mutation'
import { DateTimeResolver } from 'graphql-scalars'
import { permissions } from '@/permissions'
export const DateTime = asNexusMethod(DateTimeResolver, 'date')
export const baseSchema = makeSchema({
  types:[types,queries,mutations, DateTime],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  contextType: {
    module: require.resolve('./context'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
})

export const schema = applyMiddleware(baseSchema, permissions)