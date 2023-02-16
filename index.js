
let fromValyuta = 'AZN';
let toValyuta = 'USD';
let menu = true;
const input = document.querySelector("#input-req");
const out = document.querySelector("#input-res");
const input_title = document.querySelector("#input-req");
const out_title = document.querySelector("#input-res");
const login = document.querySelector(".login");
const title_login = document.querySelector(".title-login");
const toggle = document.querySelector(".toggle");
async function fetchMetod(btn, fromValyuta, toValyuta) {
  
    const res = await fetch(`https://api.exchangerate.host/latest?base=${fromValyuta}&symbols=${toValyuta}`);
    const data = await res.json();
    let kurs = parseFloat(data.rates[toValyuta]);
    let kursR = 1 / kurs
    const amount = parseFloat(input.value)
    let result = amount * kurs;
    out.value = result.toFixed(2);
    console.log(data.rates[toValyuta]);
    input_title.innerHTML = "1 " + fromValyuta + " = " + kurs.toFixed(2) + " " + toValyuta;
    out_title.innerHTML = "1 " + toValyuta + " = " + kursR.toFixed(2) + " " + fromValyuta;
}

function onClickBtn(event) {
    const btn = event.target
    if (event.target.classList.contains('btn-out')) {
        btn.classList.add("active");
        toValyuta = event.target.value;
        document.querySelectorAll(".btn-out").forEach((item) => (item.value !== btn.value) ? item.classList.remove("active") : "") ;
        fetchMetod(btn, fromValyuta, toValyuta)
    }
    else if (event.target.classList.contains('btn-in')) {
        btn.classList.add("active");
        fromValyuta = event.target.value;
        document.querySelectorAll(".btn-in").forEach((item) => (item.value !== btn.value) ? item.classList.remove("active") : "");
        fetchMetod(btn, fromValyuta, toValyuta)
    }
}

toggle.addEventListener('click',(e) =>{
    e.preventDefault()
    if(menu && window.innerWidth < 880){
        title_login.classList.add("title-login-active")
        menu = false;
    }
    else if (window.innerWidth > 880){
        title_login.classList.remove("title-login-active");
    }
    else  {
        title_login.classList.remove("title-login-active");
        menu = true;
    }
    
})


