const fs = require('fs');
const fn = "fragen.json";
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
   if (fs.existsSync("/tmp")) {
      const fn2 = `/tmp/${fn}`;
      if (fs.existsSync(`/tmp/${fn2}`)) {
         console.log(`lese ${fn2}`);
         const s = fs.readFileSync(fn2, 'utf-8');
         fragen = JSON.parse(s);
      }
      else {
         save();
      }
   }
   else {
      if (fs.existsSync(fn)) {
         console.log(`lese ${fn}`);
         const s = fs.readFileSync(fn, 'utf-8');
         fragen = JSON.parse(s);
      }
      else {
         save();
      }
   }
}

function save() {
   let fn2;
   if (fs.existsSync("/tmp")) {
      fn2 = `/tmp/${fn}`;
   }
   else {
      fn2 = fn;
   }
   console.log(`schreibe ${fn2}`);
   fs.writeFileSync(fn2, JSON.stringify(fragen));
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
exports.delete = function (id) {
   fragen.splice(id, 1);
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

load();