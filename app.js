
//Global variables.
var allProducts = [];
var imgQue = [];
var display = document.getElementById("display");
var clicks = 0;

//Creates each prodcut instance. Adds to allProducts array.
function createProduct(img, name){
    this.img = img;
    this.shown = 0;
    this.voted = 0;
    this.name = name;
    allProducts.push(this); //Adds to product to array.
    console.log(this.name + " product has been created");
};

function reloadQue(){//Creates 6 unique random numbers and adds them to imgQue array. 
  while(imgQue.length <  6 ){
  var num = Math.floor(Math.random() * allProducts.length );
  while(imgQue.includes(num)){
    num = Math.floor(Math.random() * allProducts.length );
  }
  imgQue.push(num);
  };
}

//Function that will add 3 objects from allProducts array at indices corresponding to imgQue array to the DOM
//Displaying their image property.
function addToDOM(){
  var newProduct1 = document.createElement("img");
  var newProduct2 = document.createElement("img");
  var newProduct3 = document.createElement("img");
  newProduct1.setAttribute("src", allProducts[imgQue[0]].img);
  newProduct1.setAttribute("class", "product");
  newProduct1.setAttribute("id", allProducts[imgQue[0]].name);
  newProduct2.setAttribute("src", allProducts[imgQue[1]].img);
  newProduct2.setAttribute("class", "product");
  newProduct2.setAttribute("id", allProducts[imgQue[1]].name);
  newProduct3.setAttribute("src", allProducts[imgQue[2]].img);
  newProduct3.setAttribute("class", "product");
  newProduct3.setAttribute("id", allProducts[imgQue[2]].name);
  display.appendChild(newProduct1);
  display.appendChild(newProduct2);
  display.appendChild(newProduct3);
  for(i = 0; i < 3; i++ ){//Raises show prperty of displayed products by 1. 
    allProducts[imgQue[i]]['shown'] = allProducts[imgQue[i]].shown + 1;
  }
  display.addEventListener("click", vote);
  reloadQue();
}

function vote(){//Raises vote property of whatever object corresponds to the image clicked.
  var clicked = event.target
  console.log(clicked);
  for (i = 0; i < allProducts.length; i ++){//finds object assciated with image.
    if(allProducts[i].name === clicked.id){//Once object is found voted property is increased by 1.
      allProducts[i]['voted'] = allProducts[i].voted +1
      console.log(allProducts[i].name + " votes: " + allProducts[i].voted);
     
    }
  }
  clicks += 1;
  if(clicks < 25){nextProducts();} else { makeChart();} 
}

function nextProducts(){//Removes first three used indices stored in imgQue then removes the 3 products displayed. 
  console.log('imgQue' + imgQue);
  imgQue.splice(0,3);
  for(i = 0; i < 3; i++ ){
    var child = document.getElementsByClassName("product")[0];
    display.removeChild(child);
  }
addToDOM();
console.log("clicks at: " + clicks);
};


//Creating all object instances 
var bag = new createProduct("img/bag.jpg", "bag");
var banana = new createProduct("img/banana.jpg", "banana");
var bathroom = new createProduct("img/bathroom.jpg", "bathroom");
var boots = new createProduct("img/boots.jpg", "boots");
var breakfast = new createProduct("img/breakfast.jpg", "breakfast");
var bubblegum = new createProduct("img/bubblegum.jpg", "bubblegum");
var chair = new createProduct("img/chair.jpg", "chair");
var cthulhu = new createProduct("img/cthulhu.jpg", "cthulhu");
var dogduck = new createProduct("img/dog-duck.jpg", "dog duck");
var dragon = new createProduct("img/dragon.jpg", "dragon");
var pen = new createProduct("img/pen.jpg", "pen");
var petSweep = new createProduct("img/pet-sweep.jpg", "pet-sweep");
var scissors = new createProduct("img/scissors.jpg", "scissors");
var shark = new createProduct("img/shark.jpg", "shark");
var sweep = new createProduct("img/sweep.png", "sweep");
var tauntaun = new createProduct("img/tauntaun.jpg", "tauntaun");
var unicorn = new createProduct("img/unicorn.jpg", "unicorn");
var usb = new createProduct("img/usb.gif", "usb");
var waterCan = new createProduct("img/water-can.jpg", "water-can");
var wineGlass = new createProduct("img/wine-glass.jpg", "wineGlass");
reloadQue();
addToDOM();

//Creates chart showing items vote total compared with the shown total. 
function makeChart() {
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
            display: true,
            text: 'Vote Total'
        }
},
});
}
