class Poly{
    constructor(x,y){
        var options = {
            'friction':1,
            'density':1,
            'restitution':0.1
        }
        this.body = Bodies.circle(x,y,30,options);
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        ellipse(0,0,30);
        pop();
    }
}