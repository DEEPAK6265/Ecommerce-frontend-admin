import React from 'react'
import {Form} from 'react-bootstrap'
import {Link} from 'react-router-dom';

import './Blog.css'
{/* <script src="https://kit.fontawesome.com/a076d05399.js"></script> */}

function sidebar() {
  return (<>
  <nav>
   <lable class="logo">Micro-com</lable>
    <ul>
      <li><a href="#">Welcome user</a></li>
      <li><a href="#"><Link to ="Loginer">Login</Link></a></li>
      <li><a href="#">Signup</a></li>

    </ul>
    </nav>
  <div className="hamburger-menu">

    <input id ="menu__toggle" type="checkbox"/>
    <label className="menu__btn" for="menu__toggle">
      <span></span>
    </label>
    <ul div class="menu__box">
      <li><a className="menu__item" href="#"><Link to ="/shops">Shops</Link></a></li>
    
      <Form.Select aria-label="Default select example">
      <option>Product</option>
      <option value="1">Category</option>
      <option value="2">Subcategory</option>
    </Form.Select>
      <li><a className="menu__item" href="#"><Link to ="/offer">Offer</Link></a></li>
      <li><a className="menu__item" href="#">User Management</a></li>
      <li><a className="menu__item" href="#">Logout</a></li>
    </ul>
    
  
    
    </div></>
  )}
  export default sidebar


    