import React from 'react'
import { Link } from 'react-router-dom'
import imageProfile from "../../assets/images/profile-02.png"
import "./TopNav.css"
import { HiOutlineBars3 } from 'react-icons/hi2';
import { HiBars3BottomRight } from 'react-icons/hi2';

const TopNav = ({open, setOpen, handle}) => {
  return (
    <>
        <div className="top__nav">
            <div className='top__nav-wrapper'>
                <div className='search__box'>
                    <input type="text" placeholder='search or type' />
                    <span> <i className="ri-search-line"></i> </span>
                </div>
                <div className='top__nav-right'>  
                    <span className='notification'> 
                        <i className="ri-notification-3-line"></i> 
                        <span className='badge'>1</span>
                    </span>
                    { open ? <HiBars3BottomRight onClick={handle} className="bars"/> : <HiOutlineBars3 onClick={handle} className="bars"/> }
                    <div className='profile'>
                        <Link to="/settings"> <img src={imageProfile} alt='image' /> </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TopNav