import express from "express";
import { JWT } from "../services/jwt.js";

const tokenRouter = express.Router();

tokenRouter.get("/", (request, response) => {
    response.json({ message: "hit" });
})

tokenRouter.post("/generate", async (request, response) => {
    const jwt = new JWT();
    const token = await jwt.generateToken(request.body);
    response.json({ success: true, token });
});

tokenRouter.post("/verify", async (request, response, next) => {
    const jwt = new JWT();
    const { authorization } = request.headers;
    try {
        if (!authorization) throw new Error("Uh-oh! Invalid Request detected!");
        const token = authorization.split("Bearer ")[1];
        const data = await jwt.verifyToken(token);
        response.json({ success: true, data });
    } catch (error) {
        const { name, message, stack } = error;
        console.log("error", message);
        response.json({ success: false, message: `${message}` });
    }
});

export default tokenRouter;