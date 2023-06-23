"use strict";


const arr = [];
let total = 0;
const total_text = document.querySelector(`#total`);
const cart = document.querySelector(".cart-hidden");
function cartOpen(i) {
    const specific_division = document.querySelector(`#changing-div${i}`);
    const cost = document.querySelector(`#changing-number${i}`);
    const multipler = document.querySelector(`#pr${i}`);
    specific_division.style.display = "block";
    multipler.value = 1;
    console.log(multipler.value, typeof multipler.value);
    arr.push(i);
    if (cart.style.display === '' || cart.style.display === 'none' ) {
        cart.style.display = "block";
        total += Number(cost.textContent.slice(1))*Number(multipler.value);
    } 
    else {
        // console.log(cart.style.display, typeof cart.style.display);
        // console.log(arr);
        // console.log("Wtf1");
        if(i in arr){
            // console.log("Wtf2");
            arr.pop();
            // console.log(arr);
            alert("You have already selected this item!!");
        }
        else{
            // console.log("Wtf3");
            total += Number(cost.textContent.slice(1))*Number(multipler.value);
        }
    }
    // console.log(i, arr)
    total_text.textContent = `Your Total: ${total}`;
}

function closeButton(){
    const cart = document.querySelector(".cart-hidden");
    cart.style.display = "none";
    arr.forEach((e)=>{
        // console.log(e)
        document.querySelector(`#changing-div${e}`).style.display = "none";
    });
    while(arr.length>0){
        arr.pop();
    }
    // console.log(arr);
    total = 0;
    total_text.textContent = `Total: ${total}`;
    // console.log(cart)
}


function keepCheck(i){
    const cost = document.querySelector(`#changing-number${i}`);
    let multiplier = document.querySelector(`#pr${i}`);
    total -= cost.textContent.slice(1);
    total += Number(cost.textContent.slice(1))*(multiplier.value);
    total_text.textContent = `Your Total: ${total}`;
}