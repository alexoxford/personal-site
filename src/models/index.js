// @ts-check
import { initSchema } from '@aws-amplify/datastore'
import { schema } from './schema'

const { VaccineDataPoint } = initSchema(schema)

export {
  VaccineDataPoint
}
