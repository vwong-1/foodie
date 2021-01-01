const db = require('../db');

module.exports = {
  get: async (num, cb) => {
    console.log('ratings')
    const client = await db.pool.connect();
    try {
      const query = `SELECT ratings.*, i.*, r.restaurant_name, u.username
      FROM foodies.items i
      LEFT JOIN foodies.ratings
        INNER JOIN foodies.users u ON u.user_id = ratings.user_id
      ON ratings.food_id = i.food_id
      INNER JOIN foodies.restaurants r ON i.restaurant_id = r.restaurant_id
      WHERE i.food_id = ${num}`
      const results = await client.query(query);
      cb(null, results);
    } catch (e) {
      cb(e);
    } finally {
      client.release();
    }
  },
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
