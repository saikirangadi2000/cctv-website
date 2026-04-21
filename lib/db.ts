import { neon } from '@neondatabase/serverless';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not set');
}

const sql = neon(connectionString);

interface QueryResult<T = any> {
  rows: T[];
  rowCount: number;
}

export async function query<T = any>(
  text: string,
  params?: any[]
): Promise<QueryResult<T>> {
  const start = Date.now();
  try {
    const result = await sql(text, params);
    const duration = Date.now() - start;
    console.log('[v0-db] Executed query in', duration, 'ms');
    return {
      rows: result as T[],
      rowCount: result.length,
    };
  } catch (error) {
    console.error('[v0-db] Database error:', error);
    throw error;
  }
}

// Product queries
export async function getProducts() {
  const result = await query(
    'SELECT * FROM products ORDER BY created_at DESC'
  );
  return result.rows;
}

export async function getProductById(id: number) {
  const result = await query('SELECT * FROM products WHERE id = $1', [id]);
  return result.rows[0];
}

export async function createProduct(
  name: string,
  description: string,
  price: number,
  imageUrl: string,
  category: string,
  specs: string
) {
  const result = await query(
    `INSERT INTO products (name, description, price, image_url, category, specs)
     VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
    [name, description, price, imageUrl, category, specs]
  );
  return result.rows[0];
}

export async function updateProduct(
  id: number,
  name: string,
  description: string,
  price: number,
  imageUrl: string,
  category: string,
  specs: string
) {
  const result = await query(
    `UPDATE products SET name = $1, description = $2, price = $3, image_url = $4, category = $5, specs = $6, updated_at = CURRENT_TIMESTAMP
     WHERE id = $7 RETURNING *`,
    [name, description, price, imageUrl, category, specs, id]
  );
  return result.rows[0];
}

export async function deleteProduct(id: number) {
  await query('DELETE FROM products WHERE id = $1', [id]);
}

// Service queries
export async function getServices() {
  const result = await query(
    'SELECT * FROM services ORDER BY created_at DESC'
  );
  return result.rows;
}

export async function getServiceById(id: number) {
  const result = await query('SELECT * FROM services WHERE id = $1', [id]);
  return result.rows[0];
}

export async function createService(
  name: string,
  description: string,
  price: number,
  imageUrl: string,
  duration: string,
  features: string
) {
  const result = await query(
    `INSERT INTO services (name, description, price, image_url, duration, features)
     VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
    [name, description, price, imageUrl, duration, features]
  );
  return result.rows[0];
}

export async function updateService(
  id: number,
  name: string,
  description: string,
  price: number,
  imageUrl: string,
  duration: string,
  features: string
) {
  const result = await query(
    `UPDATE services SET name = $1, description = $2, price = $3, image_url = $4, duration = $5, features = $6, updated_at = CURRENT_TIMESTAMP
     WHERE id = $7 RETURNING *`,
    [name, description, price, imageUrl, duration, features, id]
  );
  return result.rows[0];
}

export async function deleteService(id: number) {
  await query('DELETE FROM services WHERE id = $1', [id]);
}

// User queries
export async function getUserByEmail(email: string) {
  const result = await query('SELECT * FROM users WHERE email = $1', [email]);
  return result.rows[0];
}

export async function createUser(
  email: string,
  passwordHash: string,
  name: string
) {
  const result = await query(
    `INSERT INTO users (email, password_hash, name, is_admin) VALUES ($1, $2, $3, false) RETURNING id, email, name, is_admin`,
    [email, passwordHash, name]
  );
  return result.rows[0];
}
