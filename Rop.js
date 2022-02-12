class Rop{
    constructor(bodyA,pointB){
        var options ={
           bodyA:bodyA,
           pointB:pointB,
           stiffness:1.2,
           length:250,
        }
        this.pointB = pointB
        this.rop = Constraint.create(options)
        
        World.add(world,this.rop)
    }
    display(){
        if(this.rop.bodyA){
var pointA = this.rop.bodyA.position;
var pointB = this.pointB;
        }
        push()
     stroke("pink");
     strokeWeight(3);
       line(pointB.x,pointB.y,pointA.x,pointA.y)
    pop()
    }
attach(body){
    this.rop.bodyA = body;
}
fly(){
    this.rop.bodyA = null;
}
    }