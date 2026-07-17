import { Logger, type ILogger } from "@/logger";
import type { Env } from "@/config/env";

export class Container {
	public readonly logger: ILogger;

	constructor(private readonly env: Env) {
		this.logger = new Logger({ level: env.LOG_LEVEL });
	}
}
