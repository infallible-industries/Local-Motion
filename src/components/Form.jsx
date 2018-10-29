import React, { Component } from 'react';
import {FormGroup,ControlLabel,HelpBlock,FormControl,Button} from "react-bootstrap"

class FormExample extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleChange = this.handleChange.bind(this);
  
      this.state = {
        value: ''
      };
    }
  
    getValidationState() {
      const length = this.state.value.length;
      if (length > 10) return 'success';
      else if (length > 5) return 'warning';
      else if (length > 0) return 'error';
      return null;
    }
  
    handleChange(e) {
        
      this.setState({ value: e.target.value});
    console.log(e.target.value);
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(e.target[0].value);
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
          >
            <ControlLabel>Working example with validation</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter text"
              onChange={this.handleChange}
            />
           
            <Button type="submit">Submit</Button>
       
          </FormGroup>
        </form>
      );
    }
  }
export default FormExample
