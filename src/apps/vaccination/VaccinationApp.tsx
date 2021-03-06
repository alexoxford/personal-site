import { VaccineProgressGraph, VaccineProgressGraphProps } from './VaccineProgressGraph'
import { listVaccineDataPoints } from '../../graphql/queries'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import awsconfig from '../../aws-exports'
import { Async } from 'react-async'
import React, { ReactElement } from 'react'

Amplify.configure(awsconfig)

const population = 8536000
const dosesNeeded = 2 * population

interface DataPoint {
  date: string
  vaccinations: number
  id: string
}

interface GraphDataPoint {
  x: number
  y: number | null
  trend: number | null
}

interface DataPointList {
  data: {
    listVaccineDataPoints: {
      items: [DataPoint]
    } | null
  }
}

const fetchData = async (): Promise<DataPoint[]> => {
  // queries and mutations return Promises; subscriptions return Observables
  return await (API.graphql(graphqlOperation(listVaccineDataPoints)) as Promise<DataPointList>)
    .then(result => result.data.listVaccineDataPoints?.items ?? new Array<DataPoint>())
}

class VaccinationApp extends React.Component<{}, { projection: boolean }> {
  constructor (props: {}) {
    super(props)
    this.state = { projection: true }
    this.handleProjectionToggleClick = this.handleProjectionToggleClick.bind(this)
  }

  handleProjectionToggleClick (): void {
    this.setState({ projection: !this.state.projection })
  }

  dataPointsToGraphDataPoints (points: DataPoint[]): GraphDataPoint[] {
    if (points.length < 2) { return new Array<GraphDataPoint>() }

    var dataPoints: GraphDataPoint[] = points
      .sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
      .map((point) => {
        return { x: Date.parse(point.date), y: point.vaccinations / dosesNeeded, trend: null }
      })
    return this.state.projection ? this.addProjection(dataPoints) : dataPoints
  }

  addProjection (points: GraphDataPoint[]): GraphDataPoint[] {
    points[points.length - 1].trend = points[points.length - 1].y

    const millisPerDay = Date.UTC(1970, 0, 2, 0, 0, 0, 0)

    var index = points.length - 1
    const lastDate = points[index].x / millisPerDay
    var startDate = lastDate
    while (lastDate - startDate < 7 && index > 0) {
      index -= 1
      startDate = points[index].x / millisPerDay
    }

    const progress = points[points.length - 1]?.y ?? 0
    const rate = (progress - (points[index]?.y ?? 0)) / (lastDate - startDate)
    const remaining = 1 - progress
    const timeRemaining = remaining / rate

    const endpoint = (lastDate + timeRemaining) * millisPerDay

    points.push({ x: endpoint, y: null, trend: 1 })

    return points
  }

  render (): ReactElement {
    return (
      <Async promiseFn={fetchData}>
        <Async.Loading> <p>Loading...</p> </Async.Loading>

        <Async.Fulfilled>
          {(data: DataPoint[]) => {
            if (data === undefined || data === null) { return (<p>Data is undefined</p>) }

            const props: VaccineProgressGraphProps = {
              data: this.dataPointsToGraphDataPoints(data)
            }
            const graph = VaccineProgressGraph(props)

            return (
              <div className='App'>
                <h1>Virginia COVID-19 Vaccination Progress</h1>

                {graph}

                <button onClick={this.handleProjectionToggleClick}>Toggle Projection</button>

                <p>The graph above shows the number of COVID-19 vaccine doses administered, as a percentage of twice the population of Virginia (accounting for the need for two doses of the vaccine).</p>
              </div>
            )
          }}
        </Async.Fulfilled>

        <Async.Rejected>
          {error => `Something went wrong: ${error.message}`}
        </Async.Rejected>
      </Async>
    )
  }
}

export default VaccinationApp
