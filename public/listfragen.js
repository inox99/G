/*

fetch('/api/quizfragen?n=10')
      .then(res => res.json())
      .then(console.log)
      .catch(console.log)

*/

const e_fragentable = document.getElementById("id_fragentable");
const e_loading = document.getElementById("id_loading");
const e_editdlg = document.getElementById("id_editdlg");
const e_editdlg_ha = document.getElementById("id_editdlg_ha");
const e_editdlg_hb = document.getElementById("id_editdlg_hb");

const e_editdlg_frageid = document.getElementById("id_editdlg_frageid");
const e_editdlg_fragetext = document.getElementById("id_editdlg_fragetext");
const e_editdlg_antwort_ja = document.getElementById("id_editdlg_antwort_ja");
const e_editdlg_antwort_nein = document.getElementById("id_editdlg_antwort_nein");

const e_removedlg = document.getElementById("id_removedlg");
const e_removedlg_frageid = document.getElementById("id_removedlg_frageid");

function tbl_Fragen(fragen) {
   //https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement
   while (e_fragentable.rows.length > 1) {
      e_fragentable.deleteRow(-1);
   }
   for (let i = 0; i < fragen.length; i++) {
      const row = e_fragentable.insertRow(-1);
      row.insertCell(0).innerText = i;
      row.insertCell(1).innerText = fragen[i].text;
      row.insertCell(2).innerText = fragen[i].antwort === 1 ? "Ja" : "Nein";
      row.insertCell(3).innerHTML = `<button onclick="editDlg(${i})">bearbeiten</button><button onclick="removeDlg(${i})">löschen</button>`;
   }
}

function speichern() {
   const frage = {
      id: e_editdlg_frageid.innerText,
      text: e_editdlg_fragetext.value,
      antwort: e_editdlg_antwort_ja.checked ? 1 : 0,
   };
   fetch('/api/quizfragen', {
      method: frage.id.length > 0 ? "PUT" : "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(frage),
   })
      .then(res => res.json())
      .then((res) => {
         console.log(res);
         tbl_Fragen(res);
         e_loading.hidden = !(e_fragentable.hidden = false);
         closedlg();
      })
      .catch((err) => { console.error(err) });
   return false;
}

function loeschen() {
   const frage = {
      id: e_removedlg_frageid.innerText,
   };
   fetch('/api/quizfragen', {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(frage),
   })
      .then(res => res.json())
      .then((res) => {
         console.log(res);
         tbl_Fragen(res);
         e_loading.hidden = !(e_fragentable.hidden = false);
         closedlg();
      })
      .catch((err) => { console.error(err) });
   return false;
}

function closedlg() {
   //ev.preventDefault();
   e_editdlg.close();
   e_removedlg.close();
   return false;
}

function editDlg(id) {
   console.debug(`editDlg(${id})called`);
   //e_editdlg_frageid.innerText = id;
   if (id >= 0) {
      id++;
      const row = e_fragentable.rows[id];
      e_editdlg_ha.hidden = !(e_editdlg_hb.hidden = true);
      e_editdlg_frageid.innerText = row.cells[0].innerText;
      e_editdlg_fragetext.value = row.cells[1].innerText;
      e_editdlg_antwort_ja.checked = row.cells[2].innerText === "Ja";
      e_editdlg_antwort_nein.checked = row.cells[2].innerText === "Nein";
   }
   else {
      e_editdlg_ha.hidden = !(e_editdlg_hb.hidden = false);
      e_editdlg_frageid.innerText = "";
      e_editdlg_fragetext.value = "";
      e_editdlg_antwort_ja.checked = !(e_editdlg_antwort_nein.checked = false);
   }
   e_editdlg.showModal();
   return false;
}

function removeDlg(id) {
   console.debug(`removeDlg(${id})called`);
   id++;
   const row = e_fragentable.rows[id];
   e_removedlg_frageid.innerText = row.cells[0].innerText;
   e_removedlg.showModal();
}

function refresh() {
   e_loading.hidden = !(e_fragentable.hidden = true);

   fetch('/api/quizfragen')
      .then(res => res.json())
      .then((res) => {
         console.log(res);
         tbl_Fragen(res);
         e_loading.hidden = !(e_fragentable.hidden = false);
      })
      .catch((err) => { console.error(err) });
}

refresh();