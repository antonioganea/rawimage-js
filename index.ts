// src/index.ts
import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = process.env.PORT || 9590;

app.use(express.json())

app.set('view engine', 'ejs');

app.use("/public", express.static('./public'))

app.get("/", (req: Request, res: Response) => {

  res.redirect("public/emcc/dcraw.html");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});