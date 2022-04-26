
import React,{useState, useEffect}from 'react';
import './App.css';
import Form  from'./Component/Form';
import ToDoList from './Component/ToDoList';
import Todo from './Component/Todo';
function App() {
 

  // state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status,setStatuse] = useState('all');
  const [filteredTodos,setFilteredTodos] = useState([]);


  // run once ehen the app start
  useEffect(()=> {
   getLocalTodos();
  }, [])


   // useEffect
   useEffect(() => {
      // function
  const filterHendler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
      default:
        setFilteredTodos(todos);
        break;

    }
  }
    filterHendler();
    saveLocalTodos();
      },[todos, status]);

//  seve to local
const saveLocalTodos = () => {
    localStorage.setItem('todos',JSON.stringify(todos))
  

};
const getLocalTodos =()=> {
  if(localStorage.getItem('todos') ===null){
    localStorage.setItem('todos', JSON.stringify([]));
  }else{
    let todoLocal = JSON.parse(localStorage.getItem('todos'))
    setTodos(todoLocal )
  }
  
};
 
  return (
    <div className="App">
     
     <header>
       <h1>You can do more</h1>

     </header>
     <Form 
          inputText={inputText}
          todos={todos} 
          setInputText={setInputText}
          setTodos={setTodos}
          setStatuse={setStatuse}
          
     />
    
     
     
     <ToDoList  
      filteredTodos={filteredTodos}
      setTodos={setTodos} 
      todos={todos}/>
     
    </div>
  );
}

export default App;

