import React, { Component } from 'react';
import axios from 'axios';

class Owls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get('users.json').then(users => {
      this.setState((prevState, props) => ({
        users : [...prevState, ...users.data]
      }));
    });
  }

  componentWillUnmount() {
    
  }

  render() {
    let users = this.state.users.map(user => <li key={user.id}>{user.name}</li>);
    return (
      <div>
        <h1>Hello, from owls!</h1>
        <ul>
          {users}
        </ul>
      </div>
    );
  }
}

export default Owls;