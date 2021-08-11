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
        onChange={event => setQuery(event.target.value)}
      />
      {Data.filter(data => {
        if (query === '') {
          return data;
        } else if (data.author.toLowerCase().includes(query.toLowerCase())) {
          return data;
        }
      }).map((data, key) => (
        <p>{data.author}</p>
      ))}
    </div>
  );
}
