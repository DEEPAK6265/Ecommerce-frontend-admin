import React from 'react'
import './Sidebar.css'
<script src="https://kit.fontawesome.com/a076d05399.js"></script>

function sidebar() {
  return (
   <div class="sidebar">
    <header>Micro-com</header>
    <ul>
    <li><a href="/shops"><i class="fas fa-qrcode"></i></a></li>
    <li><a href="#"><i class="fas fa-Shop"></i></a></li>
    <li><a href="#"><i class="fas fa-product"></i></a></li>
    <li><a href="#"><i class="fas fa-Offer"></i></a></li>
    </ul>

   </div>
  )
}

export default sidebar