import React, {useState} from 'react';

function App() {

  const [todo, setTodo] = useState("");
  const [arrTodo, setArrTodo] = useState([]);

  const onChange = (e) => {
    setTodo(e.target.value);
    // console.log(todo);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(todo === "") {
      return;
    }
    setArrTodo((currentArray) => {
      const newArray = [todo, ...currentArray];
      console.log(newArray);
      return newArray;
    });
    setTodo("");
  }

  return (
    <div className="App">
    <h1>My To Dos ({arrTodo.length})</h1>
    <form onSubmit={onSubmit}>
      <input 
        type="text" 
        placeholder='Write to do...' 
        value={todo}
        onChange={onChange}
        />
      <button type="submit">
        Add To Do
      </button>
      <hr />
      <ul>
        {arrTodo.map((item, index) => (
          <li key={index}>{item}</li>
          )
        )}
      </ul>
    </form>
    </div>
  );
}

export default App;