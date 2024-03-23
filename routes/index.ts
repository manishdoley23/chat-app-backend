import { Express } from "express";

import auth from "./auth";

const mountRoutes = (app: Express) => {
	app.use("/api/auth", auth);
};

export default mountRoutes;
