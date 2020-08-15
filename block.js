class Block{
    constructor(x, y, width, height) {
        var options = {
             isStatic:false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        
        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
      }
      display(){

        var pos = this.body.position.x
      
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill(0,255,0);
        rect( 0, 0, this.width, this.height);
        pop();
      }
}