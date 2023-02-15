
let fromValyuta = '';
let toValyuta = '';

async function fetchMetod(btn, fromValyuta, toValyuta, input, out, input_req_sm, input_res_sm) {
    console.log("fromValyuta --  ", fromValyuta)
    console.log("toValyuta --  ", toValyuta)
    const res = await fetch(`https://api.exchangerate.host/latest?base=${fromValyuta}&symbols=${toValyuta}`);
    const data = await res.json();
    let kurs = parseFloat(data.rates[toValyuta]);
    let kursR = 1 / kurs
    const amount = parseFloat(input.value.length === 0 ? "1" : input.value)
    let result = amount * kurs;
    out.value = result.toFixed(2);
    console.log(data.rates[toValyuta]);
    input_req_sm.innerHTML = "1 " + fromValyuta + " = " + kurs.toFixed(2) + " " + toValyuta;
    input_res_sm.innerHTML = "1 " + toValyuta + " = " + kursR.toFixed(2) + " " + fromValyuta;
    console.log("fromValyuta  ", fromValyuta)
    console.log("toValyuta  ", toValyuta)
}

function disableEnabeleBtn(btn, value, active) {
    btn.forEach(bt => {
        bt.disabled = value
        if (active === 1) {
            bt.classList.remove('active')
        }
    })

}


function setValyuta(btn, input, out, input_req_sm, input_res_sm) {
    if (fromValyuta.length === 0) {
        fromValyuta = btn.value;

    } else {
        toValyuta = btn.value;
        fetchMetod(btn, fromValyuta, toValyuta, input, out, input_req_sm, input_res_sm)
        fromValyuta = btn.value;

    }
}

function onClickBtn(event) {
    const btn = event.target
    const input = document.querySelector("#input-req");
    const out = document.querySelector("#input-res");
    const btn_out = document.querySelectorAll(".btn-out");
    const btn_in = document.querySelectorAll(".btn-in");
    let input_req_sm = document.querySelector("#input-req-sm");
    let input_res_sm = document.querySelector("#input-res-sm");
    if (event.target.classList.contains('btn-out')) {
        btn.classList.add("active")
        setValyuta(btn, input, out, input_req_sm, input_res_sm);
        disableEnabeleBtn(btn_in, false, 0);
        disableEnabeleBtn(btn_out, true, 1);
    }
    else if (event.target.classList.contains('btn-in')) {

        setValyuta(btn, out, input, input_res_sm, input_req_sm);
        disableEnabeleBtn(btn_in, true, 1);
        disableEnabeleBtn(btn_out, false, 0);
    }

}

