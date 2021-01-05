/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDataPoint = /* GraphQL */ `
  query GetDataPoint($date: String!) {
    getDataPoint(date: $date) {
      createdAt
      date
      modified
      updatedAt
      vaccinated
    }
  }
`;
export const listDataPoints = /* GraphQL */ `
  query ListDataPoints(
    $filter: ModelDataPointFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDataPoints(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        date
        modified
        updatedAt
        vaccinated
      }
      nextToken
    }
  }
`;
