const express = require('express');
const fs = require('fs')
const PORT = process.env.PORT || 30000

function log_middleware(req, res, next) {
  fs.appendFile('/app/server-logs/log.txt', 'received request', (err) => {
    if (err) {
      next(err)
    }

    next()
  })
}

const app = express();
app.use(log_middleware)
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
