import express from "express";
import cors from "cors";

import bodyParser from "body-parser";
import mountRoutes from "./routes";

const app = express();

app.use(cors());
app.use(bodyParser.json());
mountRoutes(app);

app.listen(7878, () => {
	console.log("Express: 7878");
});
