"use strict";

window.onload = init;



function init() {
    const totalCostBtn = document.getElementById("totalCostBtn");
    totalCostBtn.onclick = totalCostBtnClicked;

}

function totalCostBtnClicked() {
    const inputNumOfDays = document.getElementById("inputNumOfDays");
    let numOfDays = Number(inputNumOfDays.value);

    
    // pg. 3-7
    
    const optionsPerDay = 0
    
    let tollTag = document.getElementById("tollTag").checked;
    if (tollTag) {
        optionsPerDay += 3.95;
    }
    
    let gps = document.getElementById("gps").checked;
    if (gps) {
        optionsPerDay += 2.95;
    }
    
    let roadsideAssistance = document.getElementById("roadsideAssistance").checked;
    if (roadsideAssistance) {
        optionsPerDay += 2.95;
    }
    
    // pg. 3-11
    
    const noRadioBtn = document.getElementById("noRadioBtn");
    const yesRadioBtn = document.getElementById("yesRadioBtn");
    
    let under25;
    if (noRadioBtn.checked) {
        under25 = 0;
    }
    else if (yesRadioBtn.checked) {
        under25 = .30;
    }
    
    let basicCarRentalRate = 29.99
    
    let carRentalValue = basicCarRentalRate * numOfDays;
    let optionsValue = optionsPerDay * numOfDays;
    let under25Value = carRentalValue * under25;
    
    let totalDueValue = carRentalValue + optionsValue + under25Value;
    
    const outputCarRental = document.getElementById("outputCarRental");
    const outputOptions = document.getElementById("outputOptions");
    const outputUnder25 = document.getElementById("outputUnder25");
    
    const outputTotalDue = document.getElementById("outputTotalDue");
    
    outputCarRental.innerHTML = "$" + carRentalValue.toFixed(2);
    outputOptions.innerHTML = "$" + optionsValue.toFixed(2);
    outputUnder25.innerHTML = "$" + under25Value.toFixed(2);
    
    outputTotalDue.innerHTML = "$" + totalDueValue.toFixed(2);
    
    document.getElementById('redCircle').style.display='block'; 

}

