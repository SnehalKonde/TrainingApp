
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {

    constructor(props){
        super(props);
        this.handleInvestorClick = this.handleInvestorClick.bind(this);
    }

    handleInvestorClick(evt){
        evt.stopPropagation();
        const min = 1;
        const max = 100;
        const rand = min + Math.random() * (max - min);
        //const unlisten = this.props.history.listen((location, action)=>console.log(location));
        this.props.history.replace(`/investors/${rand}`);
        //unlisten();
    }

    render() {

		return (
			<ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contacts</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li>Investors
                    <button onClick={(evt) =>this.handleInvestorClick(evt)}>Investors1</button>
                    <button onClick={(evt) =>this.handleInvestorClick(evt)}>Investors2</button>
                </li>
                <li><Link to="/studio">Studio</Link></li>
            </ul>
		);
    }
}

export default Navigation;
