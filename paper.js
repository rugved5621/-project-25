class Paper{
	constructor(x,y,r){
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.0
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("paper.png");
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

	}
	display(){
			
		var pos=this.body.position;		

		push()
		translate(pos.x, pos.y);
		imageMode(RADIUS);
		fill("pink");
		image(this.image,0,0,this.r, this.r);
		pop();
			
	}

}