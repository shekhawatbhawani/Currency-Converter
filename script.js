let select1 = document.querySelector(".select_1")
let select2 = document.querySelector(".select_2")

let input1 = document.querySelector(".input_1")
let input2 = document.querySelector(".input_2")

let body = document.querySelector("body")

let p = document.querySelector("p")
 
console.log(select1.value);
console.log(select2.value);

let USD = (number) => {
  let INR = number * 83;
  let AUD = number * 1.5;
  let CAD = number * 1.36;
  let EUR = number * 0.92;
  let GBP = number * 0.82;
  let JPY = number * 150;
  let USD = number * 1;

  return { INR, AUD, CAD, EUR, GBP, JPY, USD };
};

let AUD = (number) => {
  let INR = number * 53;
  let USD = number * 0.64;
  let CAD = number * 0.88;
  let EUR = number * 0.59;
  let GBP = number * 0.48;
  let JPY = number * 90;
  let AUD = number * 1;
  return { INR, AUD, CAD, EUR, GBP, JPY, USD };
};

let CAD = (number) => {
  let INR = number * 60;
  let USD = number * 0.74;
  let AUD = number * 1.14;
  let EUR = number * 0.66;
  let GBP = number * 0.58;
  let JPY = number * 102;
  let CAD = number * 1;
  return { INR, AUD, CAD, EUR, GBP, JPY, USD };
};

let EUR = (number) => {
  let INR = number * 90;
  let USD = number * 1.07;
  let CAD = number * 1.63;
  let GBP = number * 0.87;
  let JPY = number * 160;
  let AUD = number * 1.55;
  let EUR = number * 1;

  return { INR, AUD, CAD, EUR, GBP, JPY, USD };
};

let GBP = (number) => {
  let INR = number * 102;
  let AUD = number * 1.65;
  let CAD = number * 1.96;
  let EUR = number * 1.75;
  let GBP = number * 1;
  let JPY = number * 182;
  let USD = number * 1.24;
  return { INR, AUD, CAD, EUR, GBP, JPY, USD };
};

let JPY = (number) => {
  let INR = number * 0.56;
  let AUD = number * 0.01;
  let CAD = number * 0.0098;
  let EUR = number * 0.0063;
  let GBP = number * 0.0054;
  let USD = number * 0.0067;
  let JPY = number * 1;
  
  return { INR, AUD, CAD, EUR, GBP, JPY, USD };
};

let INR = (number) => {
  let AUD = number * 0.019;
  let CAD = number * 0.017;
  let EUR = number * 0.011;
  let GBP = number * 0.0098;
  let JPY = number * 1.78;
  let USD = number * 0.012;
  let INR = number * 1;

  return { INR, AUD, CAD, EUR, GBP, JPY, USD };
};



body.addEventListener("click",()=>{
  let functions = {USD,AUD,CAD,EUR,GBP,JPY,INR}

  let currency = functions[select1.value]

  if (currency) {
    let ans = currency(parseFloat(input1.value))
    console.log(ans);
  
    let rate = 0.00
   
      if (select2.value in ans) {
          rate = ans[select2.value]
      }
    
      p.innerText =` 1 ${select1.value} = 84.315 ${select2.value}`
    input2.value = rate
   }
  
})