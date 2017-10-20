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
    let users = this.state.users.map(user => <tr key={user.id}><td>{user.id}</td><td>{user.name}</td><td>{user.age}</td><td>{user.phone}</td></tr>);
    return (
      <div className='container'>
        <div className="field">
          <label className="label" for='searchInput'>Search</label>
          <div className="control">
            <input id='searchInput' className="input" type="text" placeholder="Search input" />
          </div>
        </div>
        <div className='content'>
          <table className="table">
            <thead>
              <tr>
                <th><span className='sort-btn _asc'>ID</span></th>
                <th><span className='sort-btn'>Name</span></th>
                <th><span className='sort-btn'>Age</span></th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {users}
            </tbody>
          </table>
        </div>  
      </div>
    );
  }
}

export default Owls;