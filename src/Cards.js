import React from 'react'
import {Card} from 'react-bootstrap'
import RegisterForm from './RegisterForm'

function Cards() {
  return (
    <Card>
    <Card.Header as="h5">Attendance Form</Card.Header>
     <Card.Body>
      <RegisterForm/>
     </Card.Body>
    </Card> 
  )
}

export default Cards