import express from "express";
import https from "https";
import { config } from "dotenv";
import tokenRouter from "./routes/token.js";
import { Password } from "./services/password.js";
// load env vars
config();

const server = express();
server.use(express.json());
server.use("/api/v1/token", tokenRouter);

server.get("/", (request, response) => {
    response.send("hit successful!");
})

/**
 * @TODO
 * add SSL Cert -> private key + cert
 */

const httpsServer = https.createServer({}, server);

httpsServer.listen(process.env.PORT, () => {
    console.log("Listening on port", process.env.PORT);
})

// async function main() {
//     const password = new Password();
//     const hash = await password.generateHash("chinmay123");
//     console.log(hash);
//     const data = await password.compareHash("chinmay123", hash);
//     console.log(data);
// }
// main();