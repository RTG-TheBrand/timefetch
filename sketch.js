/*class baseclass{
	constructor(x, y, width, height) {
		var options = {
			"isStatic":false,
			'restitution':0.8,
			'friction':1.0,
			'density':1.0
		}
		this.body = Bodies.rectangle(x, y, width, height, options);
		this.width = width;
		this.height = height;
		this.x=x;
		this.y=y;
		World.add(world, this.body);
	  }
	  display(){
		
		rectMode(CENTER);
		fill("grey");
		stroke("grey");
	
		var a=this.body.position;
		  var b=this.body.width;
		  var c=this.body.height;
	
		  rect(a.x,a.y, this.width, this.height);
  
	  }
	  }

	  class baseclass2{
		constructor(x, y, width, height) {
			var options = {
				"isStatic":false,
				'restitution':0.8,
				'friction':1.0,
				'density':1.0
			}
			this.body = Bodies.rectangle(x, y, width, height, options);
			this.width = width;
			this.height = height;
			this.x=x;
			this.y=y;
			World.add(world, this.body);
		  }
		  display(){
			
			rectMode(CENTER);
			fill("cyan");
			stroke("grey");
		
			var a=this.body.position;
			  var b=this.body.width;
			  var c=this.body.height;
		
			  rect(a.x,a.y, this.width, this.height);
	  
		  }
		  }

		  class baseclass3{
			constructor(x, y, width, height) {
				var options = {
					"isStatic":false,
					'restitution':0.8,
					'friction':1.0,
					'density':1.0
				}
				this.body = Bodies.rectangle(x, y, width, height, options);
				this.width = width;
				this.height = height;
				this.x=x;
				this.y=y;
				World.add(world, this.body);
			  }
			  display(){
				
				rectMode(CENTER);
				fill("pink");
				stroke("grey");
			
				var a=this.body.position;
				  var b=this.body.width;
				  var c=this.body.height;
			
				  rect(a.x,a.y, this.width, this.height);
		  
			  }
			  }
		
			  class baseclass4{
				constructor(x, y, width, height) {
					var options = {
						"isStatic":false,
						'restitution':0.8,
						'friction':1.0,
						'density':1.0
					}
					this.body = Bodies.rectangle(x, y, width, height, options);
					this.width = width;
					this.height = height;
					this.x=x;
					this.y=y;
					World.add(world, this.body);
				  }
				  display(){
					
					rectMode(CENTER);
					fill("lightblue");
					stroke("grey");
				
					var a=this.body.position;
					  var b=this.body.width;
					  var c=this.body.height;
				
					  rect(a.x,a.y, this.width, this.height);
			  
				  }
				  }*/


				  
			


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball1=[];
var bg= "download.jpeg";
var backgroundIMG;

function preload(){
	getBackgroundImg();
}


