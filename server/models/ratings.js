const db = require('../db');

module.exports = {
  getAll: async (num, cb) => {
    const client = await db.pool.connect();
    try {
      const query = `SELECT ratings.*, r.restaurant_name, i.food_name, u.username
      FROM foodies.ratings
      INNER JOIN foodies.items i ON i.food_id = ratings.food_id
      INNER JOIN foodies.users u on u.user_id = ratings.user_id
      INNER JOIN foodies.restaurants r ON i.restaurant_id = r.restaurant_id
      WHERE ratings.food_id = ${num}`
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
