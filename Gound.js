class Ground{
constructor(x,y,width,height){

var option = {

isStatic: true, 
"restitution":0,
"friction":0,
"density":1
}

this.body = Bodies.rectangle(x,y,width,height,option);
this.width = width;
this.height = height;

World.add(world,this.body);

}

display(){
rectMode(CENTER);
Fill(255);
var pos =this.body.position 
rect(this.body.position.x,this.body.position.y,this.width,this.height);


}


}