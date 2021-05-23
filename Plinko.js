class Plinko{
constructor(x,y){
var option = {
    restitution :3,
    friction :0,
    isStatic: true
}
this.radius =10
this.body =Bodies.circle(x,y,this.radius,option)
world.add(world,this.body)

}

display(){
var pos = this.body.postion;
var angle = this.body.angle;

push();
translate(pos.x,pos.y);
rotation(angle);
imageMode(CENTER);
noStroke();
fill("white")
ellipseMode(RADIUS);
ellipse(0,o,this,r,this.r)
pop();


}




}