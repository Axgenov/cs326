import express from "express";

const app = express();
app.set("view engine","ejs")
const PORT = 3000;
/* import { join } from "path"; */

app.set("view engine", "ejs");
//app.set("views", "views");
app.use(express.static("public"));

/*
app.get("/", (req, res) => {
  res.sendFile(join(import.meta.dirname, "public", "index.html"));
});
*/
/*
app.get("/", (req, res) => {
  res.send("Hello, web!");
});
*/
//UNIT 3

const entries = [
  { title: "First note" },
  { title: "Second note" },
  { title: "Third note" },
];
app.get("/entries", (req, res) => {
  res.render("entries", {
    title: "My Events TEST",
    entries: entries,
  });
});

app.get("/entries/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const entry = entries[id];

  if (!entry) {
    res.status(404).render("error", { message: "Entry not found." });
  }
});

app.get("/", (req, res) => {
  res.redirect("/projects");
});
/*app.get("/about", (req, res) => {
  res.send("this is a web programming course");
});
*/
//LAB 2
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});
//end lab 2
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Entries page: http://localhost:${PORT}/entries`);
});
app.get("/hello/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

app.get("/projects", (req, res) => {
  const tag = req.query.tag;

  res.send(`${tag}`);
});
