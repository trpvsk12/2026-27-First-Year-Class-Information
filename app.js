const classes = [
  {dept:"CSE", class:"CSE A", incharge:"Dr. D. Saranya", phone:"9791567317", block:"Block 2", floor:"3rd Floor", room:"LH-07"},
  {dept:"CSE", class:"CSE B", incharge:"Mr. M. Vimal Raj Jayaharan", phone:"8220868852", block:"Block 2", floor:"3rd Floor", room:"LH-08"},
  {dept:"CSE", class:"CSE C", incharge:"Dr. S. Manicka Vinayagam", phone:"7904681908", block:"Block 2", floor:"3rd Floor", room:"LH-09"},
  {dept:"CSE", class:"CSE D", incharge:"Dr. N. Jakeer", phone:"9786882343", block:"Block 2", floor:"3rd Floor", room:"LH-10"},
  {dept:"CSE", class:"CSE E", incharge:"Dr. P. Selvaganapathi", phone:"8667004104", block:"Block 2", floor:"3rd Floor", room:"LH-11"},

  {dept:"IT", class:"IT A", incharge:"Mrs. S. Devigayathri", phone:"7598016075", block:"Block 2", floor:"3rd Floor", room:"LH-12"},
  {dept:"IT", class:"IT B", incharge:"Dr. N. Rajeswari", phone:"9003972105", block:"Block 2", floor:"3rd Floor", room:"LH-13"},

  {dept:"EEE", class:"EEE", incharge:"Dr. Bansura Banu", phone:"7010325792", block:"Block 2", floor:"3rd Floor", room:"LH-14"},
  {dept:"CIVIL", class:"CIVIL", incharge:"Dr. M. Bhuvaneshwari", phone:"9751513152", block:"Block 2", floor:"3rd Floor", room:"LH-15"},

  {dept:"MECH", class:"MECH A", incharge:"Dr. S. Visweswaran", phone:"9384226598", block:"Block 2", floor:"3rd Floor", room:"LH-16"},
  {dept:"MECH", class:"MECH B", incharge:"Dr. R. Pradeeban", phone:"7904070295", block:"Block 2", floor:"3rd Floor", room:"LH-17"},

  {dept:"AI & DS", class:"AI & DS A", incharge:"Mr. P. Ravi Kumar", phone:"6369722362", block:"Block 1", floor:"6th Floor", room:"LH-57"},
  {dept:"AI & DS", class:"AI & DS B", incharge:"Dr. A. Rajina Banu", phone:"9176953535", block:"Block 1", floor:"6th Floor", room:"LH-58"},
  {dept:"AI & DS", class:"AI & DS C", incharge:"Dr. S. R. Karpagam", phone:"7538879314", block:"Block 1", floor:"6th Floor", room:"LH-59"},

  {dept:"ECE", class:"ECE A", incharge:"Mr. M. Sundareshwaran", phone:"7373574531", block:"Block 1", floor:"6th Floor", room:"LH-61"},
  {dept:"ECE", class:"ECE B", incharge:"Dr. S. Sridevi", phone:"9629647557", block:"Block 1", floor:"6th Floor", room:"LH-62"},
  {dept:"ECE", class:"ECE C", incharge:"Dr. S. Martin Raja", phone:"9787809024", block:"Block 1", floor:"6th Floor", room:"LH-54"},

  {dept:"AIML", class:"AIML", incharge:"Ms. S. Varshini", phone:"8667041728", block:"Not Available", floor:"Not Available", room:"Not Available"}
];

const cards = document.getElementById("cards");
const summary = document.getElementById("summary");
const search = document.getElementById("search");

function render(data) {
  summary.textContent = `${data.length} Class${data.length !== 1 ? "es" : ""} Found`;
  cards.innerHTML = data.map(c => `
    <article class="card">
      <h2>${c.class}</h2>
      <div class="row"><span class="label">Department</span><span class="value">${c.dept}</span></div>
      <div class="row"><span class="label">Class Incharge</span><span class="value">${c.incharge}</span></div>
      <div class="row"><span class="label">Phone</span><a class="value phone" href="tel:${c.phone}">${c.phone}</a></div>
      <div class="row"><span class="label">Block</span><span class="value">${c.block}</span></div>
      <div class="row"><span class="label">Floor</span><span class="value">${c.floor}</span></div>
      <div class="row"><span class="label">Classroom</span><span class="value">${c.room}</span></div>
    </article>
  `).join("");
}

search.addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  render(classes.filter(c => Object.values(c).join(" ").toLowerCase().includes(q)));
});

render(classes);
