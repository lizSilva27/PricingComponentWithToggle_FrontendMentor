const toogle = document.getElementById('btnCheckbook');
const pricePlanBasic = document.querySelector('.mainContainer__basicPlan__txtPricePlan');
const pricePlanProfessional = document.querySelector('.mainContainer__professionalPlan__txtPricePlan');
const pricePlanMaster = document.querySelector('.mainContainer__masterPlan__txtPricePlan');

const annuallyText = document.querySelector('.mainContainer__toogle__text.annually');
const monthlyText = document.querySelector('.mainContainer__toogle__text.monthly');

const prices = {
  on: {
    basic: "$19.99",
    professional: "$24.99",
    master: "$39.99",
  },
  off: {
    basic: "$199.99",
    professional: "$249.99",
    master: "$399.99",
  },
};

// const priceOnBasic = "$19.99";
// const priceOffBasic = "$199.99";

// const priceOnProfessional = "$24.99";
// const priceOffProfessional = "$249.99";

// const priceOnMaster = "$39.99";
// const priceOffMaster = "$399.99";

toogle.addEventListener('change', (event) => {

  const state = event.target.checked ? 'on' : 'off';

  pricePlanBasic.textContent = prices[state].basic;
  pricePlanProfessional.textContent = prices[state].professional;
  pricePlanMaster.textContent = prices[state].master;
  if(state === 'on') {
    annuallyText.style.color = '#ccc';
    monthlyText.style.color = "#000";
  } else {
    annuallyText.style.color = '#000';
    monthlyText.style.color = "#ccc";
  }
  // if (event.target.checked) {
  //   pricePlanDinamicBasic.textContent = priceOnBasic;
  //   pricePlanDinamicProfessional.textContent = priceOnProfessional;
  //   pricePlanDinamicMaster.textContent = priceOnMaster ;
  //   // console.log('Switch activado');
  // } else {
  //   pricePlanDinamicBasic.textContent = priceOffBasic;
  //   pricePlanDinamicProfessional.textContent = priceOffProfessional;
  //   pricePlanDinamicMaster.textContent = priceOffMaster ;
  //   // console.log('Switch desactivado');
  // }
});