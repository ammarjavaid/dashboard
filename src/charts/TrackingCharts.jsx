import React from 'react'
import { ResponsiveContainer, LineChart, XAxis, Tooltip, Line, CartesianGrid } from 'recharts'
import trackingData from '../assets/dummy-data/TrackingData'

const TrackingCharts = () => {
  return (
    <>
        <ResponsiveContainer width="99%" aspect={3/2}>
            <LineChart>
                <CartesianGrid strokeDasharray='0' stroke='#b7ffe913' />
                <XAxis dataKey="name" stroke='#ddd' />
                <Line type="monotone" dataKey="km" data={trackingData} stroke="#e1424e" strokeWidth={2} activeDot={{r: 8}} />
                <Tooltip wrapperClassName='tooltip__style' />
            </LineChart>
        </ResponsiveContainer>
    </>
  )
}

export default TrackingCharts