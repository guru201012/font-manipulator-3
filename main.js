leftwristx=0
rightwristx=0
difference=0
function setup(){
    canvas=createCanvas(550,360);
    canvas.position(550,120);
    video=createCapture(VIDEO);
    video.size(550,360);
    video.position(21,120);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("poseNet is initalized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.y;
        difference=floor(leftwristx-rightwristx);
        console.log(difference)
    }
}
function draw(){
    background('#ff3d03');
    document.getElementById("font").innerHTML="font size of the text will be"+difference+"px";
    textSize(difference);
    fill("goldenrod");
    text('GURU',60,270);
}