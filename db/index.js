const pg = require('pg');

const client = new pg.Client('postgres://localhost:5432/juicebox-dev');

async function getAllUsers() {
    const {rows} = await client.query(
        `SELECT id, username
        FROM users;
    `);
    return rows;
}

module.exports = {
    client,
    getAllUsers,
}