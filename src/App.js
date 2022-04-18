
import React,{useState}from 'react';
import './App.css';
import Form  from'./Component/Form';
import ToDoList from './Component/ToDoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
     
     <header>
       <h1>Ed todo</h1>
     </header>
     <Form setInputText={setInputText}/>
     
     <ToDoList/>
     
    </div>
  );
}

export default App;
