// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLine } from '@nivo/line';
import React from 'react';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

export function Graph({ data }: GraphProps) {
    return (
        <div style={{height: 400}}>
            <ResponsiveLine
                data={data}
                margin={{ top: 10, right: 20, bottom: 50, left: 60 }}
                xScale={{
                    type: 'time',
                    format: '%Y-%m-%d',
                    useUTC: false,
                    precision: 'day',
                }}
                xFormat="time:%Y-%m-%d"
                yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                yFormat=" >-.2%"
                axisLeft={{ format: '>-.2%' }}
                axisBottom={{ format: '%b %d' }}
                curve='monotoneX'
                enablePointLabel={false}
                pointSize={8}
                pointBorderWidth={1}
                pointBorderColor={{
                    from: 'color',
                    modifiers: [['darker', 0.3]],
                }}
                useMesh={true}
                enableSlices={false}
            />
        </div>);
}

export type GraphProps = {
    data: Array<{
        id: string,
        data: Array<{
            x: string,
            y: number
        }>
    }>
};