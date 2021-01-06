/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDataPoint = /* GraphQL */ `
  subscription OnCreateDataPoint(
    $date: String
    $modified: String
    $vaccinated: Int
  ) {
    onCreateDataPoint(
      date: $date
      modified: $modified
      vaccinated: $vaccinated
    ) {
      date
      modified
      vaccinated
    }
  }
`;
export const onDeleteDataPoint = /* GraphQL */ `
  subscription OnDeleteDataPoint(
    $date: String
    $modified: String
    $vaccinated: Int
  ) {
    onDeleteDataPoint(
      date: $date
      modified: $modified
      vaccinated: $vaccinated
    ) {
      date
      modified
      vaccinated
    }
  }
`;
export const onUpdateDataPoint = /* GraphQL */ `
  subscription OnUpdateDataPoint(
    $date: String
    $modified: String
    $vaccinated: Int
  ) {
    onUpdateDataPoint(
      date: $date
      modified: $modified
      vaccinated: $vaccinated
    ) {
      date
      modified
      vaccinated
    }
  }
`;
