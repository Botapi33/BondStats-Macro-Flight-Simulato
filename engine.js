/* ==========================================
   BondStats Macro Flight Simulator
   engine.js
========================================== */

function calculateSystemStress(){

let inflation =
parseFloat(
document.getElementById("inflationSlider").value
);

let rates =
parseFloat(
document.getElementById("rateSlider").value
);

let oil =
parseFloat(
document.getElementById("oilSlider").value
);

let deficit =
parseFloat(
document.getElementById("deficitSlider").value
);

let qe =
parseFloat(
document.getElementById("qeSlider").value
);



/* =========================
   SYSTEM STRESS SCORE
========================= */

let stress =

inflation * 6 +

rates * 0.08 +

oil * 0.35 +

deficit * 2 -

qe * 0.2;

stress = Math.max(
0,
Math.min(
100,
Math.round(stress)
)
);



document.getElementById(
"systemStress"
).innerText = stress;



/* =========================
   BOND MARKET
========================= */

let bondState = "Stable";

if(stress > 35)
bondState = "Moderate";

if(stress > 60)
bondState = "Elevated";

if(stress > 80)
bondState = "High";


document.getElementById(
"bondStress"
).innerText = bondState;



/* =========================
   BANKING SYSTEM
========================= */

let bankState = "Stable";

if(rates > 100)
bankState = "Watch";

if(rates > 200)
bankState = "Pressure";

if(rates > 300)
bankState = "Stress";


document.getElementById(
"bankStress"
).innerText = bankState;



/* =========================
   POLICY BIAS
========================= */

let policy = "Neutral";

if(stress > 65)
policy = "Easing";

if(inflation > 5)
policy = "Tightening";


document.getElementById(
"policyBias"
).innerText = policy;



/* =========================
   MODULE BARS
========================= */

document.getElementById(
"bondBar"
).style.width =
Math.min(
stress,
100
) + "%";


document.getElementById(
"bankBar"
).style.width =
Math.min(
rates/3,
100
) + "%";


document.getElementById(
"creditBar"
).style.width =
Math.min(
stress*0.9,
100
) + "%";


document.getElementById(
"growthBar"
).style.width =
Math.max(
100-stress,
10
) + "%";



/* =========================
   TEXT OUTPUT
========================= */

document.getElementById(
"bondText"
).innerText =

"Bond market stress: " +
bondState +
". Yield volatility increases as financial conditions tighten.";


document.getElementById(
"bankText"
).innerText =

"Banking conditions: " +
bankState +
". Duration losses and funding pressures rise.";


document.getElementById(
"creditText"
).innerText =

"Credit conditions tighten as rates and risk premiums increase.";


document.getElementById(
"growthText"
).innerText =

stress > 70 ?

"Growth outlook deteriorates. Recession risks rise."

:

"Growth remains resilient despite tighter conditions.";



/* =========================
   INSIGHT
========================= */

let insight =

"Moderate stress across the financial system.";

if(stress > 40){

insight =

"Bond markets reprice, financial conditions tighten and credit becomes less available.";

}

if(stress > 70){

insight =

"High stress scenario. Banking pressure, tighter credit and slowing growth reinforce each other.";

}

document.getElementById(
"insight"
).innerText = insight;



/* =========================
   NETWORK UPDATE
========================= */

if(typeof drawNetwork === "function"){

drawNetwork(stress);

}

}



/* ==========================================
   EVENT LISTENERS
========================================== */

document
.getElementById("inflationSlider")
.addEventListener(
"input",
calculateSystemStress
);

document
.getElementById("rateSlider")
.addEventListener(
"input",
calculateSystemStress
);

document
.getElementById("oilSlider")
.addEventListener(
"input",
calculateSystemStress
);

document
.getElementById("deficitSlider")
.addEventListener(
"input",
calculateSystemStress
);

document
.getElementById("qeSlider")
.addEventListener(
"input",
calculateSystemStress
);



/* ==========================================
   INITIAL LOAD
========================================== */

calculateSystemStress();
