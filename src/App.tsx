import React from 'react';
import './App.css';
import { Graph, GraphProps } from './components/Graph';
import { listDataPoints } from './graphql/queries';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

type DataPoint = {
  date: string,
  vaccinated: number,
  modified: string
}

type GraphDataPoint = {
  x: string,
  y: number
}

function dataPointsToGraphDataPoints(points: DataPoint[]): GraphDataPoint[] {
  return points.map((point) => {
    return { 'x': point.date, 'y': point.vaccinated };
  });
}

function GetGraph() {

  var data = new Array<DataPoint>();

  // queries and mutations return Promises; subscriptions return Observables
  (API.graphql(graphqlOperation(listDataPoints)) as Promise<DataPoint[]>).then((result) => {
    console.log(result);
    data = result;
  }).catch(console.error);

  const props: GraphProps = {
    'data': [{
      'id': 'graphql-data',
      'data': dataPointsToGraphDataPoints(data)
    }]
  };
  return Graph(props);
}

function App() {

  const graph = GetGraph();

  return (
    <div className='App'>
      {graph}
    </div>
  );
}

export default App;
