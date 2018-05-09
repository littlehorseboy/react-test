import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: 'first',
    };
  }
  render() {
    return (
      <div>
        <h1>Hello, World! {this.props.name}</h1>
        <h1>Hello, World! {this.state.first}</h1>
      </div>
    );
  }
}

App.propTypes = {
  todo: Object,
  name: String,
};


ReactDOM.render(<App name="55123" />, document.querySelector('#app'));


// class MyComponent extends React.Component {
//   render() {
//     return (
//       <div>hello, my component</div>
//     );
//   }
// }

const MyComponent = (props) => {
  const divStyle = {
    color: 'red',
    // backgroundImage: 'url(' + imgUrl + ')',
  };

  return <div style={divStyle}>hello, my component {props.name}</div>
};

ReactDOM.render(<MyComponent name="5512345" />, document.querySelector('#MyComponent'));

class HelloMessage extends React.Component {
  render() {
    return (
      <ul>
        {lists.map((result, index) => {
          return (<li key={index}>{index}  {result}</li>);
        })}
      </ul>
    );
  }
}

ReactDOM.render(<HelloMessage />, document.querySelector('#HelloMessage'));
