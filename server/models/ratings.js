const db = require('../db');

module.exports = {
  // getAll: async (cb) => {
  //   const client = await db.pool.connect();
  //   try {
  //     const query = `SELECT i.*, r.restaurant_name
  //     FROM foodies.items i
  //     INNER JOIN foodies.restaurants r ON i.restaurant_id = r.restaurant_id
  //     WHERE LOWER(food_name) LIKE '%${item.toLowerCase()}%'`
  //     const results = await client.query(query);
  //     cb(null, results);
  //   } catch (e) {
  //     cb(e);
  //   } finally {
  //     client.release();
  //   }
  // },
  post: async (rating, cb) => {
    const client = await db.pool.connect();
    try {
      await client.query('BEGIN');
      // insert query
      const query = `INSERT INTO foodies.ratings`
      const results = await client.query(query);
      // update average query & increase count

      await client.query('COMMIT');
      cb(null, 'success');
    } catch (e) {
      await client.query('ROLLBACK');
      cb(e);
    } finally {
      client.release();
    }
  },
};
