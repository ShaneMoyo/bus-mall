
//Global variables.
var allProducts = [];
var imgQue = [];
var display = document.getElementById("display");
var parent = document.getElementById("display");
var newProduct1;
var newProduct2;
var newProduct3;
var clicks = 0;



//Creates each prodcut instance. Adds to allProducts array.
function createProduct(img, name){
    this.img = img;
    this.shown = 0;
    this.voted = 0;
    this.name = name;
    allProducts.push(this); //Adds to product to array.
    console.log(this.name + " product has been created");
    console.log(allProducts)
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
  
  newProduct1 = document.createElement("img");
  newProduct2 = document.createElement("img");
  newProduct3 = document.createElement("img");
  newProduct1.setAttribute("src", allProducts[imgQue[0]].img);
  newProduct1.setAttribute("class", "product");
  newProduct1.setAttribute("id", "product1");
  newProduct2.setAttribute("src", allProducts[imgQue[1]].img);
  newProduct2.setAttribute("class", "product");
  newProduct2.setAttribute("id", "product2");
  newProduct3.setAttribute("src", allProducts[imgQue[2]].img);
  newProduct3.setAttribute("class", "product");
  newProduct1.setAttribute("id", "product3");
  display.appendChild(newProduct1);
  display.appendChild(newProduct2);
  display.appendChild(newProduct3);
  for(i = 0; i < 3; i++ ){//Raises show prperty of displayed products by 1. 
    allProducts[imgQue[i]]['shown'] = allProducts[imgQue[i]].shown + 1;
  }
  newProduct1.addEventListener("click", voted1);
  newProduct2.addEventListener("click",voted2);
  newProduct3.addEventListener("click", voted3);
  reloadQue();
  console.log("imgQue a2d " +imgQue);
}



function voted1(){//Raises vote property of whatever object corresponds to newProduct1.
  allProducts[imgQue[0]]['voted'] = allProducts[imgQue[0]].voted + 1;
  nextProducts();
  clicks += 1;
  console.log("clicks : " + clicks);
}
function voted2(){//Raises vote property of whatever object corresponds to newProduct2.
  allProducts[imgQue[1]]['voted'] = allProducts[imgQue[1]].voted + 1;
  nextProducts();
  clicks += 1;
   console.log("clicks : " + clicks);
}
function voted3(){//Raises vote property of whatever object corresponds to newProduct3.
  allProducts[imgQue[2]]['voted'] = allProducts[imgQue[2]].voted + 1;
  nextProducts();
  clicks += 1;
   console.log("clicks : " + clicks);
}

function nextProducts(){//Removes first three used indices stored in imgQue then removes the 3 products displayed. 
  imgQue.splice(0,3);
  for(i = 0; i < 3; i++ ){
    var child = document.getElementsByClassName("product")[0];
    parent.removeChild(child);
  }
addToDOM();
};

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
