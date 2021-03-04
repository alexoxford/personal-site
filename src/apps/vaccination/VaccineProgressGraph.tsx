import React, { ReactElement } from 'react'
import { CartesianGrid, LineChart, Tooltip, XAxis, Line, ResponsiveContainer, YAxis } from 'recharts'

const dateFormat = Intl.DateTimeFormat('en', {
  year: '2-digit',
  month: 'numeric',
  day: 'numeric',
  timeZone: 'UTC'
})

const percentFormat = Intl.NumberFormat('en', {
  maximumFractionDigits: 2,
  style: 'percent'
})

export function VaccineProgressGraph ({ data }: VaccineProgressGraphProps): ReactElement {
  return (
    <div style={{ height: 400, width: '90%', margin: '0 auto' }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
        >

          <XAxis
            dataKey='x'
            type='number'
            domain={['auto', 'auto']}
            scale='time'
            interval='preserveStartEnd'
            tickFormatter={(value: number) => { return dateFormat.format(new Date(value)) }}
          />

          <YAxis
            dataKey='y'
            domain={[0, 1]}
            tickFormatter={(value: number) => { return percentFormat.format(value) }}
          />

          <Tooltip
            separator=''
            labelFormatter={(value: number) => { return dateFormat.format(new Date(value)) }}
            formatter={(value: number) => { return [percentFormat.format(value), ''] }}
          />

          <CartesianGrid stroke='#f5f5f5' />

          <Line type='monotone' dataKey='y' stroke='#ff7300' />
          <Line type='monotone' dataKey='trend' stroke='#00ff00' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export interface VaccineProgressGraphProps {
  data: Array<{
    x: number
    y: number | null
    trend: number | null
  }>
}
