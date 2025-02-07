import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Express with TypeScript!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get("/hola", (req: Request, res: Response) => {
  res.send("Holaaaaaa!");
  console.log("Holaaaa");
});
