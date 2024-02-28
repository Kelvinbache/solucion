// debemos cambiar la estructuracion del codigo,
// debemos intentar pasar los datos directamente a la function
// o almenos pasarlo como un middleware

import sqlite3 from "sqlite3";

const sqlite = sqlite3.verbose();

// crete new base data
const db = new sqlite.Database(
  "./sql/test.db",
  sqlite.OPEN_READWRITE || sqlite.OPEN_FULLMUTEX,
  (e) => {
    if (e) console.error({ message: error });
  }
);

// db.run('DROP TABLE IF EXISTS users'); ---> recept of tha table

const table = `
CREATE TABLE users ( 
    user_id INTEGER NOT NULL,
    user_name TEXT NOT NULL,
    user_password INTEGER NOT NULL,  
    PRIMARY KEY ( user_id AUTOINCREMENT)
);`;

// db.run(table); ----> ejected and create new table

// Put data od users
function url(data) {
  try {
    const { name, password } = data;
    const value = ` INSERT INTO users ( user_name, user_password ) VALUES(?,?)`;

    db.run(value, [name, password], (err) => {
      if (err) {
        console.error({ message: err });
      }
    });
  } catch (err) {
    if (err) console.error({ message: err });
  }
}

// write the content table of users
function write() {
  const select = `SELECT * FROM users`;

  db.all(select, [], (err, rows) => {
    if (err) {
      console.error({ message: err });
    } else {
      rows.forEach((row) => console.log(row));
    }
  });
}

//remove users
function delete_users(id) {
  const delete_user = `DELETE FROM users WHERE user_id=?`;
  db.run(delete_user, parseInt(id), (err) => {
    if (err) {
      console.error({ message: err });
    }
  });
}

// validation of users
function validation_User(data) {
  const { name, password } = data; // need that validate the data

  const proof = `SELECT * FROM users WHERE user_name = ? AND user_password = ? `; // pull apart name and password in functions, for validate and not consume memory

  db.get(proof, [name, password], (e, rows) => {
  
    if (e) {
      console.error({ error: e });
    }

    if (rows === undefined) { /// data is undefined means that not exit, the user
      console.log("user not is found");
    
    } else {
     const { user_id , user_name , user_password } = rows;
     console.log(`user is ${user_name} and password:${user_password} and his id is ${user_id}`) // would have that pass, the data address url 
   }

  });
}

export { url, write, delete_users, validation_User };
