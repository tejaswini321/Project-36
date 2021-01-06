var database;
var dog, dogImg, happyDog;
var foodS = 20;
var lastFed = 0;
var foodObj = null;
var feedButton, addButton;


function preload()
{
  dogImg = loadImage("Dog.png");
  happyDog = loadImage("happydog.png");
}


function setup() {

  createCanvas(800, 500);

  feedButton = createButton("Feed your dog");
  feedButton.position(700, 95);
  feedButton.mousePressed(feedDog);

  addButton = createButton("Add Food");
  addButton.position(820, 95);
  addButton.mousePressed(addFood);

  foodObj = new Food();

  dog = createSprite(650, 280);
  dog.scale = 0.3;
  dog.addImage(dogImg);
 
}

function draw() {  

  background(rgb(28,167,115));

  fill("white");
  textSize(15);
  if(lastFed>=12){
    text("Last Fed : "+ lastFed%12 + " PM", 350,30);
   }else if(lastFed==0){
     text("Last Fed : 12 AM",350,30);
   }else{
     text("Last Fed : "+ lastFed + " AM", 350,30);
   }

   
  drawSprites();

  foodObj.display();

}

function addFood(){
  foodS++;
  foodObj.updateFoodStock(foodS);
}

function feedDog(){
  if(foodS > 0){
    dog.addImage(happyDog);
    foodS--;
    foodObj.updateFoodStock(foodS);
    lastFed = hour();
    foodObj.updateLastFed(lastFed);
  }
}

