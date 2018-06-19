import React, { Component } from 'react';

class InputBox extends Component {
    
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    
    handleChange(event) {
        this.props.onChange(event.target.value);
    }

    handleBlur(event) {
        this.props.onBlur(event);
    }

    render() {

        const value = this.props.value;
        const disabled =  this.props.disabled;
        const id = this.props.id;
        const placeholder =  this.props.placeholder;
        const className = this.props.className || '';

		return (
			<input 
                id={id}
                type="Text"
                className={className}
                onChange={this.handleChange}
                value={value}
                disabled={disabled}
                onBlur={this.handleBlur}
                placeholder={placeholder}
            />
		);
    }  
}

export default InputBox;
