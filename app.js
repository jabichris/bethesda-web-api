import express from "express";
import passport from "passport";
import route from "./routes";
import pass from "./config/passport/localStrategy";

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(passport.initialize());
pass(passport);
app.use(route);

export default app;
