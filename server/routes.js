/* eslint-disable no-console */
const express = require('express');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

router.post('/prompt', (req, res) => {
  const { prompts } = req.body;
  const promptCon = {
    prompt: prompts,
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };
  axios.post(
    'https://api.openai.com/v1/engines/text-curie-001/completions',
    promptCon,
    { headers: { Authorization: `Bearer ${process.env.KEY}` } },
  )
    .then(({ data }) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
