const express = require('express');
const app = express();
const port = 3000;

app.get('/health', (req, res) => {
  res.status(200).send({ message: 'Server is healthy!' });
});

app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app; // for testing
