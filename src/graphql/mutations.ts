/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDataPoint = /* GraphQL */ `
  mutation CreateDataPoint(
    $condition: ModelDataPointConditionInput
    $input: CreateDataPointInput!
  ) {
    createDataPoint(condition: $condition, input: $input) {
      createdAt
      date
      modified
      updatedAt
      vaccinated
    }
  }
`;
export const deleteDataPoint = /* GraphQL */ `
  mutation DeleteDataPoint(
    $condition: ModelDataPointConditionInput
    $input: DeleteDataPointInput!
  ) {
    deleteDataPoint(condition: $condition, input: $input) {
      createdAt
      date
      modified
      updatedAt
      vaccinated
    }
  }
`;
export const updateDataPoint = /* GraphQL */ `
  mutation UpdateDataPoint(
    $condition: ModelDataPointConditionInput
    $input: UpdateDataPointInput!
  ) {
    updateDataPoint(condition: $condition, input: $input) {
      createdAt
      date
      modified
      updatedAt
      vaccinated
    }
  }
`;
