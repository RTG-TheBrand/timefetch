class wall{
    constructor(x,y,width,height){

        var g_options={
            isStatic:true,
        }

this.body=Bodies.rectangle(x,y,width,height,g_options);
World.add(world,this.body);
this.x=x;
this.y=y;
this.w=width;
this.h=height;

    }
    display(){
        rectMode(CENTER);
        fill("white");
        rect(this.x,this.y,this.w,this.h);
    }
}