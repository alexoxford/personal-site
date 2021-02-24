import { ModelInit, MutableModel, PersistentModelConstructor } from '@aws-amplify/datastore'

export declare class VaccineDataPoint {
  readonly id: string
  readonly date: string
  readonly vaccinations: number
  constructor (init: ModelInit<VaccineDataPoint>);
  static copyOf (source: VaccineDataPoint, mutator: (draft: MutableModel<VaccineDataPoint>) => MutableModel<VaccineDataPoint> | void): VaccineDataPoint;
}
