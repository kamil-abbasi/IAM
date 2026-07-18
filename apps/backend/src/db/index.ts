import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";

import type { Env } from "@/env";

export class Database {
	private readonly db: NodePgDatabase;

	constructor(env: Env) {
		this.db = drizzle(env.DB_URL);
	}
}
