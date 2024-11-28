const { createUser, fetchUsers, client } = require("./index.js");

const dropTables = async() => {
  try {
   console.log('DROPPING TABLES!')

   await client.query()
  } catch(err) {
    console.log('ERROR DROPPING TABLES');
  }
}

const [moe, lucy, ethyl, curly] = await Promise.all([
  createUser({ username: "moe", password: "m_pw" }),
  createUser({ username: "lucy", password: "l_pw" }),
  createUser({ username: "ethyl", password: "e_pw" }),
  createUser({ username: "curly", password: "c_pw" }),
]);

const createTables = async () => {
  try {
    console.log('CREATING TABLES');
  
  await client.query(`
    CREATE TABLE inventory (
      id SERIAL PRIMARY KEY,
      name VARCHAR(30), UNIQUE NOT NULL,
      price INTEGER 
        );
      `);

      console.log('TABLES CREATED!');

    } catch(err) {
      console.log('CREATE TABLES BROKE: ', err)
    }
}

const syncAndSeed = async () => {
  await client.connect();
  console.log('CONNECTED!');

  await dropTables();

  await createTables();
 
  await client.end();
  console.log('CONNECTED!');
}

syncAndSeed();

//   console.log(await fetchUsers());
//   client.end();
// };

// init();
