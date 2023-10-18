import { Pool } from "pg";
require("dotenv").config();

const supabaseUrl = process.env.DATABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const pool = new Pool({
  connectionString: `${supabaseUrl}?apikey=${supabaseKey}`,
  ssl: { rejectUnauthorized: false },
});

export async function query(text, params) {
  console.log("conectando a la BD");
  const client = await pool.connect();
  console.log("BD conectada");

  try {
    return await client.query(text, params);
  } catch (error) {
    console.log("Error al conectar la BD", error);
  } finally {
    client.release();
  }
}
