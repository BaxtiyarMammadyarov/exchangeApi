const btn_azn_in = document.querySelector("#btn-azn-in");
const btn_eur_in = document.querySelector("#btn-eur-in");
const btn_usd_in = document.querySelector("#btn-usd-in");
const btn_gbp_in = document.querySelector("#btn-gbp-in");
const btn_azn_out = document.querySelector("#btn-azn-out");
const btn_eur_out = document.querySelector("#btn-eur-out");
const btn_usd_out = document.querySelector("#btn-usd-out");
const btn_gbp_out = document.querySelector("#btn-gbp-out");

let fromValyuta = '';
let toValyuta = '';
async function fetchMetod(btn, fromValyuta, toValyuta, input, out) {
  
    const res = await fetch(`https://api.exchangerate.host/latest?base=${fromValyuta}&symbols=${toValyuta}`);
    const data = await res.json();
    const kurs = parseFloat(data.rates[toValyuta]);
    const amount = parseFloat(input.value)
    out.value = amount * kurs;
    console.log(data.rates[toValyuta]);

}

function disableEnabeleBtn(btn, value) {
    btn.forEach(bt => bt.disabled = value)

}


function setValyuta(btn, input, out) {
    if (fromValyuta.length === 0) {
        console.log("fromValyuta ", fromValyuta)
    
        fromValyuta = btn.value;
    } else {
        toValyuta = btn.value;
        console.log("toValyuta ", toValyuta)
        fetchMetod(btn, fromValyuta, toValyuta, input, out)

    }
}

function onClickBtn(event){
   const btn = event.target
   const input = document.querySelector("#input-req");
   const out = document.querySelector("#input-res");
const btn_out = document.querySelectorAll(".btn-out");
const btn_in = document.querySelectorAll(".btn-in");
  if(event.target.classList.contains('btn-out')){
     setValyuta(btn, input, out);
    disableEnabeleBtn(btn_in, false);
    disableEnabeleBtn(btn_out, true);
  }
  else if(event.target.classList.contains('btn-in')){
    setValyuta(btn, out, input);
    disableEnabeleBtn(btn_in, true);
    disableEnabeleBtn(btn_out, false);
  }

}

// btn_azn_in.addEventListener('click', (e) => {

//     setValyuta(btn_azn_in, out, input);
//     disableEnabeleBtn(btn_in, true);
//     disableEnabeleBtn(btn_out, false);

// })
// btn_eur_in.addEventListener('click', (e) => {

//     setValyuta(btn_azn_in, out, input);
//     disableEnabeleBtn(btn_in, true);
//     disableEnabeleBtn(btn_out, false);

// })
// btn_usd_in.addEventListener('click', (e) => {

//     setValyuta(btn_azn_in, out, input);
//     disableEnabeleBtn(btn_in, true);
//     disableEnabeleBtn(btn_out, false);

// })
// btn_gbp_in.addEventListener('click', (e) => {

//     setValyuta(btn_azn_in, out, input);
//     disableEnabeleBtn(btn_in, true);
//     disableEnabeleBtn(btn_out, false);

// })
// btn_azn_out.addEventListener('click', (e) => {

//     setValyuta(btn_azn_in, input, out);
//     disableEnabeleBtn(btn_in, false);
//     disableEnabeleBtn(btn_out, true);

// })
// btn_eur_out.addEventListener('click', (e) => {
//     setValyuta(btn_azn_in, input, out);
//     disableEnabeleBtn(btn_in, false);
//     disableEnabeleBtn(btn_out, true);

// })
// btn_usd_out.addEventListener('click', (e) => {
//     setValyuta(btn_azn_in, input, out);
//     disableEnabeleBtn(btn_in, false);
//     disableEnabeleBtn(btn_out, true);

// })
// btn_gbp_out.addEventListener('click', (e) => {
//     setValyuta(btn_azn_in, input, out);
//     disableEnabeleBtn(btn_in, false);
//     disableEnabeleBtn(btn_out, true);

// })
