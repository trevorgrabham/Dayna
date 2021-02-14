var input = document.getElementById('input');
var dog = document.getElementById('dog');
var cat = document.getElementById('cat');
var fish = document.getElementById('fish');
var turtle = document.getElementById('turtle');
var bird = document.getElementById('bird');

function shrinkImg(img){
  img.height = img.height/2;
  return;
}

function checkEmpty(s){
  if(s === ""){
    alert("missing data");
    input.style.borderColor = "yellow";
    return 1;
  }
  return 0;
}

function getText(){
  return input.value.toLowerCase();
}

function checkDog(s){
  if(s.includes("dog")){
    dog.style.border = "2px dashed red";
    return 1;
  }
  return 0;
}

function checkCat(s){
  if(s.includes("cat")){
    cat.style.border = "2px dashed red";
    return 1;
  }
  return 0;
}

function checkFish(s){
  if(s.includes("fish")){
    fish.style.border = "2px dashed red";
    return 1;
  }
  return 0;
}

function checkTurtle(s){
  if(s.includes("turtle")){
    turtle.style.border = "2px dashed red";
    return 1;
  }
  return 0;
}

function checkBird(s){
  if(s.includes("bird")){
    bird.style.border = "2px dashed red";
    return 1;
  }
  return 0;
}

function checkWater(s){
  if(s.includes("water")){
    turtle.style.border = "2px dashed red";
    fish.style.border = "2px dashed red";
    return 1;
  }
  return 0;
}

function checkAll(s){
  if(s.includes("all")){
    turtle.style.border = "2px dashed red";
    fish.style.border = "2px dashed red";
    bird.style.border = "2px dashed red";
    cat.style.border = "2px dashed red";
    dog.style.border = "2px dashed red";
    return 1;
  }
  return 0;
}

function checkJoke(s){
  if(s.includes("joke")){
    var paragraphs = document.querySelectorAll("p");
    for(var i=0;i<3;i++){
      paragraphs[i].style.border = "2px dashed red";
    }
    return 1;
  }
  return 0;
}

function mouseIn(p){
  p.style.backgroundColor = "yellow";
}

function mouseOut(p){
  p.style.backgroundColor = "white";
}

function resetBorders(){
  turtle.style.border = "none";
  fish.style.border = "none";
  bird.style.border = "none";
  cat.style.border = "none";
  dog.style.border = "none";
  var paragraphs = document.querySelectorAll("p");
  for(var i=0;i<3;i++){
    paragraphs[i].style.border = "none";
  }
}


function checkEverything(){
  resetBorders();
  var s = getText();
  var flag = 0;
  flag += checkEmpty(s);
  flag += checkDog(s);
  flag += checkCat(s);
  flag += checkFish(s);
  flag += checkTurtle(s);
  flag += checkBird(s);
  flag += checkWater(s);
  flag += checkAll(s);
  flag += checkJoke(s);
  if(flag < 1){
    var paragraphs = document.querySelectorAll("p");
    for(var i=0;i<3;i++){
      paragraphs[i].innerHTML = s;
    }
  }
}
