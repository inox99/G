const fs = require('fs');
const fn = "fragen.json";
var fragen = [
   { text: 'Frage 1', antwort: 0 },
   { text: 'Frage 2', antwort: 1 },
   { text: 'Frage 3', antwort: 0 },
   { text: 'Frage 4', antwort: 1 },
   { text: 'Frage 5', antwort: 0 },
   { text: 'Frage 6', antwort: 1 },
   { text: 'Frage 7', antwort: 0 },
   { text: 'Frage 8', antwort: 1 },
   { text: 'Frage 9', antwort: 0 },
   { text: 'Frage 10', antwort: 1 },
];

exports.get = function (Id) {
   if (fs.existsSync(fn)) {
      console.debug(`lese ${fn}`);
      const s = fs.readFileSync(fn, 'utf-8');
      fragen = JSON.parse(s);
   }
   else {
      console.debug(`schreibe ${fn}`);
      fs.writeFileSync(fn, JSON.stringify(fragen));
   }
   return fragen;
}
exports.update = function (Id, frage) {
   return fragen;
}
exports.append = function (frage) {
   fragen.push(frage);
   return fragen;
}
exports.delete = function (id) {
   return fragen;
}
exports.getAll = function () {
   if (fs.existsSync(fn)) {
      console.log(`lese ${fn}`);
      const s = fs.readFileSync(fn, 'utf-8');
      fragen = JSON.parse(s);
   }
   else {
      console.log(`schreibe ${fn}`);
      fs.writeFileSync(fn, JSON.stringify(fragen));
   }
   return fragen;
}
exports.getRandom = function (n) {
   this.getAll();
   const max = fragen.length;
   var arr = [];
   for (let i = 0; i < n; i++) {
      var x = Math.floor(Math.random() * (max));
      arr[i] = fragen[x];
   }
   return arr;
}
