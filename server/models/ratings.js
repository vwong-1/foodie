const db = require('../db');

module.exports = {
  get: async (num, cb) => {
    console.log('ratings')
    const client = await db.pool.connect();
    try {
      const query = `SELECT ratings.*, i.*, r.restaurant_name, r.full_address, u.username
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
      // update average & increase count
      const getQuery = `SELECT average_ratings, rating_count FROM foodies.items WHERE food_id=${rating.food_id}`
      const get = await client.query(getQuery);

      const insertQuery = `INSERT INTO foodies.ratings`
      const results = await client.query(query);

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
