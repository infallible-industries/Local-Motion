import React, { Component } from 'react'
import "./Jobs.css";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
 class Jobs extends Component {

  state = {
    tasks : []
  }

  click(e){
    //this on you clecked on 
    this.props.setTask() 
  }
  render() {
    var newArray = this.state.tasks.map((x)=>{
    return (<h1>{x}</h1>

    )
    })
    return (
      <div>
       <h1>Listed Jobs!</h1>
        <div>
            <Card>
      <CardBody>
          <CardTitle>Job Card!</CardTitle>
          <CardSubtitle>Location / Pay Rate</CardSubtitle>
          <CardText>This is where we show the job description</CardText>
          <Button href="/TaskForm">Add Job +</Button><Button href="/Jobs">Do Job -</Button>
        </CardBody>
      </Card> 
      <Card>
        {/* <CardImg top width="25%"width="25%"  className="card-im" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=150&h=150" alt="Card image cap" /> */}
        <CardBody>
          <CardTitle>Pick up gallon Non-Fat Milk</CardTitle>
          <CardText>Trader Joe's </CardText>
          <CardText>1885 University Ave </CardText>
          <CardText>Berkeley</CardText>
          <CardText>$10.00</CardText>
          <Button className="btn" href="mailto:infallibleindustries@gmail.com">Do Job!</Button>
          <Button className="btn" href="/Thing">See Location!</Button>
        </CardBody>
      </Card>
       


        </div>
      </div>
    )
  }
}

export default Jobs
