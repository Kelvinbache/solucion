// debemos cambiar la estructuracion del codigo,
// debemos intentar pasar los datos directamente a la function 
// o almenos pasarlo como un middleware 

import sqlite3 from "sqlite3";

const sqlite = sqlite3.verbose();

const db = new sqlite.Database(
  "./sql/test.db",
  sqlite.OPEN_READWRITE || sqlite.OPEN_FULLMUTEX,
  (e) => {
    if (e) console.error({ message: error });
  }
);

const table = `
CREATE TABLE users ( 
    user_id INTEGER NOT NULL,
    user_name TEXT NOT NULL,
    user_password INTEGER NOT NULL,  
    PRIMARY KEY ( user_id AUTOINCREMENT)
);`;

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

function delete_users(id) {
  const delete_user = `DELETE FROM users WHERE user_id=?`;
  db.run(delete_user, parseInt(id) , (err) => {
    if (err) {
       console.error({ message: err });
    }
  });
}

export { url, write, delete_users };
