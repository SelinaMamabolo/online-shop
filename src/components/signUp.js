import React, { useEffect, useState } from 'react';


function Signup() {
    const [todo, setTodo] = React.useState({
      taskName: "",
      description: "",
      quantity:"",
      dueDate: ""
    })
    const [todoList, setList] = React.useState([])
  
    function onSubmitHandler(e) {
      e.preventDefault()
      const addTodo = {
        id: new Date().getTime(),
        todoName: todo.taskName,
        description:todo.description,
        quantity: todo.quantity,
        dueDate: todo.dueDate,
        complete: false
      }
  
      setList([...todoList].concat(addTodo))
      setTodo("")
      console.log(todoList);
    }
  
    function deleteTodo(id) {
      let updatedList = [...todoList].filter((todo) => todo.id !== id)
      setList(updatedList)
    }
  
    function completeTodo(id) {
      let updatedList = [...todoList].map((todo) => {
        if (todo.id === id) {
          todo.complete = !todo.complete
        }
        return todo
      })
      setList(updatedList)
      console.log(todoList);
  
    }
    
    return (
      <div className="todo">
        <h1> SignUp </h1>
        <form onSubmit={onSubmitHandler}>
  
          <input
            type="text"
            name="taskName" 
            placeholder="Username"
            value={todo.taskName}
            onChange={(e) => setTodo({ ...todo, taskName: e.target.value })}
          />
          <input
            type="textbox"
            value={todo.description}
            name="description"  
            placeholder="E-mail"
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          />
  
          <input
            type="textbox"
            value={todo.quantity}
            name="quantity"  
            placeholder="Password"
            onChange={(e) => setTodo({ ...todo, quantity: e.target.value })}
          />
          <input
            type="date"
            value={todo.dueDate}
            name="dueDate"
            placeholder="Date of Birth"
            onChange={(e) => setTodo({...todo, dueDate:e.target.value})}
          />
          <button> Add Account </button>
        </form>
        {todoList.map((data) => (
          <div key={data.id} className="list-style">
  
            <div className="button-style">
              <div className="todo-style">
                {data.todoName}
                {data.description}
                {data.quantity}
                {data.dueDate} 
                
                
              </div>
  
              <button onClick={() => deleteTodo(data.id)}> Delete</button>
              {data.complete === true
                ? <button className="complete" onClick={() => completeTodo(data.id)} > Completed </button>
                : <button onClick={() => completeTodo(data.id)} >Complete</button>
              }
  
  
            </div>
  
          </div>
        ))}
  
      </div>
    );
  };


export default Signup;