import React from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to='/Add' className="sidebar-option">
                <img src={assets.plus} alt="Add" />
                <p>Add Items</p>
            </NavLink>

            <NavLink to='/foodList' className="sidebar-option">
                <img src={assets.cart} alt="FoodList" />
                <p>List Items</p>
            </NavLink>

            <NavLink to='/Orders' className="sidebar-option">
                <img src={assets.order} alt="Orders" />
                <p>Orders</p>
            </NavLink>
        </div>
      
    </div>
  )
}

export default SideBar
