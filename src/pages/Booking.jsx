import React, { useState } from 'react'
import bookingCars from '../assets/dummy-data/Booking-cars'
import "../styles/Booking.css"
import Sidebar from '../components/sidebar/Sidebar'
import TopNav from '../components/topNav/TopNav'

const Booking = () => {

  const [open, setOpen] = useState(false);

  const handle = () => {
    setOpen(!open)
  }

  return (
    <>
      <Sidebar open={open} setOpen={setOpen} handle={handle} />
      <TopNav open={open} setOpen={setOpen} handle={handle} />
      <div className='bookings'>
        <div className='bookings__wrapper'>
          <h2 className='booking__title'> Booking </h2>

          <div className='filter__widget-wrapper'>
            <div className='filter__widget-01'>
              <select>
                <option value="New">New</option>
                <option value="Popular">Popular</option>
                <option value="Upcoming">Upcoming</option>
              </select>
            </div>
            <div className='filter__widget-01'>
              <select>
                <option value="toyota">Toyota</option>
                <option value="bmw">BMW</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>

          <div className='booking__car-list'>
            {
              bookingCars.map((item) => {
                return (
                  <>
                    <div className='car__item' key={item.id}>
                      <div className='car__item-top'>
                        <div className='car__item-tile'>
                          <h3> {item.carName} </h3>
                          <span> <i className='ri-heart-line'></i> </span>
                        </div>
                        <p> {item.category} </p>
                      </div>
                      <div className='car__img'>
                        <img src={item.imgUrl} alt='image' />
                      </div>
                      <div className='car__item-bottom'>
                        <div className='car__bottom-left'>
                          <p> <i className='ri-user-line'></i> {item.groupSize} </p>
                          <p> <i className='ri-repeat-line'></i> {item.type} </p>
                        </div>
                        <p className='car__rent'> ${item.rentPrice}/d </p>
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

export default Booking