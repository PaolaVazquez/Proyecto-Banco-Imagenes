
import mysql from 'promise-mysql';

import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.getConnection().then(connection => {
    pool.releaseConnection(connection);
    console.log('BD conectada');
});

export default pool;

/*import { createPool } from "promise-mysql";

import keys from "./keys";

export async function connect(){
    const connection = createPool(keys.database);

    return connection;
}*/
