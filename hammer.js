class Hammer {
    constructor(x,y){
        var options = {
            'restitution':1,
            'friction':0.8,
            'density':2
            
        }
    this.body = Bodies.rectangle(x,y,50,50,options)
    this.width = 40
    this.height = 50
    World.add(world,this.body)

    }
   display(){
       var pos = this.body.position
       pos.x = mouseX
       pos.y = mouseY
       var angle = this.body.angle
       push()
       translate(pos.x,pos.y)
       rectMode(CENTER)
       rotate(angle)
       strokeWeight(4)
       stroke("black")
       fill("yellow")
       
       rect(0,0,this.width,this.height)
      pop()







   }















 }































