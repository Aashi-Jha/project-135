status="";
input="";

function setup(){
    canvas=createCanvas(500,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function start(){
    object_detector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";

     input=document.getElementById("name");
}
function modelLoaded(){
    console.log("Model Loaded");
    status=true;
    }

function draw(){
    image(video,0,0,500,400);
}