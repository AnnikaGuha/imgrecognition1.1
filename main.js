Webcam.set({
    width:350,
    height:250,
image_format:'png',
png_quality:90


});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function snapshot(){
    Webcam.snap(function(data_uri){
document.getElementById("output").innerHTML='<img id="captured image" src="'+data_uri+'"></img>';
}  
)};
console.log("ml5 version:",ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/0NvTG6F_8/modal.json',modelLoaded);