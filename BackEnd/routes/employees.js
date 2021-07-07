const express = require('express');
const router = express.Router();

const mySqlConnection = require('../database');


//GET All

router.get('/api/employees', (req, res) => {
    const query = 'SELECT * FROM EMPLOYEES';
    mySqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

//Get Employee

router.get('/api/employees/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM EMPLOYEES WHERE id=?';
    mySqlConnection.query(query, [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

//Delete Employee

router.delete('/api/employees/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM EMPLOYEES WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Employee Deleted' });
        } else {
            console.log(err);
        }
    });
});

// INSERT Employee


router.post('/api/employees/', (req, res) => {
    const { id, name, office, position, salary } = req.body;
    console.log(id, name, office, position, salary);
    const query = 'INSERT INTO EMPLOYEES (name, office, position, salary) values(?,?,?,?)';
    mysqlConnection.query(query, [id, name, office, position, salary], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Employeed Saved' });
        } else {
            console.log(err);
        }
    });

});

//Update Employee
router.put('/api/employees/:id', (req, res) => {
    const { name, office, position, salary } = req.body;
    const { id } = req.params;
    const query = 'UPDATE EMPLOYEES set name=?, position=?,office=?,  salary=? WHERE id=?;';
    mysqlConnection.query(query, [name, position, office, salary, id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Employee Updated' });
        } else {
            console.log(err);
        }
    });
});

module.exports = router;