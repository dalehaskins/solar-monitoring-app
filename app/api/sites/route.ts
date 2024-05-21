import { NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export async function GET() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT siteid, sitename FROM Sites');
    return NextResponse.json(result.rows);
  } finally {
    client.release();
  }
}
