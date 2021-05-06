var yourBudget = prompt("Ваш бюджет?");
var nameStore = prompt("Название вашего магазина?");
var mainList = {
  budget: yourBudget,
  nameStore: nameStore,
  shopGoods: [],
  employers: {

  },
  open
} 

mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));
mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));
mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));
// mainList.shopGoods.push() += prompt("Какой тип товаров будем продавать?");
// mainList.shopGoods.push() += prompt("Какой тип товаров будем продавать?");

alert("бюджет на 1 день: " + mainList.budget / 30); 

console.log(mainList);