/*
   https://nodejs.org/api/fs.html
*/
const fs = require('fs');

const fn = "fragen.json";
let pn;
let ffn;

var fragen = [
   { text: 'Frage 1 -', antwort: 0 },
   { text: 'Frage 2 -', antwort: 1 },
   { text: 'Frage 3 -', antwort: 0 },
   { text: 'Frage 4 -', antwort: 1 },
   { text: 'Frage 5 -', antwort: 0 },
   { text: 'Frage 6 -', antwort: 1 },
   { text: 'Frage 7 -', antwort: 0 },
   { text: 'Frage 8 -', antwort: 1 },
   { text: 'Frage 9 -', antwort: 0 },
   { text: 'Frage 10 -', antwort: 1 },
];

function load() {
   console.debug(`lese ${ffn}`);
   const s = fs.readFileSync(ffn, 'utf-8');
   fragen = JSON.parse(s);
}

function save() {
   console.log(`schreibe ${ffn}`);
   fs.writeFileSync(ffn, JSON.stringify(fragen));
}

exports.get = function (Id) {
   this.getAll();
   return fragen;
}
exports.update = function (frage) {
   fragen[frage.id] = frage;
   save();
   return fragen;
}
exports.append = function (frage) {
   fragen.push(frage);
   save();
   return fragen;
}
exports.delete = function (frage) {
   const i = Number(frage.id);
   fragen.splice(i, 1);
   save();
   return fragen;
}

exports.getAll = function () {
   return fragen;
}
exports.getRandom = function (n) {
   //this.getAll();
   const max = fragen.length;
   var arr = [];
   for (let i = 0; i < n; i++) {
      var x = Math.floor(Math.random() * (max));
      arr[i] = fragen[x];
   }
   return arr;
}

if (fs.existsSync("/tmp")) {
   pn = "/tmp";
}
else
   if (fs.existsSync("./tmp")) {
      pn = "./tmp";
   }
ffn = `${pn}/${fn}`;
if (pn && !fs.existsSync(ffn)) {
   save();
}

load();