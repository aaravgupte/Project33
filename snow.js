class Snow{
    constructor(x, y){
        var options = {
            restitution: 0.2,
        }
        this.body = Bodies.circle(x, y, 5, options)
        this.radius = 5
        this.snowfalling=loadImage("snow4.webp")
        World.add(world, this.body)
    }
    display(){
        fill("blue");
        imageMode(CENTER)
        image(this.snowfalling,this.body.position.x, this.body.position.y, this.radius, this.radius)
    }
    updateY(){
        if (this.body.position.y > height) {
            Matter.Body.setPosition(this.body, { x: random(0, 400), y: random(0, 400) })
        }
    }

}