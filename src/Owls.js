import React, { Component } from 'react';
import axios from 'axios';

import SearchField from './SearchField.js'
import OwlsTable from './OwlsTable.js'

class Owls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      searchValue: ''
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
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

  onChangeHandler(e) {
    this.setState({
      searchValue: e.target.value
    });
  }

  render() {
    return (
      <div className='container'>
        <SearchField value={this.state.searchValue} onChange={this.onChangeHandler} />
        <div className='content'>
          <OwlsTable users={this.state.users} searchValue={this.state.searchValue} />
        </div>
      </div>
    );
  }
}

export default Owls;