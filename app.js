
//Global variables.
var productsArray = []; //Holds all product objects created by productCreator constructor.
var productDisplayQue = []; //Holds 6 unique integers generated by reloadDisplayQue function.
var productDisplay = document.getElementById("productDisplay"); //Parent element for displayed products.
var clickCounter = 0; //Records the amount of votes made by the participant. 


function productCreator(img, name){//Creates each prodcut instance and adds to them to productsArray.
    this.img = img;
    this.shown = 0;
    this.voted = 0;
    this.name = name;
    productsArray.push(this); 
    console.log(this.name + " product has been created");
    console.log(productsArray);
};

function reloadDisplayQue(){//Creates 6 unique random numbers and adds them to productDisplayQue array. 
  while(productDisplayQue.length <  6 ){
  var randomIndex  = Math.floor(Math.random() * productsArray.length );
  while(productDisplayQue.includes(randomIndex )){
    randomIndex  = Math.floor(Math.random() * productsArray.length );
  }
  productDisplayQue.push(randomIndex );
  };
}

//Function that will select 3 product instances from productsArray at indices corresponding
//to the first 3 indices productDisplayQue adding their corresponding age to the DOM.
function renderToDOM(){
  for(i = 0; i < 3; i++){//Creates 3 image elements containing product pictures and renders them to the DOM.
  var product = document.createElement("img");
  product.setAttribute("src", productsArray[productDisplayQue[i]].img);
  product.setAttribute("class", "product");
  product.setAttribute("id", productsArray[productDisplayQue[i]].name);
  productDisplay.appendChild(product);
  }
  for(i = 0; i < 3; i++ ){//Raises show prperty of productDisplayed productsArray by 1. 
    productsArray[productDisplayQue[i]]['shown'] = productsArray[productDisplayQue[i]].shown + 1;
  }
  productDisplay.addEventListener("click", vote);
}

function vote(){//Raises vote property of whatever object corresponds to the img clicked.
  var clicked = event.target
  console.log(clicked);
  for (i = 0; i < productsArray.length; i ++){//finds object assciated with img.
    if(productsArray[i].name === clicked.id){//Once object is found voted property is increased by 1.
      productsArray[i]['voted'] = productsArray[i].voted +1
      console.log(productsArray[i].name + " votes: " + productsArray[i].voted);
     
    }
  }
  clickCounter += 1;
  if(clickCounter < 25){nextproductsArray();} else { createChart();} 
}

function nextproductsArray(){//Removes first three used indices stored in productDisplayQue then removes the 3 productsArray productDisplayed. 
  console.log('productDisplayQue' + productDisplayQue);
  productDisplayQue.splice(0,3);
  for(i = 0; i < 3; i++ ){
    var child = document.getElementsByClassName("product")[0];
    productDisplay.removeChild(child);
  }
  reloadDisplayQue();
renderToDOM();
console.log("clickCounter at: " + clickCounter);
};


//Creating all object instances 
var bag = new productCreator("img/bag.jpg", "bag");
var banana = new productCreator("img/banana.jpg", "banana");
var bathroom = new productCreator("img/bathroom.jpg", "bathroom");
var boots = new productCreator("img/boots.jpg", "boots");
var breakfast = new productCreator("img/breakfast.jpg", "breakfast");
var bubblegum = new productCreator("img/bubblegum.jpg", "bubblegum");
var chair = new productCreator("img/chair.jpg", "chair");
var cthulhu = new productCreator("img/cthulhu.jpg", "cthulhu");
var dogduck = new productCreator("img/dog-duck.jpg", "dog duck");
var dragon = new productCreator("img/dragon.jpg", "dragon");
var pen = new productCreator("img/pen.jpg", "pen");
var petSweep = new productCreator("img/pet-sweep.jpg", "pet-sweep");
var scissors = new productCreator("img/scissors.jpg", "scissors");
var shark = new productCreator("img/shark.jpg", "shark");
var sweep = new productCreator("img/sweep.png", "sweep");
var tauntaun = new productCreator("img/tauntaun.jpg", "tauntaun");
var unicorn = new productCreator("img/unicorn.jpg", "unicorn");
var usb = new productCreator("img/usb.gif", "usb");
var waterCan = new productCreator("img/water-can.jpg", "water-can");
var wineGlass = new productCreator("img/wine-glass.jpg", "wineGlass");
console.log(productDisplayQue);
reloadDisplayQue();
renderToDOM();

//Creates chart showing items vote total compared with the shown total. 
function createChart() {
var chartCanvas = document.getElementById('graph');
var myChart = new Chart (chartCanvas, {
  type: 'bar',
  data: {
    labels: ['bag','banana','bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dogduck', 'dragon',
     'pen', 'pet sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water can', 'wine glass'],
    datasets: [{
      label: 'Votes',
      data: [bag.voted, banana.voted, bathroom.voted, boots.voted, breakfast.voted, bubblegum.voted, chair.voted,
      cthulhu.voted, dogduck.voted, dragon.voted, pen.voted, petSweep.voted, scissors.voted, shark.voted, sweep.voted,
      tauntaun.voted, unicorn.voted, usb.voted, waterCan.voted, wineGlass.voted],
      backgroundColor: 'rgb(10,181,61)'
    },
    {
      label: 'shown',
      data: [bag.shown, banana.shown, bathroom.shown, boots.shown, breakfast.shown, bubblegum.shown, chair.shown,
      cthulhu.shown, dogduck.shown, dragon.shown, pen.shown, petSweep.shown, scissors.shown, shark.shown, sweep.shown,
      tauntaun.shown, unicorn.shown, usb.shown, waterCan.shown, wineGlass.shown],
      backgroundColor: 'rgba(10,118,181, 0.4)'
    }]
  },
  options: {
        title: {
            productDisplay: true,
            text: 'Vote Total'
        }
},
});
}
