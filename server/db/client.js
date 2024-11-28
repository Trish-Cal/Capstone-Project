const pg = require("pg");
const client = new Client(
  process.env.DATABASE_URL || "postgres://localhost:3000/acmebusinessreviews"
);

module.exports = { client };


// const { create } = require('domain');
// const client = new Client(
//   'postgres://localhost/fsa_app_db'
// );






