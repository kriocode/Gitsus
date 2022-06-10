const b = globalThis.document.body;
b.innerHTML += `<h1>Tere Tulemast Lahedad Mehed</h1>`;
b.innerHTML += `<p>sussy da babay i like da nuts ad bbbbbbbb bbq bscon burger</p>`;
b.innerHTML += `<output>${ 1 + 1}</output><br>`;
b.innerHTML += `<output>${ 1 / 0}</output><br>`;
const arv = 4 + 2
b.innerHTML += `<output>${ arv }</output><br>`;
for (let i = 0; i < 10; i++) {
    b.innerHTML += `<output>${ arv / i}</output><br>`
}
const arvud = [1, 2, 3, 4, 5, 6];
for (const arvuke of arvud){
    b.innerHTML += arvuke;
}
let muutuja = 5
muutuja = 789
b.innerHTML += muutuja
b.innerHTML += `<br>`;
b.innerHTML += Math.PI
const h1 = b.querySelector(`h1`);
h1.style= `background-color: lightgreen`;
const outs = b.querySelectorAll(`output`)
for(const out of outs) 
    if(!out.innerHTML.includes(`Infinity`)){
    out.innerHTML += `cm`;
 }


    

