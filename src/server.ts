import express from "express";
import cors from "cors";

const port = process.env.PORT || 3333;
const app = express();

app.use(cors());
app.use(express.json());

function initialize() {
  app.listen(port);
}

export { initialize, app };
