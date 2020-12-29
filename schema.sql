DROP SCHEMA IF EXISTS foodies CASCADE;

CREATE SCHEMA foodies;

  CREATE TABLE foodies.users (
    user_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(70),
    username VARCHAR(50),
    email VARCHAR(100)
  );

  CREATE TABLE foodies.restaurants (
    restaurant_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    restaurant_name VARCHAR(255),
    restaurant_phone VARCHAR(15),
    restaurant_website VARCHAR(255),
    hours VARCHAR(200),
    price_range NUMERIC(1),
    cuisines json,
    city VARCHAR(35),
    state VARCHAR(3),
    zip_code VARCHAR(5),
    street VARCHAR(50),
    full_address VARCHAR(100),
    geo_lat NUMERIC(9, 6),
    geo_lon NUMERIC(9, 6),
    api_id VARCHAR(20)
  );

  CREATE TABLE foodies.items (
    food_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    food_name VARCHAR(200),
    food_description VARCHAR(1000),
    price NUMERIC(6,2),
    average_ratings json,
    subsection VARCHAR(150),
    food_category json,
    rating_count INT DEFAULT 0,
    restaurant_id INT REFERENCES foodies.restaurants(restaurant_id) ON DELETE CASCADE
  );

  CREATE TABLE foodies.ratings (
    rating_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    taste NUMERIC(1),
    quality NUMERIC(1),
    presentation NUMERIC(1),
    value NUMERIC(1),
    healthy NUMERIC(1),
    quantity NUMERIC(1),
    text VARCHAR(2000),
    review_time INT,
    recommended BOOLEAN,
    up_vote INT,
    down_vote INT,
    overall_rating NUMERIC(3, 2),
    user_id INT REFERENCES foodies.users(user_id),
    food_id INT REFERENCES foodies.items(food_id) ON DELETE CASCADE
  );
