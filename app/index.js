import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

class UserGithub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      githubUrl: '',
      avatarUrl: '',
    }
  }
  componentDidMount() {
    axios.get(this.props.source, {
      params: {
        // ID: 12345
      }
    })
      .then((response) => {
        console.log(response);
        const data = response.data;
        this.setState({
          username: data.name,
          githubUrl: data.html_url,
          avatarUrl: data.avatar_url,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <h3>{this.state.username}</h3>
        <img src={this.state.avatarUrl} />
        <br />
        <a href={this.state.githubUrl}>Github Link</a>
      </div>
    );
  }
}

ReactDOM.render(
  <UserGithub source="https://api.github.com/users/littlehorseboy" />,
    document.querySelector('#app')
);
