import './Header.css';
import React from 'react';
import {Link} from 'react-router-dom';
import {Nav} from 'react-bootstrap';
function Header() {
  return (
    <div>
        <Nav>
            <div class="head">
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <Link to="/ourstory">OurStory</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                
            </div>
            <div class="main"><Link to="/"><b>Micro-Com</b></Link>

            <h4 class ="head3"><Link to ="/login">Login</Link></h4>
            </div>
        </Nav>
    </div>
    
  )
}

export default Header