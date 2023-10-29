"use strict";



window.onload = init;


function init() {
    const calculateCost = document.getElementById("calculateCost");
    calculateCost.onclick = calculateCostClicked;

}

function getRoomRate(checkInDate, roomType) {
    
    const roomRates = {
        queenRoom: {junAug: 250, restOfYear: 150},
        kingRoom: {junAug: 250, restOfYear: 150},
        twoBdSuite: {JunAug: 350, restOfYear:210},
    };

    const checkInMonth = new Date(checkInDate).getMonth() + 1;

    let season;
    if (checkInMonth >= 6 && checkInMonth <= 8) {
            season = 'junAug';
    } else {
            season = 'restOfYear';
    }

    return roomRates[roomType][season];
}

function calculateCostClicked() {
// Initial Intake
    const inputName = document.getElementById('inputName').value;
    const checkInDate = document.getElementById('checkInDate').value;
    const inputNumNights = document.getElementById('inputNumNights');
    let numNights = Number(inputNumNights.value);

    

// Number of Guests
    let roomType;
    const inputNumAdults = document.getElementById('inputNumAdults').value;
    const inputNumChildren = document.getElementById('inputNumChildren').value;

    if (roomType == 'queenRoom') {
        if (Number(inputNumAdults) + Number(inputNumChildren) > 5) { 
            alert('The room you selected will not hold your party');
            return;
        }
    } else if (roomType == 'kingRoom') {
        if (Number(inputNumAdults) + Number(inputNumChildren) > 2) { 
            alert('The room you selected will not hold your party');
            return; 
        }
    } else if (roomType == 'twoBdSuite') {
        if (Number(inputNumAdults) + Number(inputNumChildren) > 6) {
            alert('The room you selected will not hold your party');
            return;
        }
    }
   
// Room Type
    const queenRoom = document.getElementById('queenRoomRadio');
    const kingRoom = document.getElementById('kingRoomRadio');
    const twoBdSuite = document.getElementById('twoBdSuiteRadio');

    if (queenRoom.checked) {
        roomType = 'queenRoom';
    } else if (kingRoom.checked) {
        roomType = 'kingRoom';
    } else if (twoBdSuite.checked) {
        roomType = 'twoBdSuite';
    }

// Calculations (Discount + Tax)
    const roomRate = getRoomRate(checkInDate, roomType);
    
    const noDiscount = document.getElementById('noDiscount');
    const seniorDiscount = document.getElementById('seniorDiscount');
    const militaryDiscount = document.getElementById('militaryDiscount');
    
    let discountedRoomCost;
    if (noDiscount.checked) {
        discountedRoomCost = 0;
    } 
    else if (seniorDiscount.checked) {
        discountedRoomCost = .10;
    } 
    else if (militaryDiscount.checked) {
        discountedRoomCost = .20;
    }
    
    const standardRoomCost = roomRate * numNights;
    const discount = standardRoomCost * discountedRoomCost;
    const appliedDiscount = standardRoomCost - discount;
    const tax = appliedDiscount * .12;
    const totalCost = appliedDiscount + tax;

    const outputStandardTotalCost = document.getElementById('outputStandardTotalCost');
    outputStandardTotalCost.innerHTML = "$" + standardRoomCost.toFixed(2);

    const outputAppliedDiscount = document.getElementById('outputAppliedDiscount');
    outputAppliedDiscount.innerHTML = "$" + appliedDiscount.toFixed(2);

    const outputTax = document.getElementById('outputTax');
    outputTax.innerHTML = "$" + tax.toFixed(2);

    const outputTotalCost = document.getElementById('outputTotalCost');
    outputTotalCost.innerHTML = "$" + totalCost.toFixed(2);

// Confirmation Number
    const checkInDateConfirmation = new Date (checkInDate);
    const month = checkInDateConfirmation.getMonth() + 1;
    const year = checkInDateConfirmation.getFullYear();
    const confirmationNumber = inputName.substr(0, 3) + "-" + month + year + "-" + numNights + ":" + inputNumAdults + ":" + inputNumChildren;
    document.getElementById('confirmationNumber').innerHTML = confirmationNumber;
    
}