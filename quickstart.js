const cassandra = require('cassandra-driver');

// TO DO: Fill in your own host and data center
const client = new cassandra.Client({ 
  contactPoints: ['127.0.0.1'], 
  localDataCenter: 'datacenter1',  
  keyspace: 'demo'
});

function insertUser(lastname, age, city, email, firstname) {
  
  // TO DO: execute a prepared statement that inserts one user into the table
}

function selectUser(lastname) {
  
  // TO DO: execute a prepared that retrieves one user from the table
}

function updateUser(age, lastname) {
  
  // TO DO: execute a prepared statement that updates the age of one user
}

function deleteUser(lastname) {
  
  // TO DO: execute a prepared statement that deletes one user from the table
}

async function example() {
  await client.connect();
  await insertUser('Jones', 35, 'Austin', 'bob@example.com', 'Bob');
  const rs1 = await selectUser('Jones');
  const user1 = rs1.first();
  if (user1) {
    console.log("name = %s, age = %d", user1.firstname, user1.age);
  } else {
    console.log("No results");
  }
  await updateUser(36, 'Jones');
  const rs2 = await selectUser('Jones');
  const user2 = rs2.first();
  if (user2) {
    console.log("name = %s, age = %d", user2.firstname, user2.age);
  } else {
    console.log("No results");
  }
  await deleteUser('Jones');

  await client.shutdown();
}

example();
