import express from "express";

const port = 3000;
const app = express();

app.listen(3000, () =>
  console.log(`Server listening at port http://localhost:${port}`)
);

app.get("/", (req, res) => res.send("OK"));
