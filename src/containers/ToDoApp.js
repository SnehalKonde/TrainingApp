import React, { Component } from 'react';
import logo from '../logo.svg';
import './ToDoApp.css';
import InputBox from '../components/inputBox';
import Button from '../components/button';
import ListItem from '../components/listItem';

class ToDoApp extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.addItemInTodoList = this.addItemInTodoList.bind(this);
        this.removeItemFromTodoList = this.removeItemFromTodoList.bind(this);
        this.resetListIds = this.resetListIds.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.state = {
            value: '',
            todoList: [],
            inputText: '' 
        };
    }

    handleChange(value) {
        this.setState({
            value: value,
            inputText: value
        })
    }

    handleBlur(event) {
        this.setState({
            value: event.target.value
        })
    }

    resetListIds(list) {
        list.forEach((item,index)=>{
            item.id = index;
        })
        return list;
    }

    addItemInTodoList() {
        let list = this.state.todoList; 
        list.push({value:this.state.value,id:list.length,editable:false});
        this.setState({
            todoList: list,
            inputText: ''
        }) 
    }

    removeItemFromTodoList(event) {
        const id = parseInt(event.target.id, 10);
        let list = this.state.todoList;
        let newlist = list.filter((item) => {
            return item.id !== id;
        })
        newlist =  this.resetListIds(newlist);
        this.setState({
            todoList: newlist
        })
        
    }

    //TODO This function is used to generate list. Create another component for unordered list 
    generateList(list) {
        let menuItems = list.map((item) =>
            <ListItem item={item} removeItem={this.removeItemFromTodoList}/>
        );
        return (
            <ul className="todo-menu-items">
                {menuItems}
            </ul>
        );
    }

	render() {
        let todoList = this.generateList(this.state.todoList);
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">React Application</h1>
				</header>
				<div className="App-intro">
                    <InputBox 
                        id={"input-box-1"}
                        className="todo-list-input-box"
                        value={this.state.inputText} 
                        disabled={false} 
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                    />
                    <Button id={"submit-button"} className="todo-submit-button" onClick={this.addItemInTodoList} text={"ADD"}/>
                    <div>{todoList}</div>
				</div>
            </div>
		);
	}  
}

export default ToDoApp;
