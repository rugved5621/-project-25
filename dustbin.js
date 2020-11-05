class Dustbin{
	constructor(x,y){
		this.x=x;
		this.y=y;
		this.angle=0;	

		this.image=loadImage("dustbingreen.png")
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, 200, 20, {isStatic:true})
		World.add(world, this.bottomBody);

	}
	display(){
		var posBottom=this.bottomBody.position;

		push();
		translate(posBottom.x, posBottom.y);
		imageMode(CENTER);
		fill("white");
		image(this.image,0,-100,200,200);
		pop();
			
	}

}