import React from 'react';
import './App.css';
import { Graph, GraphProps } from './components/Graph';
// import logo from './logo.svg';

const data: GraphProps = {'data': [{'id': 'fake-data',
  'data': [{ 'x': '2020-12-15', 'y': 0.0},
    { 'x': '2020-12-22', 'y': 0.0025 },
    { 'x': '2020-12-29', 'y': 0.005 },
    { 'x': '2021-01-05', 'y': 0.0075 },
    { 'x': '2021-01-12', 'y': 0.01 }]}]}

function App() {
  const graph = Graph(data);
  return (
    <div className='App'>
      {graph}
    </div>
  );
}

export default App;
