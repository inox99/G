const e_text = document.getElementById("e_text");
const e_antw = document.getElementById("e_antw");

let n = 0;
let fragen = [];

function antwort(a) {
   if (n < fragen.length) {
      e_text.innerText = fragen[n].text;
   }
   else {
      e_text.innerText = "Fragen ende";
      e_antw.hidden = true;
   }
   n++;
}

e_text.innerText = "lade Fragen";

fetch('api/quizfragen?n=10')
   .then(res => res.json())
   .then((res) => {
      console.log(res);
      fragen = res;
      e_antw.hidden = false;
      e_text.innerText = fragen[0].text;
   })
   .catch(console.log)
