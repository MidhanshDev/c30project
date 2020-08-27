class Polygon {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restitution:0,
          friction:1,
          density:1
      }
      this.r = r;
      this.body = Bodies.circle(x,y,r,options);
      this.image = loadImage("images.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      //rectMode(CENTER);
      translate(pos.x,pos.y);
      imageMode(CENTER)
      image(this.image,0,0,40,40);
      pop();
      //rect(pos.x, pos.y, this.width, this.height);
    }
  };