/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVaccineDataPoint = /* GraphQL */ `
  mutation CreateVaccineDataPoint(
    $input: CreateVaccineDataPointInput!
    $condition: ModelVaccineDataPointConditionInput
  ) {
    createVaccineDataPoint(input: $input, condition: $condition) {
      date
      vaccinations
      id
    }
  }
`;
export const updateVaccineDataPoint = /* GraphQL */ `
  mutation UpdateVaccineDataPoint(
    $input: UpdateVaccineDataPointInput!
    $condition: ModelVaccineDataPointConditionInput
  ) {
    updateVaccineDataPoint(input: $input, condition: $condition) {
      date
      vaccinations
      id
    }
  }
`;
export const deleteVaccineDataPoint = /* GraphQL */ `
  mutation DeleteVaccineDataPoint(
    $input: DeleteVaccineDataPointInput!
    $condition: ModelVaccineDataPointConditionInput
  ) {
    deleteVaccineDataPoint(input: $input, condition: $condition) {
      date
      vaccinations
      id
    }
  }
`;
