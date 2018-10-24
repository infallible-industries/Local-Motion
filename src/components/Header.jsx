import React from 'react'
// TODO - add proptypes

const Header = props => {
	let Greeting
	let sign
	if (props.user === null) {
		Greeting = <p>Hello guest</p>
	} else if (props.user.firstName) {
		Greeting = (
			<p>
				Welcome back, <strong>{props.user.firstName}</strong>
			</p>
		)
	} else if (props.user.local.username) {
		Greeting = (
			<p>
				Welcome back, <strong>{props.user.local.username} </strong>
			</p>
		)
	}
	if (props.user === null) {
		sign = (
			<ul class="clearfix">
				<li><a href="#">Login</a></li>
				<li><a href="#">Register</a></li>
			</ul>
		)
	} else if (props.user.username) {
		sign = (
			<ul class="clearfix">
				<li><a href="#">Logout</a></li>
			</ul>
		)
	}
	return (
		<div className="Header">
			{Greeting}
			<div class="auto-container">
				<div class="clearfix">
					<div class="top-left">
						<ul class="clearfix">
							<li><a href="mailto:infallibleindustries@gmail.com">infallibleindustries@gmail.com</a></li>
						</ul>
					</div>
					<div class="top-right">
						{sign}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
