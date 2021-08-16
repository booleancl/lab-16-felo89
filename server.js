const express = require('express')

const server = express();

server.get('/', (req, res) => {
  res.send("Hola Boolean")
})

server.listen(8000, () => {
  console.log('Server running...');
})