class MAN{

    constructor(x,y){

        var options={
            isStatic:true
        }

        this.body=Bodies.circle(x,y,250,options);
        this.image=loadImage("walk/walking_1.png");
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;

        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,250,250);

    }
}