import cors from "cors";
import express from "express";
import { Router } from "express";
import { createRouter } from "./domains/createRouter";
import { getServerStatus } from "./status";

const port = 3000;

const app = express();
const router = Router();
app.use(express.json());
app.use(cors());
app.use("/api", router);

createRouter(router);
getServerStatus(router);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});