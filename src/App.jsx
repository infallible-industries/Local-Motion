


import React, { Component } from 'react'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import './App.css'
import LoginForm from './components/Login/LoginForm'
import SignupForm from './components/SignupForm'
import Header from './components/Header'
import Home from './components/Home' 
import Task from './components/Task' 
import TaskForm from './components/TaskForm' 
import Footer from './components/footer'
import Thing from './components/Thing';
import Jobs from './components/Jobs' 



const DisplayLinks = props => {
	if (props.loggedIn) {
		return (
			<nav className="navbar">
				<ul className="nav">
					<li className="nav-item">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/TaskForm" className="nav-link">
							Post a Task
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/Jobs" className="nav-link">
							Do a Task
						</Link>
					</li>
					<li>
						<Link to="#" className="nav-link" onClick={props._logout}>
							Logout
						</Link>
					</li>
				</ul>
			</nav>
		)
	} else {
		return (
			<nav className="navbar">
				<ul className="nav">
					<li className="nav-item">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/login" className="nav-link">
							login
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/signup" className="nav-link">
							sign up
						</Link>
					</li>
				</ul>
			</nav>




		)
	}
}

class App extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn: false,
			user: null,
			task: null
		}
		this._logout = this._logout.bind(this)
		this._login = this._login.bind(this)
	}
	componentDidMount() {
		axios.get('/auth/user').then(response => {
			console.log(response.data)
			if (!!response.data.user) {
				console.log('THERE IS A USER')
				this.setState({
					loggedIn: true,
					user: response.data.user
				})
			} else {
				console.log(response.data)
				this.setState({
					loggedIn: false,
					user: null 
				})
			}
		})
	}

	_logout(event) {
		event.preventDefault()
		console.log('logging out')
		axios.post('/auth/logout').then(response => {
			console.log(response.data)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_login(username, password) {
		console.log(username);
		console.log(password);
		
		axios
			.post('/auth/login', {
				username,
				password
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
	}
	setTask(task){
		this.task = task
	}

	render() {
		return (
			<div className="App">
				<h1 id="title">Local Motion</h1>
				<div></div>
				<Header user={this.state.user} />
				{/* LINKS to our different 'pages' */}
				<DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} />
				{/*  ROUTES */}
				{/* <Route exact path="/" component={Home} /> */}
				<Route exact path="/" render={() => <Home user={this.state.user} />} />
				<Route exact path="/login"
					render={() =>
						<LoginForm
							_login={this._login}
							_googleSignin={this._googleSignin}
						/>}
				/>
				<Route exact path="/Task" render={() => <Task setTask={this.setTask.bind(this)} />}/>
				<Route exact path="/TaskForm" component={TaskForm} />

				<Route exact path="/Jobs" component={Jobs} />
				<Route exact path="/Thing" render={() =>
						<Thing
							task={this.task}							
						/>} />
				<Route exact path="/signup" component={SignupForm} />
				{/* <LoginForm _login={this._login} /> */}
				<Footer/>
			</div>
		)
	}
}

export default App
