const btn_azn_in = document.querySelector("#btn-azn-in");
const btn_eur_in = document.querySelector("#btn-eur-in");
const btn_usd_in = document.querySelector("#btn-usd-in");
const btn_gbp_in = document.querySelector("#btn-gbp-in");
const btn_azn_out = document.querySelector("#btn-azn-out");
const btn_eur_out = document.querySelector("#btn-eur-out");
const btn_usd_out = document.querySelector("#btn-usd-out");
const btn_gbp_out = document.querySelector("#btn-gbp-out");
const input = document.querySelector("#input-req");
const out = document.querySelector("#input-res");
const btn_out = document.querySelectorAll(".btn-out");
const btn_in = document.querySelectorAll(".btn-in");
let fromValyuta = '';
let toValyuta = '';
async function fetchMetod(fromValyuta, toValyuta,amount,out) {
    const res = await fetch(`https://api.exchangerate.host/latest?base=${fromValyuta}&symbols=${toValyuta}`);
    const data = await res.json();
    const kurs = parseFloat(data.rates[toValyuta]);
    out.value = amount * kurs;
    console.log(data.rates[toValyuta]);
}

function disableEnabeleBtn(btn,value){
    btn.forEach(bt=>  bt.disabled = value)

}


function setValyuta(btn,amount,out){
    if (fromValyuta.length === 0) {
       
        fromValyuta = btn.value;
     
    } else {
        toValyuta = btn.value;
   
        fetchMetod(fromValyuta, toValyuta ,amount,out)

    }
}

btn_azn_in.addEventListener('click', (e) => {
    const amount = parseFloat(out.value)
    setValyuta(btn_azn_in,amount,input);
    disableEnabeleBtn(btn_in,true);
    disableEnabeleBtn(btn_out,false);

})
btn_eur_in.addEventListener('click', (e) => {
   
    const valyuta = btn_eur_in.value;
    const amount = parseFloat(out.value)
    setValyuta(btn_eur_in,amount,input);
    disableEnabeleBtn(btn_in,true);
    disableEnabeleBtn(btn_out,false);

})
btn_usd_in.addEventListener('click', (e) => {
  
    const amount = parseFloat(out.value)
    setValyuta(btn_azn_in,amount,input);
    disableEnabeleBtn(btn_in,true);
    disableEnabeleBtn(btn_out,false);

})
btn_gbp_in.addEventListener('click', (e) => {

    const amount = parseFloat(out.value)
    setValyuta(btn_gbp_in,amount,out);
    disableEnabeleBtn(btn_in,true);
    disableEnabeleBtn(btn_out,false);

})
btn_azn_out.addEventListener('click', (e) => {
  
    const amount = parseFloat(input.value)
    setValyuta(btn_azn_out,amount,out);
    disableEnabeleBtn(btn_in,false);
    disableEnabeleBtn(btn_out,true);

})
btn_eur_out.addEventListener('click', (e) => {
    const amount = parseFloat(input.value)
    setValyuta(btn_eur_out,amount,out);
    disableEnabeleBtn(btn_in,false);
    disableEnabeleBtn(btn_out,true);

})
btn_usd_out.addEventListener('click', (e) => {
    const amount = parseFloat(input.value);
    setValyuta(btn_usd_out,amount,out);
    disableEnabeleBtn(btn_in,false);
    disableEnabeleBtn(btn_out,true);

})
btn_gbp_out.addEventListener('click', (e) => {
    const amount = parseFloat(input.value);
    setValyuta(btn_gbp_out,amount,out);
    disableEnabeleBtn(btn_in,false);
    disableEnabeleBtn(btn_out,true);

})
