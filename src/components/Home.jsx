import React from 'react'
import Map from "./Map";
// TODO - add proptypes

const Home = props => {
	if (props.user) {
		return (
			<div className="Home">
				<p>Current User:</p>
				<code>
					{JSON.stringify(props)}
				</code>
				
			<Map loc={props.user.loc}/>
			</div>
		)
	} else {
		return (
			<div className="Home">
				<p>Current User:</p>
				<code>
					{JSON.stringify(props)}
				</code>
			</div>

		)
	}

}

export default Home
