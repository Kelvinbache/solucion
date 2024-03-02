/** 
 * TODO: tasks of api 
 * ? 1) Have is change code to object 
 * ? 2) Do drive of errors, before of pass data 
 * ? 3) crete middleware for validate the data  
 * ? 4) attempt pull apart, the code in file 
 * ? 5) remove dependencies that not use  
 * ? 6) Put name further descriptive to the archive 
 * ? 7) There is change the name routers 
 * ? 8) must attempt change, the code of the controller  
 * 
 * 
 * */ 


import sqlite3 from "sqlite3";
import { Errors_sql } from "../errors/errors_sql.mjs";

const sqlite = sqlite3.verbose();

// crete new base data
const db = new sqlite.Database(
  "./db/test.db",
  sqlite.OPEN_READWRITE || sqlite.OPEN_FULLMUTEX,

  (e) => {
    if (e) {
      const error = new Errors_sql(e);
      error.error();
    }
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

//--> I would be put method for this function 
function url(data) {
  try {
    const { name, password } = data;
    const value = ` INSERT INTO users ( user_name, user_password ) VALUES(?,?)`;

    db.run(value, [name], (e) => {

      if (e) {
        const error = new Errors_sql(e);
        console.log(error.error()); // changes return of error
    }

    });

  } catch (e) {
    if (e) {
      const error = new Errors_sql(e);
      error.error();
    }
  }
}

// write the content table of users
function write() {
  const select = `SELECT * FROM users`;

  db.all(select, [], (e, rows) => {
    if (e) {
      const error = new Errors_sql(e);
      error.error();
    } else {
      rows.forEach((row) => console.log(row));
    }
  });
}

//remove users
function delete_users(id) { //----> That would happen but pass a Id ?
  const delete_user = `DELETE FROM users WHERE user_id=?`;

  db.run(delete_user, parseInt(id), (e) => {
    if (e) {
      const error = new Errors_sql(e);
      console.log(error.error());
    }
  });
}

// validation of users
function validation_User(data) {
  const { name, password } = data; // need that validate the data

  const proof = `SELECT * FROM users WHERE user_name = ? AND user_password = ? `; // pull apart name and password in functions, for validate and not consume memory

  db.get(proof, [name, password], (e, rows) => {
    if (e) {
      const error = new Errors_sql(e);
      error.error();
    }

    if (rows === undefined) {
      /// data is undefined means that not exit, the user
      console.log(`user not is found ${name}`);
    } else {
      const { user_id, user_name, user_password } = rows; // cambiar la forma de responder
      console.log(
        `user is ${user_name} and password:${user_password} and his id is ${user_id}`
      ); // would have that pass, the data address url
    }
  });
}

export { url, write, delete_users, validation_User };
