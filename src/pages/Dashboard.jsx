import React, { useState } from 'react'
import CarStaticsChart from '../charts/CarStaticsChart'
import MileChart from '../charts/MileChart'
import SingleCard from '../reuse/SingleCard'
import "../styles/Dashboard.css"
import recommendCars from '../assets/dummy-data/RecommendCars'
import Sidebar from '../components/sidebar/Sidebar'
import TopNav from '../components/topNav/TopNav'

const Dashboard = () => {

    const [open, setOpen] = useState(false);

    const handle = () => {
        setOpen(!open)
    }

    return (
        <>
            <Sidebar open={open} setOpen={setOpen} handle={handle} />
            <TopNav open={open} setOpen={setOpen} handle={handle} />
            <div className='dashboard'>
                <div className='dashboard__wrapper'>
                    <div className="dashboard__cards">
                        <SingleCard title="Total Cars" totalNumber="750+" icon="ri-police-car-line" />
                        <SingleCard title="Daily Trips" totalNumber="1697" icon="ri-steering-2-line" />
                        <SingleCard title="Clients Annually" totalNumber="85k" icon="ri-user-line" />
                        <SingleCard title="Kilometers Daily" totalNumber="2167" icon="ri-timer-flash-line" />
                    </div>

                    <div className='statics'>
                        <div className='stats'>
                            <h3 className='stats__title'> Miles Statics </h3>
                            <MileChart />
                        </div>

                        <div className='stats'>
                            <h3 className='stats__title'> Cars Statics </h3>
                            <CarStaticsChart />
                        </div>
                    </div>

                    <div className='recommend__cars-wrapper'>
                        {
                            recommendCars.map((item) => {
                                return (
                                    <>
                                        <div className='recommend__car-card' key={item.id}>
                                            <div className='recommend__car-top'>
                                                <h5> <span><i className="ri-refresh-line"></i> </span> {item.percentage}% Recommended </h5>
                                            </div>

                                            <div className='recommend__car-img'>
                                                <img src={item.imgUrl} alt='image' />
                                            </div>
                                            <div className='recommend__car-bottom'>
                                                <h4> {item.carName} </h4>
                                                <div className='recommend__car-other'>
                                                    <div className="recommend__icons">
                                                        <p> <i className='ri-repeat-line'></i> {item.retweet} </p>
                                                        <p> <i className="ri-settings-2-line"></i> </p>
                                                        <p> <i className='ri-timer-flash-line'></i> </p>
                                                    </div>
                                                    <span> ${item.rentPrice}/h </span>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard