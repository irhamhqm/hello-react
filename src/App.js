
import { Routes, Route, Link } from 'react-router-dom';

import HelloWorld from './HelloWorld/HelloWorld';
import Todo from './Todo';
import Counter from './Counter';
import ErrorPage from './ErrorPage';

import styles from './App.module.css';

import UserContext from './UserContext';
import UserForm from './UserForm';

const user = {
  name: 'Irham',
  changeUsername(name) {
    user.name = name;
  }
}

function App() {
  return (
    <>
      <UserContext.Provider value={user}>
        <div className="App">
          <h1 className={styles.title}>Irham Nur Hakim</h1>
        </div>
        <h2>Front-end engineer</h2>
        <nav style={{ display: 'flex', gap: '.75rem' }}>
          <Link to="/">Home</Link>
          <Link to="/todo">Todo</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/form">User Form</Link>
        </nav>
        <Routes>
          <Route path="/todo" element={<Todo />} />
          <Route path="/counter" element={<Counter />}/>
          <Route path="/form" element={<UserForm />}/>
          <Route path="/" element={<HelloWorld />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
