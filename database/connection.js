import "dotenv/config";
import pg from "pg";
const { Pool } = pg;

export const pool = new Pool({
  allowExitOnIdle: true,
});
try {
  const time = await pool.query("SELECT NOW()");
  console.log("DB Conectada exitosamente!" + time.rows[0].now);
} catch (error) {
  console.log(error);
}
