import cors from "cors";
import express, { Request, Response } from "express";

const app = express();
app.use(cors());
app.use(express.json());
app.post("/", (request: Request, response: Response) => {
  return response.json({
    message:
      request.headers["x-forwarded-for"] ||
      request.socket?.remoteAddress?.slice(7),
  });
});

app.listen(3000);
