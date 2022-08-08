import React from 'react'
import './Content.css'
import {Button} from 'react-bootstrap'

function Content() {
  return (
    <div>
           <div className="App">
            <h2 className="App1">
           WELCOME TO MY SHOPPING CITY</h2>
           
           <Button variant="primary" size="lg">
          Shop Now
        </Button>{' '}
           </div>
           <div class="page2">
           Only the Highest Quality Ingredients
           </div>
    </div>
  )
}

export default Content