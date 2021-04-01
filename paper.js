class Paper {
    constructor(x,y,r){
        this.image = loadImage("paper.png");
        var options={
            isStatic:false,
            restitution:0.8,
            friction:1,
            density:1.2
        }
        this.xpos=x;
        this.ypos=y;
        this.radius=r;
        this.paperBody=Bodies.circle(x,y,r-30/2,options);
        World.add(world,this.paperBody);
        console.log(this.paperBody);
        

    }
    display() {
        push();
        translate(this.paperBody.position.x,this.paperBody.position.y);
        imageMode(CENTER);
        fill("blue");
       image(this.image,0,0,this.r,this.r);
        pop();
   }

}