function setup(){
	var canvas = createCanvas(1200,500);
    //var canvas = createCanvas(351,573);
    engine = Engine.create();
    world = engine.world;

	log1=new log(600,300,280,15);
    log2=new log(950,250,220,15);

	box1=new box(600,130,30,40);

	box22=new box2(570,170,30,40);
	box23=new box2(630,170,30,40);
	box24=new box2(600,170,30,40);

	box25=new box3(540,210,30,40);
	box26=new box3(570,210,30,40);
	box27=new box3(600,210,30,40);
	box28=new box3(630,210,30,40);
	box29=new box3(660,210,30,40);

	box30=new box4(510,250,30,40);
	box31=new box4(540,250,30,40);
	box32=new box4(570,250,30,40);
	box33=new box4(600,250,30,40);
	box34=new box4(630,250,30,40);
	box35=new box4(660,250,30,40);
	box36=new box4(690,250,30,40);



	box37=new box3(600+350,120,30,40);

	box38=new box2(570+350,160,30,40);
	box39=new box2(630+350,160,30,40);
	box40=new box2(600+350,160,30,40);

	box41=new box4(540+350,200,30,40);
	box42=new box4(570+350,200,30,40);
	box43=new box4(600+350,200,30,40);
	box44=new box4(630+350,200,30,40);
	box45=new box4(660+350,200,30,40);

	
   b=new shape(100,100,70,70);

	sling=new chain(b.body,{x:200,y:200});

	g1=new g(600,405,width,10);


	/*wall1=new wall(1,500,4,200);
	wall2=new wall(50,500,4,200);
	wall3=new wall(100,500,4,200);
	wall4=new wall(150,500,4,200);
	wall5=new wall(200,500,4,200);
	wall6=new wall(250,500,4,200);
	wall7=new wall(300,500,4,200);
	ground1=new ground(175,580,width,15);

	pik1=new bolll(15,50,7);
	pik2=new bolll(40,50,7);
	pik3=new bolll(65,50,7);
	pik4=new bolll(90,50,7);
	pik5=new bolll(115,50,7);
	pik6=new bolll(140,50,7);
	pik7=new bolll(165,50,7);
	pik8=new bolll(190,50,7);
	pik9=new bolll(215,50,7);
	pik10=new bolll(240,50,7);
	pik11=new bolll(265,50,7);
	pik12=new bolll(290,50,7);
	pik13=new bolll(315,50,7);
	pik14=new bolll(340,50,7);

	pik15=new bolll(15,100,7);
	pik16=new bolll(40,100,7);
	pik17=new bolll(65,100,7);
	pik18=new bolll(90,100,7);
	pik19=new bolll(115,100,7);
	pik20=new bolll(140,100,7);
	pik21=new bolll(165,100,7);
	pik22=new bolll(190,100,7);
	pik23=new bolll(215,100,7);
	pik24=new bolll(240,100,7);
	pik25=new bolll(265,100,7);
	pik26=new bolll(290,100,7);
	pik27=new bolll(315,100,7);
	pik28=new bolll(340,100,7);
	
	pik29=new bolll(15,100+50,7);
	pik30=new bolll(40,100+50,7);
	pik31=new bolll(65,100+50,7);
	pik32=new bolll(90,100+50,7);
	pik33=new bolll(115,100+50,7);
	pik34=new bolll(140,100+50,7);
	pik35=new bolll(165,100+50,7);
	pik36=new bolll(190,100+50,7);
	pik37=new bolll(215,100+50,7);
	pik38=new bolll(240,100+50,7);
	pik39=new bolll(265,100+50,7);
	pik40=new bolll(290,100+50,7);
	pik41=new bolll(315,100+50,7);
	pik42=new bolll(340,100+50,7);

	pik43=new bolll(15,100+100,7);
	pik44=new bolll(40,100+100,7);
	pik45=new bolll(65,100+100,7);
	pik46=new bolll(90,100+100,7);
	pik47=new bolll(115,100+100,7);
	pik48=new bolll(140,100+100,7);
	pik49=new bolll(165,100+100,7);
	pik50=new bolll(190,100+100,7);
	pik51=new bolll(215,100+100,7);
	pik52=new bolll(240,100+100,7);
	pik53=new bolll(265,100+100,7);
	pik54=new bolll(290,100+100,7);
	pik55=new bolll(315,100+100,7);
	pik56=new bolll(340,100+100,7);

	/*if(frameCount%10===0){
		//ball1=new ball (random(140,190),10,5);
		ball1.push(new ball(random(140,190),10,5));
		}*/

}

function draw(){
	if(backgroundIMG)
    background(backgroundIMG);
    Engine.update(engine);
	
	/*//ball1.display();

	if(frameCount%60===0){
		ball1.push(new ball(random(100,250),6,6));
	  }
	
	 for (var j = 0; j < ball1.length; j++) {
	  
		ball1[j].display();
	  }
	

	wall1.display();
	wall2.display();
    wall3.display();
	wall4.display();
	wall5.display();
	wall6.display();
	wall7.display();

	pik1.display();
	pik2.display();
    pik3.display();
	pik4.display();
	pik5.display();
	pik6.display();
	pik7.display();
	pik8.display();
	pik9.display();
	pik10.display();
	pik11.display();
	pik12.display();
	pik13.display();
	pik14.display();

	//pik15.display();
	pik16.display();
	pik17.display();
	pik18.display();
	pik19.display();
	pik20.display();
	pik21.display();
	pik22.display();
	pik23.display();
	pik24.display();
	pik25.display();
	pik26.display();
	pik27.display();
	//pik28.display();

	pik29.display();
	pik30.display();
	pik31.display();
	pik32.display();
	pik33.display();
	pik34.display();
	pik35.display();
	pik36.display();
	pik37.display();
	pik38.display();
	pik39.display();
	pik40.display();
	pik41.display();
	pik42.display();

	//pik43.display();
	pik44.display();
	pik45.display();
	pik46.display();
	pik47.display();
	pik48.display();
	pik49.display();
	pik50.display();
	pik51.display();
	pik52.display();
	pik53.display();
	pik54.display();
	pik55.display();
	//pik56.display();*/

log1.display();
log2.display();

box1.display();

box22.display();
box23.display();

box24.display();
box25.display();
box26.display();

box27.display();
box28.display();
box29.display();
box30.display();
box31.display();
box32.display();
box33.display();
box34.display();
box35.display();
box36.display();
box37.display();
box38.display();
box39.display();
box40.display();
box41.display();
box42.display();
box43.display();
box44.display();
box45.display();

b.display();
g1.display();

sling.display();

}

function mouseDragged(){

Matter.Body.setPosition(b.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
	sling.fly();
}

function keyPressed(){

if(keyCode===32){

sling.attach(b.body);

}

}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    console.log(responseJSON);
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
	console.log(hour);
    
    if(hour>=06 && hour<=18){
        bg = "download.jpeg";
    }
    else{
        bg = "download.jpeg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}

