const express = require("express");
//const fragen = require("./fragen");
const fragen = require("./fragenfs");

const app = express();

app.use(express.static('public'));

app.get("/", (req, res) => res.send("Express on Vercel 4"));
app.get("/quizfragen", function (req, res) {
   const q = req.query;
   //const r = zufallszahlen();
   const r = fragen.getRandom(10);
   res.json(r);
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;