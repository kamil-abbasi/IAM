import express, { type Response } from "express";

import { setupEnv } from "@/env";
import middleware from "@/middleware";
import { Container } from "@/container";

async function bootstrap() {
	const env = setupEnv();

	const container = new Container(env);

	const app = express();

	app.use(middleware.logger(container.logger));

	app.listen(env.PORT, () => {
		container.logger.info(`Http server is listening on port ${env.PORT}`);
	});

	app.get("healthcheck", (req, res: Response) => {
		res.json({ message: "I'm fine" });
	});
}

await bootstrap();
