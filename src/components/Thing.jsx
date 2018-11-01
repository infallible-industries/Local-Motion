import React, { Component } from 'react'
import Map from "./Map";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import './Thing.css'

export class Thing extends Component {
  render() {
    return (
      <div>
          <h1>Your Task is ready to Do!</h1>
          <h3>Pick up gallon Non-Fat Milk : $10.00 </h3>
          <Button className="route" href="/Jobs">Add Job +</Button>
        <Map/>
        <br></br>
        
      </div>
    )
  }
}

export default Thing
