import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './ShopAdd.css'


function Add() {
  return (
    <div class="formbody">
      <Form><b>
    <Form.Group className="mb-3" >
      <Form.Label>Registration Number</Form.Label>
      <Form.Control type="text" placeholder="Enter Reg.Number" />
      <Form.Label>Shop Id</Form.Label>
      <Form.Control type="Text" placeholder="Enter shop id" />
      <Form.Label>Shop Name</Form.Label>
      <Form.Control type="text" placeholder="Enter shop name" />
      <Form.Label>Address</Form.Label>
      <Form.Control type="text" placeholder="Enter address" />
      <Form.Label>City</Form.Label>
      <Form.Control type="text" placeholder="Enter city" />
      <Form.Label>State</Form.Label>
      <Form.Control type="text" placeholder="Enter state" />
      <Form.Label>Pin</Form.Label>
      <Form.Control type="number" placeholder="Enter pin" />
      <Form.Label>Contact</Form.Label>
      <Form.Control type="number" placeholder="Enter contact" />
      <Form.Label>Owner</Form.Label>
      <Form.Control type="text" placeholder="Enter owner name" />
      <Form.Label>Type</Form.Label>
      <Form.Control type="text" placeholder="Enter type" />
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Label>Url</Form.Label>
      <Form.Control type="text" placeholder="Enter url" />
      <Form.Label>GST</Form.Label>
      <Form.Control type="text" placeholder="Enter Gst" />
      <Form.Label>Turnover</Form.Label>
      <Form.Control type="number" placeholder="Enter turnover" />
      <Form.Label>Description</Form.Label>
      <Form.Control type="text" placeholder="Enter desc" />
      <Form.Label>Term Condition</Form.Label>
      <Form.Control type="text" placeholder="Enter Term condition" />
      <Form.Label>Status</Form.Label>
      <Form.Control type="text" placeholder="Enter status" />
      <Form.Label>password</Form.Label>
      <Form.Control type="text" placeholder="Enter password" />
      
      <Form.Text className="text-muted">
        {/* We'll never share your email with anyone else. */}
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
    </b> </Form></div>
  )
}

export default Add