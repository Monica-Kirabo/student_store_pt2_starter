CREATE TABLE users (
  id          SERIAL PRIMARY KEY,
  password    TEXT NOT NULL,
  username    TEXT NOT NULL UNIQUE,
  email       TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
  is_admin    BOOLEAN NOT NULL DEFAULT FALSE,
  name        TEXT NOT NULL,
  created_at  TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE products (
    id          SERIAL PRIMARY KEY,
    name        TEXT NOT NULL,
    category    TEXT NOT NULL,
    image     TEXT NOT NULL,
    description TEXT NOT NULL,
    price    BIGINT

 
);
CREATE TABLE orders (
  id          SERIAL PRIMARY KEY,
 FOREIGN KEY (customer_id) references users(id) integer unique not null,
 
  created_at  TIMESTAMP NOT NULL DEFAULT NOW()
);
CREATE TABLE order_details (
  FOREIGN KEY  order_id  references orders(id) Integer unique not null,
   FOREIGN KEY  product_id  references products(id) Integer unique not null,     
        
  quantity integer default 1,
  discount integer not null
 
  created_at  TIMESTAMP NOT NULL DEFAULT NOW(),
  primary key (order_id,product_id)
)