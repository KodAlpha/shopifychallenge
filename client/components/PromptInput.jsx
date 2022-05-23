/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Select from 'react-select';

const preset = [
  { value: 'Hello', label: 'Hello' },
  { value: 'Write a poem about a dog', label: 'Write a poem about a dog' },
  { value: 'How is the weather', label: 'How is the weather' },
];

export default function PromptInput({ submit }) {
  const [prompt, setPrompt] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setPrompt(e.target.value);
  };

  const handleSelect = (e) => {
    setPrompt(e.value);
  };

  return (
    <div>
      <form onSubmit={() => { submit(prompt); }}>
        <label>Try A Prompt</label>
        <Select
          options={preset}
          placeholder="Try a prompt"
          name="prompt"
          onChange={handleSelect}
        />
        <label>Enter Prompt:</label>
        <br />
        <input
          type="text"
          wrap="soft"
          cols="60"
          rows="5"
          value={prompt}
          onChange={handleChange}
        />
      </form>
      <button type="button" onClick={() => { submit(prompt); }}>SUBMIT</button>
    </div>
  );
}
