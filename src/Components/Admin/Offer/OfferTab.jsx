import react from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Blog from '../../../pages/Blog/Blog'
import OfferAdd from '../../../Components/Admin/Offer/OfferAdd'
import OfferView from '../../../Components/Admin/Offer/OfferView'



function OfferTab() {
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
          <OfferAdd />
        </Tab>
        <Tab eventKey="View" title="View">
          <OfferView />
        </Tab>
        
      </Tabs>
      </div>
    )
  }
  
  export default OfferTab