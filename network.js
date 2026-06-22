/* ==========================================
   BondStats Macro Flight Simulator
   network.js
========================================== */

function drawNetwork(stress){

let color = "#5fd887";

if(stress > 40){
color = "#f7c84b";
}

if(stress > 70){
color = "#ff5d5d";
}


document.getElementById("network").innerHTML = `

<svg viewBox="0 0 1200 280">

<!-- Lines -->

<line x1="140" y1="140"
      x2="320" y2="140"
      stroke="${color}"
      stroke-width="5"/>

<line x1="380" y1="140"
      x2="560" y2="140"
      stroke="${color}"
      stroke-width="5"/>

<line x1="620" y1="140"
      x2="800" y2="140"
      stroke="${color}"
      stroke-width="5"/>

<line x1="860" y1="140"
      x2="1040" y2="140"
      stroke="${color}"
      stroke-width="5"/>


<!-- Inflation -->

<circle cx="80"
        cy="140"
        r="55"
        fill="#06111f"
        stroke="${color}"
        stroke-width="4"/>

<text x="80"
      y="145"
      text-anchor="middle"
      fill="white"
      font-size="18">
Inflation
</text>



<!-- Rates -->

<circle cx="260"
        cy="140"
        r="55"
        fill="#06111f"
        stroke="${color}"
        stroke-width="4"/>

<text x="260"
      y="145"
      text-anchor="middle"
      fill="white"
      font-size="18">
Rates
</text>



<!-- Bonds -->

<circle cx="500"
        cy="140"
        r="55"
        fill="#06111f"
        stroke="${color}"
        stroke-width="4"/>

<text x="500"
      y="145"
      text-anchor="middle"
      fill="white"
      font-size="18">
Bonds
</text>



<!-- Banks -->

<circle cx="740"
        cy="140"
        r="55"
        fill="#06111f"
        stroke="${color}"
        stroke-width="4"/>

<text x="740"
      y="145"
      text-anchor="middle"
      fill="white"
      font-size="18">
Banks
</text>



<!-- Credit -->

<circle cx="980"
        cy="140"
        r="55"
        fill="#06111f"
        stroke="${color}"
        stroke-width="4"/>

<text x="980"
      y="145"
      text-anchor="middle"
      fill="white"
      font-size="18">
Credit
</text>



<!-- Growth -->

<circle cx="1140"
        cy="140"
        r="55"
        fill="#06111f"
        stroke="${color}"
        stroke-width="4"/>

<text x="1140"
      y="145"
      text-anchor="middle"
      fill="white"
      font-size="18">
Growth
</text>

</svg>

`;

}



/* ==========================================
   OPTIONAL CRISIS MODE
========================================== */

function drawCrisisNetwork(){

document.getElementById("network").innerHTML = `

<svg viewBox="0 0 1200 320">

<line x1="120" y1="160"
      x2="320" y2="160"
      stroke="#ff5d5d"
      stroke-width="6"/>

<line x1="380" y1="160"
      x2="580" y2="160"
      stroke="#ff5d5d"
      stroke-width="6"/>

<line x1="640" y1="160"
      x2="840" y2="160"
      stroke="#ff5d5d"
      stroke-width="6"/>

<line x1="900" y1="160"
      x2="1080" y2="160"
      stroke="#ff5d5d"
      stroke-width="6"/>

<text x="600"
      y="50"
      text-anchor="middle"
      fill="#ff5d5d"
      font-size="28">

Systemic Stress

</text>

</svg>

`;

}
