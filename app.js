// https://www.omnicalculator.com/finance/gdp-deflator

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const GDPdeflatorRadio = document.getElementById('GDPdeflatorRadio');
const nominalGDPRadio = document.getElementById('nominalGDPRadio');
const realGDPRadio = document.getElementById('realGDPRadio');

let GDPdeflator;
let nominalGDP = v1;
let realGDP = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

GDPdeflatorRadio.addEventListener('click', function() {
  variable1.textContent = 'Nominal GDP';
  variable2.textContent = 'Real GDP';
  nominalGDP = v1;
  realGDP = v2;
  result.textContent = '';
});

nominalGDPRadio.addEventListener('click', function() {
  variable1.textContent = 'GDP deflator';
  variable2.textContent = 'Real GDP';
  GDPdeflator = v1;
  realGDP = v2;
  result.textContent = '';
});

realGDPRadio.addEventListener('click', function() {
  variable1.textContent = 'GDP deflator';
  variable2.textContent = 'Nominal GDP';
  GDPdeflator = v1;
  nominalGDP = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(GDPdeflatorRadio.checked)
    result.textContent = `GDP deflator = ${computeGDPdeflator().toFixed(2)}`;

  else if(nominalGDPRadio.checked)
    result.textContent = `Nominal GDP = ${computenominalGDP().toFixed(2)}`;

  else if(realGDPRadio.checked)
    result.textContent = `Real GDP = ${computerealGDP().toFixed(2)}`;
})

// calculation

function computeGDPdeflator() {
  return (Number(nominalGDP.value) / Number(realGDP.value)) * 100;
}

function computenominalGDP() {
  return (Number(GDPdeflator.value) / 100) * Number(realGDP.value);
}

function computerealGDP() {
  return Number(nominalGDP.value) / (Number(GDPdeflator.value) / 100);
}