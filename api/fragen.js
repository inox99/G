
var f = {//template
   text:'',
   antwort: 0 // 0=nein, 1=ja
};
var a = 0;
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
   { text: 'Frage 11', antwort: 0 },
   { text: 'Frage 12', antwort: 1 },
   { text: 'Frage 13', antwort: 0 },
   { text: 'Frage 14', antwort: 1 },
   { text: 'Frage 15', antwort: 0 },
   { text: 'Frage 16', antwort: 1 },
   { text: 'Frage 17', antwort: 0 },
   { text: 'Frage 18', antwort: 1 },
   { text: 'Frage 19', antwort: 0 },
   { text: 'Frage 20', antwort: 1 },
   { text: 'Frage 21', antwort: 0 },
   { text: 'Frage 22', antwort: 1 },
   { text: 'Frage 23', antwort: 0 },
   { text: 'Frage 24', antwort: 1 },
   { text: 'Frage 25', antwort: 0 },
   { text: 'Frage 26', antwort: 1 },
   { text: 'Frage 27', antwort: 0 },
   { text: 'Frage 28', antwort: 1 },
   { text: 'Frage 29', antwort: 0 },
   { text: 'Frage 30', antwort: 1 }
];

// diese routine erzeugt og array
// for (let i = 1; i <= 30; i++) {
//    f.text = `Frage ${i}`;
//    f.antwort = a;
//    a = a == 0 ? a = 1 : a = 0;
//    console.log(f, ',');
// }

exports.get = function (Id) {
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
   return fragen;
}
exports.getRandom = function (n) {
   const max = fragen.length;
   var arr = [];
   for (let i = 0; i < n; i++) {
      var x = Math.floor(Math.random() * (max));
      arr[i] = fragen[x];
   }
   return arr;
}
