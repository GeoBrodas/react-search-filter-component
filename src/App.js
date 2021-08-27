import React from 'react';
import './style.css';

import Data from '../mock-data.json';
import { useState } from 'react';

export default function App() {
  const [query, setQuery] = useState('');
  return (
    <div className="app">
      <input
        placeholder="Enter query"
        className="search-bar"
        onChange={event => setQuery(event.target.value)}
      />
      {Data.filter(data => {
        if (query === '') {
          return data;
        } else if (data.title.toLowerCase().includes(query.toLowerCase())) {
          return data;
        }
      })
        .sort((postA, postB) => (postA.date > postB.date ? -1 : 1))

        .map((data, index) => (
          <div className="box" key={index}>
            <p>{data.title}</p>
            <p>{data.date}</p>
            <p>{data.author}</p>
          </div>
        ))}
    </div>
  );
}
