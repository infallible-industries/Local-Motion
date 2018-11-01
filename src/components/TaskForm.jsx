import React, { Component } from 'react'
import { Col, Button, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'
export class TaskForm extends Component {
    addTask(e){
        e.preventDefault()
        e.target
        let add = e.target[1].value.replace(" ", "+")
        let info = e.target[0].value
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${add},+${e.target[2].value},+${e.target[3].value}&key=AIzaSyA3phKj3-oW-e07CePiHCNE51SA5swXugk`).then(response => {



            var loc = (response.data.results["0"].geometry.location);
            

            axios
            .post('/api/task', {
                username:"ryan",
                password:"1234",
                loc:loc,
                info:info
            })
            .then(response => {
                console.log(response+"\n log")
                if (response.status === 200) {
                    // update the state
                    this.setState({
                        loggedIn: true,
                        user: response.data.user
                    })
                }
            })
        })

    }

    render() {
        return (
            <div>
                <h1>Add a task</h1>
                <Form onSubmit={this.addTask}>
                    <Row form>

                        <FormGroup>
                            <Label for="info">Task Info</Label>
                            <Input type="textarea" name="info" id="exampleEmail" placeholder="Write task info here" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleAddress">Address</Label>
                            <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleCity">City</Label>
                            <Input type="text" name="city" id="exampleCity" placeholder="City"/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleState">State</Label>
                            <Input type="text" name="state" id="exampleState" placeholder="State"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleState">Price</Label>
                            <Input type="text" name="state" id="exampleState" placeholder="Price"/>
                        </FormGroup>

                        

                    </Row>

                    <Button href="/Thing">Add Task</Button>
                </Form>
            </div>
        )
    }
}

export default TaskForm
