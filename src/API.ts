/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type ModelDataPointConditionInput = {
  and?: Array< ModelDataPointConditionInput | null > | null,
  date?: ModelStringInput | null,
  modified?: ModelStringInput | null,
  not?: ModelDataPointConditionInput | null,
  or?: Array< ModelDataPointConditionInput | null > | null,
  vaccinated?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type CreateDataPointInput = {
  date: string,
  modified?: string | null,
  vaccinated: string,
};

export type DeleteDataPointInput = {
  date?: string | null,
};

export type UpdateDataPointInput = {
  date?: string | null,
  modified?: string | null,
  vaccinated?: string | null,
};

export type ModelDataPointFilterInput = {
  and?: Array< ModelDataPointFilterInput | null > | null,
  date?: ModelStringInput | null,
  modified?: ModelStringInput | null,
  not?: ModelDataPointFilterInput | null,
  or?: Array< ModelDataPointFilterInput | null > | null,
  vaccinated?: ModelStringInput | null,
};

export type CreateDataPointMutationVariables = {
  condition?: ModelDataPointConditionInput | null,
  input: CreateDataPointInput,
};

export type CreateDataPointMutation = {
  createDataPoint:  {
    __typename: "DataPoint",
    createdAt: string,
    date: string,
    modified: string | null,
    updatedAt: string,
    vaccinated: string,
  } | null,
};

export type DeleteDataPointMutationVariables = {
  condition?: ModelDataPointConditionInput | null,
  input: DeleteDataPointInput,
};

export type DeleteDataPointMutation = {
  deleteDataPoint:  {
    __typename: "DataPoint",
    createdAt: string,
    date: string,
    modified: string | null,
    updatedAt: string,
    vaccinated: string,
  } | null,
};

export type UpdateDataPointMutationVariables = {
  condition?: ModelDataPointConditionInput | null,
  input: UpdateDataPointInput,
};

export type UpdateDataPointMutation = {
  updateDataPoint:  {
    __typename: "DataPoint",
    createdAt: string,
    date: string,
    modified: string | null,
    updatedAt: string,
    vaccinated: string,
  } | null,
};

export type GetDataPointQueryVariables = {
  date: string,
};

export type GetDataPointQuery = {
  getDataPoint:  {
    __typename: "DataPoint",
    createdAt: string,
    date: string,
    modified: string | null,
    updatedAt: string,
    vaccinated: string,
  } | null,
};

export type ListDataPointsQueryVariables = {
  filter?: ModelDataPointFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDataPointsQuery = {
  listDataPoints:  {
    __typename: "ModelDataPointConnection",
    items:  Array< {
      __typename: "DataPoint",
      createdAt: string,
      date: string,
      modified: string | null,
      updatedAt: string,
      vaccinated: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateDataPointSubscription = {
  onCreateDataPoint:  {
    __typename: "DataPoint",
    createdAt: string,
    date: string,
    modified: string | null,
    updatedAt: string,
    vaccinated: string,
  } | null,
};

export type OnDeleteDataPointSubscription = {
  onDeleteDataPoint:  {
    __typename: "DataPoint",
    createdAt: string,
    date: string,
    modified: string | null,
    updatedAt: string,
    vaccinated: string,
  } | null,
};

export type OnUpdateDataPointSubscription = {
  onUpdateDataPoint:  {
    __typename: "DataPoint",
    createdAt: string,
    date: string,
    modified: string | null,
    updatedAt: string,
    vaccinated: string,
  } | null,
};
