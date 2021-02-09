class Iron {
    constructor(x,y){
        var options = {
            'restitution':1,
            'friction':0.8,
            'density':10
            
        }
    this.body = Bodies.rectangle(x,y,80,50,options)
    this.width = 80
    this.height = 50
    World.add(world,this.body)

    }
   display(){
       var pos = this.body.position
       var angle = this.body.angle
       push()
       translate(pos.x,pos.y)
       rectMode(CENTER)
       rotate(angle)
       strokeWeight(4)
       stroke("black")
       fill("orange")
       
       rect(0,0,this.width,this.height)
      pop()


    }


}

  