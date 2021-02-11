class gwall{

    constructor(x,y,width,height){
        var gwall_options={
            isStatic : true
          }
        
          this.body = Bodies.rectangle(x,y,width,height,gwall_options)
          this.height = height
          this.width = width
          World.add(world,this.body);
    }
    display(){
        noStroke();
        fill("lightblue");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}