class Particle{
constructor(x,y,r){

var option = {
restitutions:0.4


}

this.body = bodies.circle(x,y,this.r,option)
this.color=color(random(0,255),random(0,255))
 World.add(world,this.body)
}
display(){
var pos = this.body.postion;

var angle = this.body.angle;

push();
translate(pos.x,pos.y);
rotate(angle);
noStroke();
fill(this.color);
ellipseMode(RADIUS);
ellipse(0,0,this.r,this.r);
Pop();

}




}