import { Router } from "express";

const router = Router();
export default router;

router.post("/signup", async (req, res) => {
	const { email, password } = req.body;
	console.log("data", email, password);
});
