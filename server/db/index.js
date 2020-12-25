const { Pool } = require('pg');

const pool = new Pool({
  database: 'foodie',
});

module.exports.pool = pool;
