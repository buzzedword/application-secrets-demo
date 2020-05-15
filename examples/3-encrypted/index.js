const { Client } = require('pg');
const client = new Client();

client.connect();

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
});