/* ==========================================
   BondStats Macro Flight Simulator
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

/* =========================
   ELEMENTS
========================= */

const inflationSlider = document.getElementById("inflationSlider");
const rateSlider = document.getElementById("rateSlider");
const oilSlider = document.getElementById("oilSlider");
const deficitSlider = document.getElementById("deficitSlider");
const qeSlider = document.getElementById("qeSlider");

const inflationValue = document.getElementById("inflationValue");
const rateValue = document.getElementById("rateValue");
const oilValue = document.getElementById("oilValue");
const deficitValue = document.getElementById("deficitValue");
const qeValue = document.getElementById("qeValue");


/* =========================
   UPDATE LABELS
========================= */

function updateLabels(){

inflationValue.innerText =
inflationSlider.value + "%";

rateValue.innerText =
rateSlider.value + " bp";

oilValue.innerText =
oilSlider.value + "%";

deficitValue.innerText =
deficitSlider.value + "%";


/* QE / QT */

if(qeSlider.value > 0){

qeValue.innerText = "QE";

}
else if(qeSlider.value < 0){

qeValue.innerText = "QT";

}
else{

qeValue.innerText = "Neutral";

}

}


/* =========================
   UPDATE ENGINE
========================= */

function updateAll(){

updateLabels();

if(typeof calculateSystemStress === "function"){

calculateSystemStress();

}

}


/* =========================
   EVENT LISTENERS
========================= */

inflationSlider.addEventListener(
"input",
updateAll
);

rateSlider.addEventListener(
"input",
updateAll
);

oilSlider.addEventListener(
"input",
updateAll
);

deficitSlider.addEventListener(
"input",
updateAll
);

qeSlider.addEventListener(
"input",
updateAll
);


/* =========================
   INITIAL LOAD
========================= */

updateAll();

});


/* ==========================================
   FUTURE FEATURES (V2)
========================================== */

/*

Cockpit Warning System

function playWarning(){

}

function triggerCrisisMode(){

drawCrisisNetwork();

}

Historical Replay

1970s
2008
COVID
2022

Sound Effects

Gauge Animation

Heatmap

Central Bank Mode

*/
