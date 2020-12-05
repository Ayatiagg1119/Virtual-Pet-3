//Create variables here
var dog, happyDog, database, foodS, foodStock; 
function preload()

{
	//load images here
}

function setup() {
	createCanvas(500, 500);
  foodStock=database.ref("Food");
  foodStock.on("value", readStock); 
}


function draw() {  
 background(46,139,87)
 if(keyWentDown(UP_ARROW)){
   writeStock(foods);
   dog.addImage(dogHappy);
 }
  drawSprites();
  //add styles here
}

//Function to read values from DB
function readStock(data){
  foodS=data.val();
}

//Function to write values in DB
function writeStock(x){

  database.ref("/").update({
    Food:x
  })
  //read game state from database
  readState=database.ref("gameState");
  readState.on("value",function(data){
    gameState=data.val();
  });
}

if(gameStates!="Hungry"){
  feed.hide();
  addFood.hide();
  dog.remove();
}else{
  feed.show();
  addFood.show();
  dog.addImage(sadDog);
}

//function to update gamestates in database
function update(state){
  database.ref("/").update({
    gameState:state
  });
}
