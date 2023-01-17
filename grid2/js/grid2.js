let textures = [];
let colours;
function preload() {
    let texturesNum = 5;
    for( let i = 1; i <= texturesNum;i++){
        //let texture = loadImages("images/texture"+i+".png");//concatenation

        let texture = loadImage("images/texture"+i+".png");// backticks are'template literals' and dollas sihs curly brace is string interpolation
        textures.push(texture);// adds texture to textures array



    }
}
 function setup () {
    colours = [color('#de1a09'), color('#449b67'), color('#4bb3bc'), color('#f8fa48'), color('#e19dc1'),];
    createCanvas(800, 800);
    const CELL_SIZE = 80;
    let x = 0;
    let y = 0;
    noStroke();
    while(y < height) {
        while(x < width){
            tint(random(colours))
        let t = random(textures);
            image( t, x+ random(-2,2), y+ random(-2,2), CELL_SIZE, CELL_SIZE)
             x+=CELL_SIZE;
            push()
            translate(x + CELL_SIZE/2, y+ CELL_SIZE/2)
            rotate(random(0.6))
            image(t, -CELL_SIZE/2, -CELL_SIZE/2, CELL_SIZE, CELL_SIZE)
            pop()
            x+=CELL_SIZE;   
            
        }
        y+=CELL_SIZE;
        x=0;
          


        }
}