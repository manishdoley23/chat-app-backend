import jwt from "jsonwebtoken";
import httpError from "http-errors";
import { NextFunction, Request, Response } from "express";

export default function (req: Request, res: Response, next: NextFunction) {
	try {
		const tokenHeader = req.headers.authorization?.split("Bearer ")[1];
		if (tokenHeader !== undefined) {
			const decoded = jwt.verify(
				tokenHeader,
				process.env.ACCESS_TOKEN_SECRET!
			);
			// req.user = decoded;
		} else {
			console.error("No token header");
			next(httpError(401));
		}
	} catch (error) {}
}
