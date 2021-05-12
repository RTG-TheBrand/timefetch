class bolll{
    constructor(x,y,radius){

        var options={
            isStatic:true,
        }

this.body=Bodies.circle(x,y,radius,options);
World.add(world,this.body);
this.x=x;
this.y=y;
this.r=radius;

    }
    display(){
        ellipseMode(RADIUS);
        fill("white");
        ellipse(this.x,this.y,this.r);
    }
}