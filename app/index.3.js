import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// TodoApp

const TodoList = (props) => (
  <ul>
    {
      props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))
    }
  </ul>
)

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      items: [],
      text: '',
    };
  }
  onChange(e) {
    this.setState({ text: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const nextItems = this.state.items.concat([{ 
      text: this.state.text,
      id: Date.now(),
    }]);
    const nextText = '';
    this.setState({
      items: nextItems,
      text: nextText
    });
  }
  onClick(e) {
    const items = this.state.items;
    items.splice(0, 1);
    this.setState({
      items: items,
      text: '',
    });
  }
  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items}></TodoList>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
        <button onClick={this.onClick}>{'items #' + (this.state.items.length + 1)}</button>
      </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.querySelector('#app'));
