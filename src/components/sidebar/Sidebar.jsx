import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import NavLinks from '../../assets/dummy-data/NavLinks'
import "./Sidebar.css"
import { getAuth, signOut } from "firebase/auth";

const Sidebar = ({open, setOpen, handle}) => {

    const navigate = useNavigate();
    const logout = () => {
        const auth = getAuth();
        signOut(auth).then((res) => {
            navigate("/");
        }).catch((error) => {
            console.log(error);
        });
    }

  return (
    <>
        <div className={`sidebar ${open ? "sidebarOpen" : ""}`}>
            <div className='sidebar__top'>
                <h2> <span> <i className='ri-taxi-line'></i> </span> UberX </h2>
            </div>

            <div className='sidebar__content'>
                <div className='menu'>
                    <ul className='nav__list'>
                        {
                            NavLinks.map((item, index)=>(
                                <li className='nav__item' key={index}>
                                    <NavLink to={item.path} className={(navLink) => navLink.isActive ? "nav__active nav__link" : "nav__link"} onClick={handle}>
                                     <i className={item.icon}></i>
                                        <p> {item.display} </p>
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className='sidebar__bottom' onClick={logout}>
                    <span> <i className="ri-logout-circle-r-line"></i> Logout </span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar