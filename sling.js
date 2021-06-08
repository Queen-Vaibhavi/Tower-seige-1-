class slingshot{
    constructor(bodyA, pointBo){
        var options = {
            bodyA: bodyA,
            pointB: pointBo,
            stiffness: 0.04,
            length: 10
        }
        this.slingo = Constraint.create(options);
        World.add(world, this.slingo);
        this.pointB = pointBo;
    }

    display(){
        if(this.slingo.bodyA){
        var pointA = this.slingo.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    
        }

        }
    fly(){
    this.slingo.bodyA = null;
    
    }
    
}