//Function to calculate fuel consumption

function computeConsumption() {
  var distance = document.getElementById('distance').value;
  var fuel = document.getElementById('fuel').value;
  var costper = document.getElementById('costper').value;
  var consumed = (fuel / (distance / 100)).toFixed(2);
  var kmByLiter = (distance / fuel).toFixed(2);
  var moneySpent = (fuel * costper).toFixed(2); // Stores money spent to fulfill distance
  var priceByKm = (moneySpent / distance).toFixed(2); // Stores km price
  var costper100 = (consumed * costper).toFixed(2);
  document.getElementById('consumption').innerHTML = 
  "Para conseguir percorrer 100Km precisa de " + consumed + " Litros, com o custo de R$ " + costper100 + 
  ". <br><br>Custo total de combustível para percorrer a distância inserida: R$ " + moneySpent + 
  " <br><br>O Consumo é " + kmByLiter + " Km/L <br><br> O preço de cada Km é de R$ " + priceByKm;
}

//Event listener

let btn = document.getElementById("btn");
btn.addEventListener('click', event => {
  computeConsumption();
});