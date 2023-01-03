import './App.css';
import Header from './Components/Header';
import { Todos } from './Components/Todos';
import AddTodos from './Components/AddTodos';
import About from './Components/About';
import CustomRequest from './Components/CustomRequest';
import MailUs from './Components/MailUs';
import CallUs from './Components/CallUs';
import Footer from './Components/Footer';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }
  // let todos = [
  //   {
  //     sno: 1,
  //     title: "Go to the market",
  //     desc: "Go to the market and get fresh vegetables."
  //   }
  // ]  // javaScript Way of writing an array and can be modified and updated.

  // const [todos, setTodos] = useState([
  //   {
  //     sno: 1,
  //     title: "Go to the market",
  //     desc: "Go to the market and get fresh vegetables."
  //   }
  // ]) // React way of writing an array to update and modify.

  const [todos, setTodos] = useState(initTodo)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const onDelete = (todo) => {
    console.log("onDelete");
    // javaScript way of deleting in an array.
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    // react way of deleting/updating an array.
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("A ToDo has been added to list:- ", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    console.log(myTodo);
    setTodos([...todos, myTodo]);
  }
  return (
    <>
      <Router>
        <Header title="ToDo's List" home="Home" about="About Todo's" contact="Contact Us" contact1="Mail Us" contact2="Call Us" contact3="Custom Requests" searchbar={true} />
        <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <AddTodos compntheading="Add Todo's To List" input1="Todo Title" input2="Todo Description" btn="Add ToDo To List" addTodo={addTodo} />
            <Todos compntheading="Todo's List" todos={todos} onDelete={onDelete} />
            </>)
          }} >
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/mailus">
            <MailUs />
          </Route>
          <Route exact path="/callus">
            <CallUs />
          </Route>
          <Route exact path="/customrequest">
            <CustomRequest />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

