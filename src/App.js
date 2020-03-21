import React from 'react';
import Footer from './components/footer'
import AddTodo from './containers/addTodo'
import VisibleTodoList from './containers/visibleTodoList'
import './App.css';

function App() {
  return (
    <div className="App">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
  );
}

export default App;





