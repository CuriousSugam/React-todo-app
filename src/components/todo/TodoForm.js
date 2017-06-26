import React from 'react'

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event){
    this.setState({
      inputValue: event.target.value
    });
  }

  render(){
    return(
      <form>
        <input
          type='text'
          placeholder='What needs to be done?'
          onChange={this.handleInputChange}
          value={this.state.inputValue} />
      </form>
    );
  }

}

export default TodoForm;
