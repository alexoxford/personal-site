/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVaccineDataPoint = /* GraphQL */ `
  query GetVaccineDataPoint($id: ID!) {
    getVaccineDataPoint(id: $id) {
      date
      vaccinations
      id
    }
  }
`;
export const listVaccineDataPoints = /* GraphQL */ `
  query ListVaccineDataPoints(
    $filter: ModelVaccineDataPointFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVaccineDataPoints(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        date
        vaccinations
        id
      }
      nextToken
      startedAt
    }
  }
`;
export const syncVaccineDataPoints = /* GraphQL */ `
  query SyncVaccineDataPoints(
    $filter: ModelVaccineDataPointFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVaccineDataPoints(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        date
        vaccinations
        id
      }
      nextToken
      startedAt
    }
  }
`;
