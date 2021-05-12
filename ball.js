/*class ball{
    constructor(x,y,radius){

        var options={
            isStatic:false,
        }

this.body=Bodies.circle(x,y,radius,options);
this.color=color(random(0,225), random(0,225), random(0,225));
World.add(world,this.body);
this.x=x;
this.y=y;
this.r=radius;

    }
    display(){
        ellipseMode(RADIUS);
        fill("white");
        ellipse(this.body.x,this.body.y,this.body.radius);
    }
}***/

class ball {
  
    constructor(x, y, radius) {
  
      var ball_options = {
          isStatic:true,
        
      }
  
      this.paper = Bodies.circle(x, y, radius,ball_options);
      this.radius=radius;
      this.x=x;
      this.y=y;
  
      World.add(world, this.paper);
    }
  
    display(){
  
      var pos=this.paper.position;
  
      push();
      translate(pos.x,pos.y);
      strokeWeight(3);
     
      ellipseMode(CENTER);
      fill("purple");
      ellipse(pos.x, pos.y,this.radius);
      pop();
      
    }
  }


  /*class ball {
  
    constructor(x, y, radius) {
  
      var ball_options = {
          isStatic:false,
        
      }
  
      this.paper = Bodies.circle(x,y,radius,ball_options);
      this.color=color(random(0,255),random(0,255),random(0,255));
      this.radius=radius;
      this.x=x;
      this.y=y;

    
  
      World.add(world, this.paper);
    }
  
    display(){
  
      var pos=this.paper.position;
  
      push();
      //translate(pos.x,pos.y);
      //strokeWeight(3);
     
      ellipseMode(RADIUS);
      fill(this.color);
      ellipse(pos.x, pos.y,this.radius);
      pop();
      
    }
  }*/