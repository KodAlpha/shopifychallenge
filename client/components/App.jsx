/* eslint-disable no-console */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import axios from 'axios';
import PromptInput from './PromptInput.jsx';
import Responses from './Responses.jsx';

export default function App() {
  const [promptList, setPromptList] = useState([]);

  const handleSubmit = (prompt) => {
    axios.post('/prompt', {
      prompts: prompt,
    })
      .then(({ data }) => {
        const completedPrompt = data.choices[0].text;
        setPromptList([{
          prev: prompt,
          new: completedPrompt,
        }, ...promptList]);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Fun with AI</h1>
      <PromptInput submit={handleSubmit} />
      <Responses list={promptList} />
    </div>
  );
}
