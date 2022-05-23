/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import IndividualPrompt from './IndividualPrompt.jsx';

export default function Responses({ list }) {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    setResponse([...response, ...list]);
  }, []);
  if (list.length === 0) {
    return (
      <div>
        <h3>Responses:</h3>
        No responses to display
      </div>
    );
  }
  return (
    <div>
      <h3>Responses:</h3>
      {list.map((obj) => {
        return (
          <IndividualPrompt newp={obj.new} prev={obj.prev} />
        );
      })}
    </div>
  );
}
