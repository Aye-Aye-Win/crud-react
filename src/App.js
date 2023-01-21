import {useState} from 'react';
import List from './components/List';
import Form from './components/Form/Form';
import {v4 as id} from 'uuid';

function App() {
  const [initialState,setInitialState] = useState([]);
  
  const handleClick = (text) =>{
  const data = {}
  data.text = text
  data.id = id()
  data.isDone = false
  setInitialState([...initialState,data]);
  }

  const handleCheck = (id) => {
  setInitialState(initialState.map(i => i.id === id ? {text:i.text, isDone:!i.isDone, id:i.id} : i))
  }

  const handleDelete = (id) => {
  setInitialState(initialState.filter(i => i.id !== id ))
  } 


  const handleEdit = (id) => {
  const value = prompt("Edit");
  if (value !== ""){
    setInitialState(initialState.map(i => i.id === id ? {text:value, isDone:false, id:i.id} : i))
  }
  }
  
  return (
    <div>
      <Form onSubmit={handleClick}/>
      {initialState.map((i) => <List key={i.id} data={i.text} id={i.id} isDone={i.isDone} onChecked={handleCheck} onDelete={handleDelete} onEdit={handleEdit}/>)}
    </div>
  );
}

export default App;
