class Block{
    constructor(x, y, width, height) {
        var options = {
              friction: 1.2       
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = loadImage("samosa_png_img-removebg-preview.png");
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //rectMode(CENTER);
        //rect(0,0,this.width, this.height);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop();
      }
}
