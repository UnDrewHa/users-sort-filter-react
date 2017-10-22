import React from 'react';

export default function OwlsTable (props) {
  if (props.users.length === 0) return null;

  let users = props.users;

  if (props.searchValue.length > 0) {
    users = users.filter(user => {
      return user.name.toLowerCase().includes(props.searchValue.toLowerCase());
    });
  }

  users = users.map(user => 
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.age}</td>
      <td>{user.phone}</td>
    </tr>);

  return (
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
  )
}