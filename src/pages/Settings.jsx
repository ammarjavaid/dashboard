import React, { useState } from 'react'
import "../styles/Settings.css"
import Sidebar from '../components/sidebar/Sidebar';
import TopNav from '../components/topNav/TopNav';

const Settings = () => {

  const [open, setOpen] = useState(false);

  const handle = () => {
    setOpen(!open)
  }

  return (
    <>
      <Sidebar open={open} setOpen={setOpen} handle={handle} />
      <TopNav open={open} setOpen={setOpen} handle={handle} />
      <div className='settings'>
        <div className='settings__wrapper'>
          <h2 className='settings__title'> Settings </h2>

          <div className='settings__top'>
            <button className='setting__btn'>My Details</button>
            <button className='setting__btn active__btn'>Profile</button>
            <button className='setting__btn'>Password</button>
            <button className='setting__btn'>Email</button>
            <button className='setting__btn'>Notification</button>
          </div>

          <div className='details__form'>
            <h2 className='profile__title'> Profile </h2>
            <p className='profile__decs'> Update your photo and personal details here </p>
            <form>
              <div className='form__group'>
                <div>
                  <label>Live in</label>
                  <input type="text" placeholder='Sargodha, Pakistan' />
                </div>
                <div>
                  <label>Street</label>
                  <input type="text" placeholder='Near Chndni Chowk' />
                </div>
              </div>

              <div className='form__group'>
                <div>
                  <label>Email</label>
                  <input type="email" placeholder='example@gmail.com' />
                </div>
                <div>
                  <label>Phone Number</label>
                  <input type="phone" placeholder='+92 302 0******' />
                </div>
              </div>

              <div className='form__group'>
                <div>
                  <label>Date of Birth</label>
                  <input type="date" placeholder='dd/mm/yyyy' />
                </div>
                <div>
                  <label>Gender</label>
                  <input type="text" placeholder='Male' />
                </div>
              </div>

              <div className='form__group'>
                <div>
                  <label>Your Photo</label>
                  <p className='profile__img-decs'> This will be displayed in your profile </p>
                  <input type="file" placeholder='choose file' />
                </div>

                <div className='profile__img-btns'>
                  <button className='dlt__btn'> Delete </button>
                  <button className='update__btn'> Update </button>
                </div>

              </div>

            </form>
          </div>

        </div>
      </div>
    </>
  )
}

export default Settings