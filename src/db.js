const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'planesdb',
    password: 'Lg7nGwPLSkFgCZuq',
    port: 5432,
});

module.exports = pool;