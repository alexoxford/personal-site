/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDataPointInput = {
  date: string,
  modified?: string | null,
  vaccinated?: number | null,
};

export type DeleteDataPointInput = {
  date: string,
};

export type UpdateDataPointInput = {
  date: string,
  modified?: string | null,
  vaccinated?: number | null,
};

export type TableDataPointFilterInput = {
  date?: TableStringFilterInput | null,
  modified?: TableStringFilterInput | null,
  vaccinated?: TableIntFilterInput | null,
};

export type TableStringFilterInput = {
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
};

export type TableIntFilterInput = {
  between?: Array< number | null > | null,
  contains?: number | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notContains?: number | null,
};

export type CreateDataPointMutationVariables = {
  input: CreateDataPointInput,
};

export type CreateDataPointMutation = {
  createDataPoint:  {
    __typename: "DataPoint",
    date: string,
    modified: string | null,
    vaccinated: number | null,
  } | null,
};

export type DeleteDataPointMutationVariables = {
  input: DeleteDataPointInput,
};

export type DeleteDataPointMutation = {
  deleteDataPoint:  {
    __typename: "DataPoint",
    date: string,
    modified: string | null,
    vaccinated: number | null,
  } | null,
};

export type UpdateDataPointMutationVariables = {
  input: UpdateDataPointInput,
};

export type UpdateDataPointMutation = {
  updateDataPoint:  {
    __typename: "DataPoint",
    date: string,
    modified: string | null,
    vaccinated: number | null,
  } | null,
};

export type GetDataPointQueryVariables = {
  date: string,
};

export type GetDataPointQuery = {
  getDataPoint:  {
    __typename: "DataPoint",
    date: string,
    modified: string | null,
    vaccinated: number | null,
  } | null,
};

export type ListDataPointsQueryVariables = {
  filter?: TableDataPointFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDataPointsQuery = {
  listDataPoints:  {
    __typename: "DataPointConnection",
    items:  Array< {
      __typename: "DataPoint",
      date: string,
      modified: string | null,
      vaccinated: number | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateDataPointSubscriptionVariables = {
  date?: string | null,
  modified?: string | null,
  vaccinated?: number | null,
};

export type OnCreateDataPointSubscription = {
  onCreateDataPoint:  {
    __typename: "DataPoint",
    date: string,
    modified: string | null,
    vaccinated: number | null,
  } | null,
};

export type OnDeleteDataPointSubscriptionVariables = {
  date?: string | null,
  modified?: string | null,
  vaccinated?: number | null,
};

export type OnDeleteDataPointSubscription = {
  onDeleteDataPoint:  {
    __typename: "DataPoint",
    date: string,
    modified: string | null,
    vaccinated: number | null,
  } | null,
};

export type OnUpdateDataPointSubscriptionVariables = {
  date?: string | null,
  modified?: string | null,
  vaccinated?: number | null,
};

export type OnUpdateDataPointSubscription = {
  onUpdateDataPoint:  {
    __typename: "DataPoint",
    date: string,
    modified: string | null,
    vaccinated: number | null,
  } | null,
};
