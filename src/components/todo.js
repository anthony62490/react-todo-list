import React, {Component} from 'react';

class Todo extends Component
{
    constructor()
    {
        super();
        this.state = 
        {
            input: '',
            todos: []
        };

        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.removeHandler = this.removeHandler.bind(this);
    }

    changeHandler(e)
    {
        this.setState({input: e.target.value});
    }

    submitHandler()
    {
        this.setState(
        {
            todos: [...this.state.todos, this.state.input],
            input: ''
        });
    }

    removeHandler(i)
    {
        let newArr = this.state.todos.slice();
        newArr.splice(i, 1);
        this.setState({ todos: newArr });
    }

    render()
    {
        let todoList = this.state.todos.map((todo, i)=> {
            return(
                <div>
                    <p key={i} onClick={(i)=> this.removeHandler(i)}>{todo}</p>
                </div>
            );
        }); //map

        return (
            <div>
                <h1>"To-Do"</h1>
                <input 
                    type="text" 
                    value={this.state.input} 
                    onChange={(e)=> this.changeHandler(e)}
                />
                <button onClick={this.submitHandler}>Add task</button>
                <div>{todoList}</div>
            </div>
        ); //return
    }
}

export default Todo;