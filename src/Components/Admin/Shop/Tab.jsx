import React from 'react'
// import Sidebar from '../../../Sidebar/sidebar'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Add from '../../../Components/Admin/Shop/Add' 
import View from './View'
import Blog from '../../../pages/Blog/Blog'



function ShopTab() {
  return (
  
    <div >
      {/* <Sidebar /> */}
      < Blog/>
      <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Add" title="Add">
        <Add />
      </Tab>
      <Tab eventKey="View" title="View">
        <View />
      </Tab>
      
    </Tabs>
    </div>
  )
}

export default ShopTab