const express = require('express');
const app = express();
const PORT = 1337;
if (process.env.NODE_ENV !== 'production') require('../secrets');

console.log('server', process.env);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});

app.use('/api')