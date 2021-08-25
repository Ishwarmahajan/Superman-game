class Fly{
    constructor(bodyA, pointB){
        var options ={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 3,
            length : 100
        }

        this.fly = Constraint.create(options)
        World.add(world, this.fly)
    }

    rope(){
        this.fly.bodyA = null
    }

    display() {
        var pointA = this.fly.bodyA.position
        var pointB = this.fly.pointB.position

        strokeWeight(0)
        stroke("black")

        line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
}