import { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: []
    };
    this.handleClick = this.handleClick.bind(this);
    
  }
  componentDidMount() {
    console.log('component berhasil di-mount/render');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('component berhasil di-update');
  }
  componentWillUnmount() {
    console.log('component akan di-unmount');
  }
  handleClick() {
    console.log('button ter-click');
    this.setState({
      taskList: ['bangun tidur', 'mandi', 'masak', 'sarapan']
    });
  }
  handleClickWithArrow = () => {
    console.log('button ter-click(arrow function)');
    this.setState({
      taskList: ['bangun tidur', 'mandi', 'masak', 'sarapan']
    });
  }
  // const arr2 = [0, 1, 2, 3]
  // const arr = arr2.map((value, index) => {
  //   return value + 1;
  // })
  // hasilnya arr = [1, 2, 3 ,4]
  render() {
    const { taskList } = this.state;
    return (
      <>
        <h2>Todo List</h2>
        <ol>
          {taskList.map((task, index) => <li key={index}>{task}</li>)}
        </ol>
        <button onClick={this.handleClick}>click</button>
        <button onClick={this.handleClickWithArrow}>click(with arrow function)</button>
      </>
    );
  }
}

export default Todo;