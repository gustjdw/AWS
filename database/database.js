const express = require('express');
const mysql = require('mysql');
const dbconfig = require('./connection');
const connection = mysql.createConnection(dbconfig);

const app = express();

// configuration ======
app.set('port', process.env.PORT || 3002);

app.get('/', (req, res) => {
    res.send('Root');
});

app.get('/users', (req, res, next) => {
    connection.query('SELECT * FROM Users', (error, rows) => {
        if (error) throw error;
        console.log('User info is : ', rows);
        res.send(rows);
    }),
    connection.end();
});

app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
});