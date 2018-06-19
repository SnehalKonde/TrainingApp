
import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import ToDoApp from './ToDoApp';
import logo from '../logo.svg';

class Home  extends Component {

    render() {
        console.log(this.props.history);
		return (
			<div>
                <header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">React Application</h1>
				</header>
                <Navigation history={this.props.history}/>
            </div>
		);
    }
}

export default Home;
