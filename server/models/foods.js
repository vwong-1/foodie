const db = require('../db');

module.exports = {
  get: async (item, cb) => {
    const client = await db.pool.connect();
    try {
      console.log(item);
      const query = `SELECT i.*, r.restaurant_name
      FROM foodies.items i
      INNER JOIN foodies.restaurants r ON i.restaurant_id = r.restaurant_id
      WHERE LOWER(food_name) LIKE '%${item.toLowerCase()}%'`
      const results = await client.query(query);
      cb(null, results);
    } catch (e) {
      cb(e);
    } finally {
      client.release();
    }
  },
};
