const Engine=Matter.Engine;
const World=Matter.World;
const Body=Matter.Body;
const Bodies=Matter.Bodies;

var engine,world;
var rain=[];
var ground,walker,thunderbolt,rain;

function setup(){
    createCanvas(600,700);

    engine=Engine.create();
    world=engine.world;

    ground=new GROUND(250,700,700,20);
    walker=new MAN(200,590);
    thunderbolt=new THUNDERBOLT(0,0);

    Engine.run(engine);
}

function draw(){
    background("black");

    walker.debug=true;
    console.log(ground.x);
    ground.display();

    if(frameCount%30==0){
        rain.push(new RAIN(random(20,680),5,5));
    }

    for(var j=0;j<rain.length;j++){
        rain[j].display();
    }

    walker.display();
    thunderbolt.display();
}