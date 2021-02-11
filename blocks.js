class blocks{
    constructor(x, y) {
        var options = {
           
            restitution :0.4,
            friction :0.5,
            density: 1.0
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y,60,60, options);
        this.width = 60;
        this.height = 60;
        World.add(world, this.body);
      }
      display(){ 
      fill("pink")
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(this.body.angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();
      }
    }
 