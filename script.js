let hourInputEl = document.getElementById("hoursInput");

let minutesInputEl = document.getElementById("minutesInput");

let timeSecondsPara = document.getElementById("timeInSeconds");

let errorMsgPara = document.getElementById("errorMsg");

let buttonEl = document.getElementById("convertBtn");


function displayPara(hourInputEl, minutesInputEl, timeSecondsPara, errorMsgPara) {
    let hoursVal = hourInputEl.value;
    let minutesVal = minutesInputEl.value;

    if (hoursVal === "") {
        errorMsgPara.textContent = "Please enter valid number of hours"
        timeSecondsPara.textContent = ""
    } else if (minutesVal === "") {
        errorMsgPara.textContent = "Please enter valid number of minutes"
        timeSecondsPara.textContent = ""
    } else {
        errorMsgPara.textContent = "";
        let condition = (parseInt(hoursVal) * 3600) + (parseInt(minutesVal) * 60);
        timeSecondsPara.textContent = condition;
    }



}


buttonEl.addEventListener("click", function(event) {
    displayPara(hourInputEl, minutesInputEl, timeSecondsPara, errorMsgPara);
});
