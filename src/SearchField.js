import React from 'react';

export default function SearchField (props) {
  return (
    <div className="field">
      <label className="label" htmlFor='searchInput'>Search</label>
      <div className="control">
        <input id='searchInput' 
          className="input" 
          type="text" 
          placeholder="Search input" 
          value={props.value} 
          onChange={props.onChange} />
      </div>
    </div>
  )
}