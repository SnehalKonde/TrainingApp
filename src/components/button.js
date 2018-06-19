import React, { Component } from 'react';

class Button extends Component {
    
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event) {
        this.props.onClick(event);
    }

    render() {

        const id = this.props.id;
        const text = this.props.text;
        const value = this.props.value || '';
        const className = this.props.className || '';

		return (
			<button 
                id={id}
                type="button"
                className={className}
                value={value}
                onClick={this.handleClick}
            >
                {text}
            </button>
		);
    }  
}

export default Button;
