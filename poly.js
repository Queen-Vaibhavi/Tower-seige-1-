class Polygon{
    constructor(x,y,ro){
        var options = {
            isStatic: false
        }
        this.body = Bodies.circle(x,y,ro,options);
        World.add(world,this.body);
        this.r = ro;
        this.image = loadImage("polygon.png");
 
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r*2.8,this.r*2.8);
        pop();
    
    }//display bracket
}