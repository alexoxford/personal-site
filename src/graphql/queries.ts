/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDataPoint = /* GraphQL */ `
  query GetDataPoint($date: String!) {
    getDataPoint(date: $date) {
      date
      modified
      vaccinated
    }
  }
`;
export const listDataPoints = /* GraphQL */ `
  query ListDataPoints(
    $filter: TableDataPointFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDataPoints(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        date
        modified
        vaccinated
      }
      nextToken
    }
  }
`;
