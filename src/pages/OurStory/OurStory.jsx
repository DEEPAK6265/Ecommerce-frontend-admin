import React from 'react'
import {Link} from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import './OurStory.css'



function OurStory() {
  return (
    <div class="body">
    <Nav>
        <div class="head">
            <li>
                <Link to="shop">Shop</Link>
            </li>
            <li>
                <Link to="ourstory">OurStory</Link>
            </li>
            <li>
                <Link to="blog">Blog</Link>
            </li>
            
        </div>
        <div class="main"><Link to="/"><b>Micro-Com</b></Link>

            <h4 class ="head3"><Link to ="login">Login</Link></h4>
            </div>
        </Nav>
        <div class="content"><h2><b>Our Story</b></h2> <br/><br/>
     <h4> Hello user my name is Deepak Sharma and i am from MicroTechnologies India.I have developed this e-commerce website for you.<br/>  techniques from around the world to create the most interesting flavors and textures.

Hester makes everything in small batches from our home base in New York. To achieve optimal flavor,<br/>ur products age from three weeks to four months, making every pickle worth your patience.</h4></div>
      <div class="content1">
        
        
      </div>
    </div>
   
   
  )
}

export default OurStory
