class THUNDERBOLT{

    constructor(x,y){
       var options={
           isStatic:true
       }

       this.body=Bodies.circle(x,y,250,options);
       this.img1=loadImage("thunderbolt/1.png");
       this.img2=loadImage("thunderbolt/2.png");
       this.img3=loadImage("thunderbolt/3.png");
       this.img4=loadImage("thunderbolt/4.png");

       World.add(world,this.body);

    }

    display(){
        var pos=this.body.position;

        imageMode(CENTER);
        if(frameCount%10==0){

            var rand=Math.round(random(1,4));
            switch(rand){
                case 1:image(this.img1,200,20,250,250);
                break;
                case 2:image(this.img2,200,20,250,250);
                break;
                case 3:image(this.img3,200,20,250,250);
                break;
                case 4:image(this.img4,200,20,250,250);
                break;
                default:
                break;
            }
            
        }
    }
}