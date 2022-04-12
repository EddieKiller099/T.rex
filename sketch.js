var chao
var trex, trex_running, edges;
var groundImage;
var chaoImage

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  chaoImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
 chao = createSprite (0,200,600,10)
  //criando o trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  chao.addImage(chaoImage)
  //adicione dimensão e posição ao trex
  trex.scale = 0.5;
  trex.x = 50
}


function draw(){
  //definir a cor do plano de fundo 
  background("white");
  if (chao.x <0){
    chao.x = chao.width/2
  }
  //registrando a posição y do trex
  console.log(chao.x)
  
  //pular quando tecla de espaço for pressionada
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  chao.velocityX = -3
 //impedir que o trex caia
  trex.collide(chao)
  drawSprites();
}