import React from 'react';
import Title from './components/todo/Title.js'
import TodoForm from './components/todo/TodoForm.js'
import './App.css';

// const App = () => <h1>Hello !</h1>

class App extends React.Component{
  render(){
    return (
      <div className='container'>
        <Title />
        <TodoForm/>
      </div>
    );
  }
}

// App.defaultProps = {
//   title: 'This is default title',
//   message: 'This is default message'
// }

// App.propTypes = {
//   title: React.PropTypes.string,
//   message: React.PropTypes.string.isRequired
// }



export default App
