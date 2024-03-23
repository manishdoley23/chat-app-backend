import { Pool, QueryResult, PoolConfig } from "pg";

const pool = new Pool({
	host: process.env.PG_HOST,
	port: parseInt(process.env.PG_PORT!),
	user: process.env.PG_USER,
	password: process.env.PG_PASSWORD,
	database: process.env.PG_DATABASE,
});

export const query = (
	text: string,
	params: any,
	callback: (err: Error, result: QueryResult<any>) => void
) => {
	return pool.query(text, params, callback);
};
