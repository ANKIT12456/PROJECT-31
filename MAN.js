class MAN{

    constructor(x,y){

        var options={
            isStatic:true
        }

        this.body=Bodies.circle(x,y,25,options);
        this.image=loadImage("walk/walking_1.png");
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,250,250);

    }
}
