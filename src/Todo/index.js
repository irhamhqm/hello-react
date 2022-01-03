import { useState, useEffect } from 'react';

function Todo() {
  const [taskList, setTaskList] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  useEffect(() => {
    console.log('useEffect tanpa parameter kedua');
  });

  useEffect(() => {
    loadTask();
    console.log('useEffect dengan parameter kedua berupa array kosong');
  }, []);

  useEffect(() => {
    console.log('useEffect dengan taskList sebagai dependency');
  }, [taskList]);

  useEffect(() => {
    return function cleanup() {
      console.log('function ini dipanggil ketika component akan unmount');
    }
  }, []);

  const loadTask = () => {
    setTaskList(['bangun tidur', 'mandi']);
  }

  const submitTodo = (evt) => {
    evt.preventDefault();
    setTaskList([...taskList, taskInput]);
    setTaskInput('');
  }

  const handleDelete = (task) => {
    setTaskList(taskList.filter((val) => val !== task));
  }

  return (
    <>
      <h2>Todo List</h2>
      <ol>
          {taskList.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => handleDelete(task)}>delete</button>
            </li>
          ))}
        </ol>
      <form onSubmit={submitTodo}>
        <input
          value={taskInput}
          onChange={(evt) => setTaskInput(evt.target.value)}
        />
        <button type="submit" value="Submit">add todo</button>
      </form>
    </>
  )
}

export default Todo;