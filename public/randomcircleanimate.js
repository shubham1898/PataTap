var keyData = {
    //q: {
    1: {
        sound: new Howl({                            //just making accessible to touch
          src: ['sounds/bubbles.mp3']
        }),
        color: '#1abc9c'
    },
    // w: {
    2: {
        sound: new Howl({
          src: ['sounds/clay.mp3']
        }),
        color: '#2ecc71'
    },
    // e: {
    3: {
        sound: new Howl({
          src: ['sounds/confetti.mp3']
        }),
        color: '#3498db'
    },
    // r: {
    4: {
        sound: new Howl({
          src: ['sounds/corona.mp3']
        }),
        color: '#9b59b6'
    },
        // t: {
        5: {
        sound: new Howl({
          src: ['sounds/dotted-spiral.mp3']
        }),
        color: '#34495e'
    },
    // y: {
    6: {
        sound: new Howl({
          src: ['sounds/flash-1.mp3']
        }),
        color: '#16a085'
    },
    // u: {
    7: {
        sound: new Howl({
          src: ['sounds/flash-2.mp3']
        }),
        color: '#27ae60'
    },
    // i: {
  8: {
        sound: new Howl({
          src: ['sounds/flash-3.mp3']
        }),
        color: '#2980b9'
    },
    // o: {
    9: {
        sound: new Howl({
            src: ['sounds/glimmer.mp3']
        }),
        color: '#8e44ad'
    },
    // p: {
    10: {
        sound: new Howl({
          src: ['sounds/moon.mp3']
        }),
        color: '#2c3e50'
    },
    // a: {
    11: {
        sound: new Howl({
          src: ['sounds/pinwheel.mp3']
        }),
        color: '#f1c40f'
    },
    // s: {
    12: {
        sound: new Howl({
          src: ['sounds/piston-1.mp3']
        }),
        color: '#e67e22'
    },
        // d: {
        13: {
        sound: new Howl({
          src: ['sounds/piston-2.mp3']
        }),
        color: '#e74c3c'
    },
    // f: {
    14: {
        sound: new Howl({
          src: ['sounds/prism-1.mp3']
        }),
        color: '#95a5a6'
    },
    // g: {
    15: {
        sound: new Howl({
          src: ['sounds/prism-2.mp3']
        }),
        color: '#f39c12'
    },
    // h: {
    16: {
        sound: new Howl({
          src: ['sounds/prism-3.mp3']
        }),
        color: '#d35400'
    },
    // j: {
    17: {
        sound: new Howl({
          src: ['sounds/splits.mp3']
        }),
        color: '#1abc9c'
    },
    // k: {
    18: {
        sound: new Howl({
          src: ['sounds/squiggle.mp3']
        }),
        color: '#2ecc71'
    },
    // l: {
    19: {
        sound: new Howl({
          src: ['sounds/strike.mp3']
        }),
        color: '#3498db'
    },
    // z: {
    20: {
        sound: new Howl({
          src: ['sounds/suspension.mp3']
        }),
        color: '#9b59b6'
    },
    // x: {
    21: {
    sound: new Howl({
          src: ['sounds/timer.mp3']
        }),
        color: '#34495e'
    },
    // c: {
    // 22: {
    22: {
        sound: new Howl({
          src: ['sounds/ufo.mp3']
        }),
        color: '#16a085'
    },
    // v: {
    23: {
        sound: new Howl({
          src: ['sounds/veil.mp3']
        }),
        color: '#27ae60'
    },
    // b: {
    24: {
        sound: new Howl({
          src: ['sounds/wipe.mp3']
        }),
        color: '#2980b9'
    },
    // n: {
    25: {
        sound: new Howl({
            src: ['sounds/zig-zag.mp3']
        }),
        color: '#8e44ad'
    },
    // m: {
    26: {
        sound: new Howl({
          src: ['sounds/moon.mp3']
        }),
        color: '#2c3e50'
    }
}
var newcircle=[];
 function onKeyDown(event)
//function onMouseDown(event)
{
    // for(var j=0;j<100;j++){
    var w=view.size.width;
    var h=view.size.height;
    function xcord(){
   
    return Math.floor(Math.random()* w);       //var randomPoint=Point.random()
}
function ycord(){
    return Math.floor(Math.random()* h);
}

function radius(){
   
    return Math.floor(Math.random()* 100);
}
function randomcolor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+","+g+","+b+")"
}
    
    console.log(w,h);
	console.log(event.point.x);
    // var circle=new Path.Circle(new Point(xcord(),ycord()), 70);
    var circle=new Path.Circle(new Point(event.point), 70);
    circle.fillColor=randomcolor();
    newcircle.push(circle);
	keyData[Math.floor(Math.random()*27)].sound.play();
    // if(keyData[event.key])
    // {
    //     keyData[event.key].sound.play();
    // }
    
}
function onFrame(event){
    for(var i=0;i<newcircle.length;i++)
    {
        newcircle[i].fillColor.hue+=1;
        newcircle[i].scale(0.99);
        newFunction();
    }

  function newFunction() {
    if (newcircle[i].area < 1) {
      newcircle[i].remove(); // remove the circle from the canvas
      newcircle.splice(i, 1); // remove the circle from the array
      // console.log("circle removed"+newcircle);
    }
  }
  }
