

function setup() {
    createCanvas(800, 800)


}

function draw() {
    let e = random(30, 100)
    let r = random(255)
    let g = random(255)
    let b = random(255)
    let x = random(width)
    let y = random(height)
    
    //random ball
    fill(r, g, b)
    ellipse(x, y, 20)

   //special surprise
   push()
   stroke(r, g, b)
    for(let c = 0; c <= 800; c = c + 100){
        for(let d = 0; d <= 1200; d = d + 100){
        console.log(c)
        console.log(d)
        fill(mouseX, mouseX/2, mouseX/4)
        ellipse(c,d,e)
        }
    }
    pop()

    //rectangle cover
    for(let n = 0; n <= 800; n = n + 50){
        for(let m = 0; m <= 1200; m = m + 50){
        console.log(n);
        console.log(m);
        fill(255)
        rect(n, m, 50, -200 + mouseY/2)
        }
    }
  
}