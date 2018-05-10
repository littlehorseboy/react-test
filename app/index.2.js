import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.tick = this.tick.bind(this);

    this.state = {
      secondsElapsed: 0,
    }
  }
  tick() {
    this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
  }
  // componentDidMount 為 component 生命週期中 已插入節點的階段, 通常一些非同步操作都會放置這裡
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
  // componentWillMount 為 component 生命週期中 即將移出插入的節點階段
  componentWillMount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
}

ReactDOM.render(<Timer />, document.querySelector('#app'));
