const totalCost = document.querySelector('#total-cost');
const initalFee = document.querySelector('#an-initial-fee');
const creditTerm = document.querySelector('#credit-term');

const totalCostRange = document.querySelector('#total-cost-range');
const initalFeeRange = document.querySelector('#an-initial-fee-range');
const creditTermRange = document.querySelector('#credit-term-range');

const totalCredit = document.querySelector('#amount-of-credit');
const monthlyPayment = document.querySelector('#monthly-payment');
const recIncome = document.querySelector('#recommended-income');

const ranges = document.querySelectorAll('.input-range');
const buttonsBanks = document.querySelectorAll('.bank');

const setValue = () => {
  totalCost.value = totalCostRange.value;
  initalFee.value = initalFeeRange.value;
  creditTerm.value = creditTermRange.value;
};

setValue();

const banks = [
  {
    name: 'privat',
    percents: 8.5
  },
  {
    name: 'oschad',
    percents: 7.8
  },
  {
    name: 'ukrgaz',
    percents: 8.1
  }
];

let currentPercent = banks[0].percents;

for (let i = 0; i < buttonsBanks.length; i++) {
  buttonsBanks[i].addEventListener("click", () => {
    for (let i = 0; i < buttonsBanks.length; i++) {
      buttonsBanks[i].classList.remove('active');
    }

    buttonsBanks[i].classList.add('active');
  });
}

