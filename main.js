Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){

    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capturedimage" src="'+data_uri+'">';

    })
}
  console.log("ml5 version is",ml5.version);
  classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/IipDJJFiR/model.json',modelLoaded);
  function modelLoaded(){
      console.log("modelLoaded");
  }

function  check(){
    img=document.getElementById("capturedimage");
    classifier.classify(img,gotResult);
}

function gotResult(error,result) {
   if (error){
       console.error(error);
   }
   else {
       console.log(result);
       document.getElementById("object-name").innerHTML= result[0].label;
       document.getElementById("perfection").innerHTML= result[0].confidence.toFixed(2);
   }
}