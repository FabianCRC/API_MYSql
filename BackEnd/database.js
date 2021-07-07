const mysql = require('mysql');

const mySqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'apiEmployees',
    multipleStatements: true,   
});

mySqlConnection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('DB MySql Conected')
    }
});

module.exports = mySqlConnection;