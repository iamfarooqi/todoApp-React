import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Todo() {
  // console.log(addTask);
  const [value, setValue] = useState("jimjimjmju");
  const [tasks, seTasks] = useState([
    {
      title: "Grab some Pizza",
      completed: true
    },
    {
      title: "Do your workout",
      completed: true
    },
    {
      title: "Hangout with friends",
      completed: false
    }
  ]);
  // setTasks(newTasks);

  const handleSubmit = e => {
    e.preventDefault();
    // if (!value) return;
    // addTask(value);
    const newTasks = [...tasks, {title: value, completed: false }];
    seTasks(newTasks);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Add a new task"
          onChange={e => setValue(e.target.value)}
        />
        <button>Sumit</button>
      </form>
      {
        tasks.map((e, i) => {
          return (
            <div>{e.title}</div>
          )
        })
      }
    </>
  )
}

ReactDOM.render(<Todo />, document.querySelector('#root'))