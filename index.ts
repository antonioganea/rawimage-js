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

/*

To obtain the WASM & js,

Compile this file : https://github.com/ncruces/dcraw/blob/master/dcraw.c

With emcc, with the following settings :

emcc dcraw.c -o dcraw.js -sMODULARIZE=1 -sEXPORTED_FUNCTIONS=_main -sEXIT_RUNTIME=0 -sEXPORTED_RUNTIME_METHODS=FS,callMain
-sTOTAL_MEMORY=1GB -sMAXIMUM_MEMORY=2GB -sALLOW_MEMORY_GROWTH=1 -sSTACK_SIZE=512MB -sINITIAL_HEAP=256MB -sALLOW_TABLE_GROWTH=1 -O3 -lm -DNODEPS

(Memory settings can be tweaked to your needs)

*/