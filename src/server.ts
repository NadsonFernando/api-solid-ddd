import express from "express";
import session from "express-session";
import cors from "cors";

const port = process.env.PORT || 3333;
const app = express();

app.use(cors());
app.use(express.json());
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "#session::secret",
  })
);

function initialize() {
  app.listen(port);
}

export { initialize, app };
