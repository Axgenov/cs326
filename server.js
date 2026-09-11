import express from "express";

const app = express();
const PORT = 3000;
/*
app.get("/", (req, res) => {
  res.send("Hello, web!");
});
*/

app.get("/", (req, res) => {
  res.redirect("/projects");
});
app.get("/about", (req, res) => {
  res.send("this is a web programming course");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
app.get("/hello/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

app.get("/projects", (req, res) => {
  const tag = req.query.tag;

  res.send(`${tag}`);
});
