import React, { useState } from 'react'
import RoutersNav from '../../routesNav/RoutersNav'
import Sidebar from '../sidebar/Sidebar'
import TopNav from '../topNav/TopNav'

const Layout = () => {

const [open, setOpen] = useState(false);

const handle = ()=>{
    setOpen(!open)
}

    return (
        <>
            {/* <div className='layout'> */}
                {/* <Sidebar open={open} setOpen={setOpen} handle={handle} /> */}
                {/* <div className='main__layout'> */}
                    {/* <TopNav open={open} setOpen={setOpen} handle={handle} /> */}
                    <div className='content'>
                        <RoutersNav />
                    </div>
                {/* </div> */}
            {/* </div> */}
        </>
    )
}

export default Layout