const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var bg, bg2

function preload() {
bg = loadImage("images/GamingBackground.jpg")
bg2 = loadImage("images/GamingBackground.png")
//monster_img = loadImage("images/monster.png")
monster1_img = loadImage("images/Monster-01.png")
monster2_img = loadImage("images/Monster-02.png")
superhero_imag = loadImage("images/superhero.png")
//superhero1_imag = loadImage("images/Superhero-01.png")
superhero2_imag = loadImage("images/Superhero-02.png")

}

function setup() {
  createCanvas(3000, 1500);

  engine = Engine.create()
  world = engine.world
  //bg = new Ground(775, 350, 1550, 700)
  ground = new Ground(450, 550, 900, 20)
  hero = new Hero(250, 300, 400, 200)
  //fly = new Fly(bodyA, pointB)
  block = new Block(640, 500, 50, 50)
  block2 = new Block(640, 440, 50, 50)
  block3 = new Block(640, 380, 50, 50)
  block4 = new Block(640, 320, 50, 50)

  block5 = new Block(700, 500, 50, 50)
  block6 = new Block(700, 440, 50, 50)
  block7 = new Block(700, 380, 50, 50)
  block8 = new Block(700, 320, 50, 50)
  block9 = new Block(700, 260, 50, 50)
  block10 = new Block(700, 200, 50, 50)
  block11 = new Block(700, 140, 50, 50)
  block12 = new Block(700, 80, 50, 50)

  block13 = new Block(760, 500, 50, 50)
  block14 = new Block(760, 440, 50, 50)
  block15 = new Block(760, 380, 50, 50)
  block16 = new Block(760, 320, 50, 50)
  block17 = new Block(760, 260, 50, 50)
  block18 = new Block(760, 200, 50, 50)

  wall = new Ground(0.5, 270, 10, 530)
  wall2 = new Ground(760, 1, 1500, 10)

  monster = new Monster(1350, 180, 300)
  fly = new Fly(hero.body, {x: 380, y: 300})


  Engine.run(engine);

}

function draw() {
  background(bg2)

  ground.display()
  hero.display()
  block.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  block17.display()
  block18.display()
  wall.display()
  wall2.display()

  monster.display()
  //fly.display()
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY})
}

function mouseReleased(){
  fly.rope()
}

