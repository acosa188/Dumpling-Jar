let socket;

// this class describes the properties of a single dumpling.
class Dumpling {

    // setting the co-ordinates, radius and the
    // speed of a dumpling in both the co-ordinates axes.
    constructor(img){
        this.x = width/2;
        this.y = height/2;
        this.xSpeed = random(-3,3);
        this.ySpeed = random(-1,1.5);
        this.img = img;
    }

// creation of a dumpling.
    createDumpling() {
        noStroke();
        image(this.img, this.x, this.y, 40, 40);
    }

// setting the dumpling in motion.
    moveDumpling() {
        if(this.x  < 18 || this.x + 40 > width - 20)
            this.xSpeed*=-1;
        if(this.y  < 70 || this.y + 40 > height - 18)
            this.ySpeed*=-1;
        this.x+=this.xSpeed;
        this.y+=this.ySpeed;
    }
}
    
// an array to add multiple particles
let dumplings = [];
let dangos = [];
let img;
let randIndex;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function setup(){
    createCanvas(236, 365);
    
    socket = io.connect('http://localhost:8080');

    //load all dangos
    dangos.push(loadImage('dango-blue.png'));
    dangos.push(loadImage('dango-pink.png'));
    dangos.push(loadImage('dango-red.png'));
    dangos.push(loadImage('dango-yellow.png'));

    //receives event and handles it
    socket.on('newFollower', ()=>{
        //some code that handles
        randIndex = getRandomInt(dangos.length);
        console.log(randIndex);
        dumplings.push(new Dumpling(dangos[randIndex]));
    });

    img = loadImage('jar.png');
}


function draw(){
    background(img);
    for(let i = 0;i<dumplings.length;i++) {
        dumplings[i].createDumpling();
        dumplings[i].moveDumpling();
    }
}