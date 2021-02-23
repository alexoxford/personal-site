/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateVaccineDataPointInput = {
  date: string,
  vaccinations: number,
  id?: string | null,
};

export type ModelVaccineDataPointConditionInput = {
  date?: ModelStringInput | null,
  vaccinations?: ModelIntInput | null,
  and?: Array< ModelVaccineDataPointConditionInput | null > | null,
  or?: Array< ModelVaccineDataPointConditionInput | null > | null,
  not?: ModelVaccineDataPointConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type VaccineDataPoint = {
  __typename: "VaccineDataPoint",
  date?: string,
  vaccinations?: number,
  id?: string,
};

export type UpdateVaccineDataPointInput = {
  date?: string | null,
  vaccinations?: number | null,
  id: string,
};

export type DeleteVaccineDataPointInput = {
  id?: string | null,
};

export type ModelVaccineDataPointFilterInput = {
  date?: ModelStringInput | null,
  vaccinations?: ModelIntInput | null,
  id?: ModelIDInput | null,
  and?: Array< ModelVaccineDataPointFilterInput | null > | null,
  or?: Array< ModelVaccineDataPointFilterInput | null > | null,
  not?: ModelVaccineDataPointFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelVaccineDataPointConnection = {
  __typename: "ModelVaccineDataPointConnection",
  items?:  Array<VaccineDataPoint | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateVaccineDataPointMutationVariables = {
  input?: CreateVaccineDataPointInput,
  condition?: ModelVaccineDataPointConditionInput | null,
};

export type CreateVaccineDataPointMutation = {
  createVaccineDataPoint?:  {
    __typename: "VaccineDataPoint",
    date: string,
    vaccinations: number,
    id: string,
  } | null,
};

export type UpdateVaccineDataPointMutationVariables = {
  input?: UpdateVaccineDataPointInput,
  condition?: ModelVaccineDataPointConditionInput | null,
};

export type UpdateVaccineDataPointMutation = {
  updateVaccineDataPoint?:  {
    __typename: "VaccineDataPoint",
    date: string,
    vaccinations: number,
    id: string,
  } | null,
};

export type DeleteVaccineDataPointMutationVariables = {
  input?: DeleteVaccineDataPointInput,
  condition?: ModelVaccineDataPointConditionInput | null,
};

export type DeleteVaccineDataPointMutation = {
  deleteVaccineDataPoint?:  {
    __typename: "VaccineDataPoint",
    date: string,
    vaccinations: number,
    id: string,
  } | null,
};

export type GetVaccineDataPointQueryVariables = {
  id?: string,
};

export type GetVaccineDataPointQuery = {
  getVaccineDataPoint?:  {
    __typename: "VaccineDataPoint",
    date: string,
    vaccinations: number,
    id: string,
  } | null,
};

export type ListVaccineDataPointsQueryVariables = {
  filter?: ModelVaccineDataPointFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVaccineDataPointsQuery = {
  listVaccineDataPoints?:  {
    __typename: "ModelVaccineDataPointConnection",
    items?:  Array< {
      __typename: "VaccineDataPoint",
      date: string,
      vaccinations: number,
      id: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncVaccineDataPointsQueryVariables = {
  filter?: ModelVaccineDataPointFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncVaccineDataPointsQuery = {
  syncVaccineDataPoints?:  {
    __typename: "ModelVaccineDataPointConnection",
    items?:  Array< {
      __typename: "VaccineDataPoint",
      date: string,
      vaccinations: number,
      id: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateVaccineDataPointSubscription = {
  onCreateVaccineDataPoint?:  {
    __typename: "VaccineDataPoint",
    date: string,
    vaccinations: number,
    id: string,
  } | null,
};

export type OnUpdateVaccineDataPointSubscription = {
  onUpdateVaccineDataPoint?:  {
    __typename: "VaccineDataPoint",
    date: string,
    vaccinations: number,
    id: string,
  } | null,
};

export type OnDeleteVaccineDataPointSubscription = {
  onDeleteVaccineDataPoint?:  {
    __typename: "VaccineDataPoint",
    date: string,
    vaccinations: number,
    id: string,
  } | null,
};
