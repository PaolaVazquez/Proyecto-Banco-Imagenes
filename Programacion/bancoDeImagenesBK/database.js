const mysql = require('mysql');
const { promisify } = require('util');

const { database } = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('LA CONEXION DE LA BASE DE DATOS FUE CERRADA');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('CUANTAS CONEXIONES TIENE LA BASE DE DATOS HASTA EL MOMENTO');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('LA CONEXION DE LA BASE DE DATOS FUE RECHAZADA');
        }
    }

    if (connection) connection.release();
    console.log('BD esta conectada');
    return;
});

//Convertiendo promesas
pool.query = promisify(pool.query);

module.exports = pool;