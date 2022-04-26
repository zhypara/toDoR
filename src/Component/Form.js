import React from "react";

const Form = ({setInputText, todos, setTodos, inputText, setStatuse}) => {
     
    const inputTextHenlder = (e)=> {
        
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) =>{
    e.preventDefault();
    
    if(inputText.trim()===''){
      return
    }
    setTodos([
      ...todos, {text: inputText, completed: false, id : Math.random() *1000}
    ]);
    setInputText('');
    
    };
    const statusHendler = (e) => {
      setStatuse(e.target.value);
    }

     return(
        
    <form>
      <input value ={inputText} 
      onChange={inputTextHenlder} 
      type="text" className="todo-input" />
      <button onClick={submitTodoHandler}
      className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHendler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
        
     
     )
}
export default Form;