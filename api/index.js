const express = require("express");
const bodyParser = require('body-parser');
//const fragen = require("./fragen");
const fragen = require("./fragenfs");

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(express.json());

app.use((req, res, next) => {
   // Modify the response body or perform any other actions
   // console.log(`Intercepted request: ${req.method} ${req.url}`);
   next();
});

app.get("/", (req, res) => res.send("Express on Vercel 4"));

app.get("/api/quizfragen", function (req, res) {
   const q = req.query;
   //const r = zufallszahlen();
   if (q.n) {
      const r = fragen.getRandom(10);
      res.json(r);
   }
   else {
      const r = fragen.getAll();
      res.json(r);
   }
});

app.put("/api/quizfragen", function (req, res) {
   const jo = req.body;
   const r = fragen.update(jo);
   res.json(r);
});

app.post("/api/quizfragen", function (req, res) {
   const jo = req.body;
   const r = fragen.append(jo);
   res.json(r);
});

app.delete("/api/quizfragen", function (req, res) {
   const jo = req.body;
   const r = fragen.delete(jo);
   res.json(r);
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;