const knex = require('knex')({
    client:'pg',
    connection:'postgres://postgres:rishavpgsql@localhost:5432/infoware-ass-db'
});

module.exports = {knex};