class ball {
    constructor(x,y,radius){
     var options = {   
         restitution :0.4,
         friction :0.1,
         density :0.1
         //isStatic:true
     }
     this.body = Bodies.circle(x, y,radius, options);
     this.radius = radius; 
     World.add (world,this.body)
    }
    display(){

     fill("blue");
     push();
     translate(this.body.position.x, this.body.position.y);
     rotate(this.body.angle);
     ellipseMode(RADIUS);
     ellipse(0,0,this.radius);
     pop();
    }
}