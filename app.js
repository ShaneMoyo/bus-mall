
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
  for (i = 0; i < allProducts.length; i ++){//finds object assciated with image
    if(allProducts[i].name === clicked.id){//Once object is found voted property is increased by 1
      allProducts[i]['voted'] = allProducts[i].voted +1
      console.log(allProducts[i].name + " votes: " + allProducts[i].voted);
    }
  }
  nextProducts();
  clicks += 1;
}

function nextProducts(){//Removes first three used indices stored in imgQue then removes the 3 products displayed. 
  imgQue.splice(0,3);
  for(i = 0; i < 3; i++ ){
    var child = document.getElementsByClassName("product")[0];
    display.removeChild(child);
  }
addToDOM();
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
reloadQue();
addToDOM();
