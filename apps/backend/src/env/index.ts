import z, { ZodError } from "zod";

import { LogLevel } from "@/logger";

export const envSchema = z.object({
	PORT: z.coerce.number().default(3000),
	LOG_LEVEL: z.enum(LogLevel).default(LogLevel.HTTP),
	DB_URL: z.url(),
});

export type Env = z.infer<typeof envSchema>;

export function setupEnv() {
	try {
		const result = envSchema.parse(process.env);

		return result;
	} catch (err) {
		const message =
			"Invalid env configuration. Make sure you are supplying correct variables. To see an example config look at .env.example file.";

		const configErr = new Error(message);

		if (err instanceof ZodError) {
			configErr.cause = z.treeifyError(err);
		}

		throw configErr;
	}
}
