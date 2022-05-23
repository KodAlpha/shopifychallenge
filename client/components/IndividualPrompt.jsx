/* eslint-disable react/prop-types */
import React from 'react';

export default function IndividualPrompt({ prev, newp }) {
  return (
    <div>
      Prompt:
      {prev}
      <br />
      Response:
      {newp}
    </div>
  );
}
