function preload(){
img=loadImage("dog_cat.jpg")

}

function setup(){
canvas=createCanvas(640,420)
canvas.center()
}
 function draw(){
    image(img,0,0,640,420)
    fill("#fa3400")
    text("dog",170,100)
    noFill()
    stroke('#fa3400')
    rect(120,40,350,350)
 }