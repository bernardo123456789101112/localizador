objects=[];
stats="";
porcent="";
function preload(){
video=createCapture(VIDEO);
video.hide();
}
function setup(){
 canvas=createCanvas(480, 380);
 canvas.center();
}
function draw(){
    image(video, 0, 0, 480, 380);
    if(stats!=""){
        model.detect(video, gotResult);
        for(i=0; i<objects.length; i++){
            document.getElementById("stats").innerHTML="Objetos Detectando";
            document.getElementById("quanti").innerHTML="quandidade de objetos detectados são: "+ obejects.length;
            fill("#FF0000");
            porcent=floor(objects[i].confidence*100);
            text(objects[i].label+ " " + porcent + " " + "%", objects[i].x+15, objects[i].y+15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].heigth);
        }
    }
    
}
function iniciar(){
    model=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("stats").innerHTML="Detectando objetos";
}
function modelLoaded(){
console.log("modelo carregado");
stats=true;
video.loop();
video.speed(1);
video.volume(0);
}
function gotResult(results, error){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        obejects=results;
    }
}


