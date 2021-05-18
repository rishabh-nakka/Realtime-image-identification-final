function preload(){}
function setup(){
    canvas=createCanvas(400,400)
    canvas.center()
    canvas.position(750,400)
    video=createCapture(VIDEO)
    video.hide()
    console.log("ml5"+ml5.version)
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/v2lw7Ufy1/model.json",modelLoaded)
}
function draw(){
    image(video,0,0,400,400)
    classifier.classify(video,gotResult)
}
function modelLoaded(){
    console.log("i hate java scriptt and classifier!!!!")
}
function gotResult(error,result){
    if (error){
        console.log(error)
    }
    else{
        console.log(result)
        object=result[0].label;
        confidence=result[0].confidence
        document.getElementById("object_dis").innerHTML=object;
        document.getElementById("accuracy_dis").innerHTML=confidence.toFixed(2)*100+"%"
    }
}