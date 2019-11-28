import app from "./app";

const port = process.env.PORT || 3000;

app.get("/", (req, res) =>
  res.status(200).send({ message: "Server is up and running!" })
);
app.listen(port);
console.log("Server running on port,", port);
