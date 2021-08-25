class Block{
    constructor(x, y, width, height){
        var options ={
            isStatic : false,
            restitution : 0.6,
            density :20,
            friction : 0.3
        }

        this.body = Bodies.rectangle(x, y, width, height, options)
        this.width = width
        this.height = height
        World.add(world, this.body)
        
    }

    display() {
        var pos = this.body.position
        //var angle = this.body.angle
        push()
        //rotate(angle)
        //translate(pos.x, pos.y)
        rectMode(CENTER)
        fill("orange")
        strokeWeight(3)
        rect(pos.x, pos.y, this.width, this.height)
        pop()
    }
}