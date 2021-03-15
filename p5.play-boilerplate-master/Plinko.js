class Plinko {
    constructor(x,y,radius) {
        var options = {
            isStatic : true
        }
        this.radius = radius;
        this.body = Bodies.circle(x,y,this.radius,options);
        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        //push();
        //translate(pos.x,pos.y);
        fill("white");
        ellipseMode(CENTER);
        ellipse(0,0,10,10);
        //pop();
    }
}