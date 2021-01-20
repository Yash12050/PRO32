class Block{
    constructor(x,y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,50,75,options);
        this.image = loadImage("rectangle.png");
        this.visibility = 255;
        World.add(world, this.body);
    }
    display(){
        if(this.body.speed<10){
            push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("blue");
        rect(0,0,50,75);
        pop();
        }
        else{
            World.remove(world,this.body);
            push();
            tint(255,this.visibility);
            this.visibility = this.visibility-10;
            image(this.image,this.body.position.x,this.body.position.y,50,75);
            pop();
        }
        
    }
    score(){
        if(this.visibility<255&&this.visibility>-105){
            score++;
        }
    }
}