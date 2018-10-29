import React from 'react'
import Map from "./Map";
import Form from "./Form";
// TODO - add proptypes

const Home = props => {
	if (props.user) {
		return (
			<div className="Home" style={{  }}>		
			<Map loc={props.user.loc}/>
			</div>
		)
	} else {
		return (
			<div className="Home">
			
			</div>

		)
	}

}

export default Home
