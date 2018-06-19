import React, { Component } from 'react';
import Button from '../components/button';
import InputBox from '../components/inputBox';

class ListItem extends Component {
    
    constructor(props) {
        super(props);
        this.removeItem = this.removeItem.bind(this);
        this.makeEditable =  this.makeEditable.bind(this);
        this.displayListItem = this.displayListItem.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            editable: false,
            value: props.item.value
        };
    }

    componentWillReceiveProps(props){
        this.setState({
            editable: false,
            value: props.item.value
        })
    }
    
    removeItem(event) {
        this.props.removeItem(event);
    }

    makeEditable() {
        this.setState({
            editable: true
        })
    }

    handleBlur(event) {
        const value = event.target.value;
        this.setState({
            editable: false,
            value: value
        })
    }

    handleChange(value) {
        this.setState({
            value: value
        })
    }

    displayListItem(){
        const item = this.props.item;
        const isEditable =  this.state.editable;
        if(isEditable){
            return (
                <InputBox 
                    id={"edit-box-"+item.id} 
                    value={this.state.value} 
                    disabled={false} 
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                />
            );
        } else {
            return this.state.value;
        } 
    }

    render() {

        const item = this.props.item;

		return (
			<li key={item.id}>
                {this.displayListItem()}
                <Button id={item.id} onClick={this.removeItem} text={"REMOVE"}/>
                <Button id={item.id} onClick={this.makeEditable} text={"EDIT"} />
            </li>
		);
    }  
}

export default ListItem;
