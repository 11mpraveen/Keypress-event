var canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); 
	img_imgTag.onload = uploadimg; 
	img_imgTag.src = img_image;   
}

function uploadimg(){
    ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", keydown_function);

function keydown_function(e){
    keydown = e.keyCode;
    console.log(keydown);

    if((keydown>= 65 && keydown<= 90) || (keydown>=97 && keydown<=122)){
        document.getElementById('keyname').innerHTML = "You Pressed an alphabet key"
        alphabetkey();
    } 
    else if((keydown>= 48 && keydown<= 57)){
        document.getElementById('keyname').innerHTML = "You Pressed a number key"
        numberkey();
    }
    else if((keydown>= 37 && keydown<= 40)){
        document.getElementById('keyname').innerHTML = "You Pressed an arrow key"
        arrowkey();
    }
    else if((keydown == 17) || (keydown == 18) || (keydown == 27)){
        document.getElementById('keyname').innerHTML = "You Pressed a special key"
        specialkey();
    }
    else{
        document.getElementById('keyname').innerHTML = "You pressed an other key"
        otherkey();
    }   
}

function alphabetkey(){
    img_image = "Alpkey.png";
    add();
}
function numberkey(){
    img_image = "numkey.png";
    add();
}
function arrowkey(){
    img_image = "Arrkey.png";
    add();
}
function specialkey(){
    img_image = "spkey.png";
    add();
}
function otherkey(){
    img_image = "otherkey.png";
    add();
}
