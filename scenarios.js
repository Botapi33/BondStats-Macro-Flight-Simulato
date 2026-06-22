/* ==========================================
   BondStats Macro Flight Simulator
   scenarios.js
========================================== */

function setScenario(values){

document.getElementById("inflationSlider").value = values.inflation;
document.getElementById("rateSlider").value = values.rates;
document.getElementById("oilSlider").value = values.oil;
document.getElementById("deficitSlider").value = values.deficit;
document.getElementById("qeSlider").value = values.qe;

calculateSystemStress();

}



/* =========================
   SCENARIO PRESETS
========================= */

document.getElementById("inflationScenario").addEventListener("click", function(){

setScenario({
inflation: 7,
rates: 250,
oil: 60,
deficit: 6,
qe: -40
});

});


document.getElementById("volckerScenario").addEventListener("click", function(){

setScenario({
inflation: 8,
rates: 400,
oil: 30,
deficit: 4,
qe: -80
});

});


document.getElementById("gfcScenario").addEventListener("click", function(){

setScenario({
inflation: 1,
rates: 100,
oil: -20,
deficit: 10,
qe: 90
});

});


document.getElementById("covidScenario").addEventListener("click", function(){

setScenario({
inflation: 2,
rates: 0,
oil: -30,
deficit: 15,
qe: 100
});

});


document.getElementById("inflation2022Scenario").addEventListener("click", function(){

setScenario({
inflation: 6,
rates: 300,
oil: 50,
deficit: 7,
qe: -60
});

});
