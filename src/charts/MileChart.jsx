import React from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from 'recharts'
import mileStaticsData from '../assets/dummy-data/MileStatics'

const MileChart = () => {
    return (
        <>
           
            
            <ResponsiveContainer width="99%" aspect={3/2}>
                <BarChart data={mileStaticsData}>
                    <XAxis dataKey="name" stroke='#2884ff' />
                    <Bar dataKey="mileStats" stroke='#2884ff' fill='#2884ff' barSize={30} />
                    <Tooltip wrapperClassName='tooltip__style' cursor={false} />
                </BarChart>
            </ResponsiveContainer>
            
           
        </>
    )
}

export default MileChart