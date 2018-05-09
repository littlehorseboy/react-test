import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

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
  todo: PropTypes.object,
  name: PropTypes.string,
};

ReactDOM.render(<App name="55123" />, document.querySelector('#app'));


//////////////////////////////////////////////////////////////////////////////////
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


//////////////////////////////////////////////////////////////////////////////////
const lists = ['JavaScript', 'Java', 'Node', 'Python'];

class HelloMessage2 extends React.Component {
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

ReactDOM.render(<HelloMessage2 />, document.querySelector('#HelloMessage2'));


//////////////////////////////////////////////////////////////////////////////////
// class HelloMessage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     return (
//       <div>Hello {this.props.name}</div>
//     );
//   }
// }

const HelloMessage = (props) => {
  return <div>Hello {props.name}</div>;
};

HelloMessage.propTypes = {
  name: PropTypes.string,
};

HelloMessage.defaultProps = {
  name: 'Zuck',
}

ReactDOM.render(<HelloMessage name="Horse" />, document.querySelector('#HelloMessage'));
