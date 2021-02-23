import React from 'react';
import './App.css';
import { Graph, GraphProps } from './components/Graph';
import { listVaccineDataPoints } from './graphql/queries';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import { useAsync } from 'react-async'

Amplify.configure(awsconfig);

type DataPoint = {
  date: string,
  vaccinations: number,
  id: string
}

type GraphDataPoint = {
  x: string,
  y: number
}

function dataPointsToGraphDataPoints(points: DataPoint[]): GraphDataPoint[] {
  const population = 8536000;
  const dosesNeeded = 2 * population;
  return points
    .sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
    .map((point) => {
      return { 'x': point.date, 'y': point.vaccinations / dosesNeeded };
    });
}

type DataPointList = {
  data: {
    listVaccineDataPoints: {
      items: [DataPoint]
    } | null
  }
}

const fetchData = async () => {
  // queries and mutations return Promises; subscriptions return Observables
  return await (API.graphql(graphqlOperation(listVaccineDataPoints)) as Promise<DataPointList>)
    .then(result => result.data.listVaccineDataPoints ? result.data.listVaccineDataPoints.items : new Array<DataPoint>())
}

function App() {

  const { data, error, isLoading } = useAsync({ promiseFn: fetchData })

  if (isLoading) { return (<p>"Loading..."</p>) }
  if (error) { return (<p>error</p>) }

  if (!data) { return (<p>"Data is undefined"</p>) }

  const props: GraphProps = {
    'data': [{
      'id': 'graphql-data',
      'data': dataPointsToGraphDataPoints(data)
    }]
  };
  const graph = Graph(props);

  return (
    <div className='App'>
      <h1>Virginia COVID-19 Vaccination Progress</h1>

      {graph}

      <p>The graph above shows the number of COVID-19 vaccine doses administered, as a percentage of twice the population of Virginia (accounting for the need for two doses of the vaccine).</p>
    </div>
  );
}

export default App;
