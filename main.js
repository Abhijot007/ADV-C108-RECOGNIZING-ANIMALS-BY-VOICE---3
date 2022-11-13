function start() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/wG8-e00y0/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);
        random_r= Math.floor(Math.random() * 255) + 1;
        random_g= Math.floor(Math.random() * 255) + 1;
        random_b= Math.floor(Math.random() * 255) + 1;
        
        document.getElementById("result_label").innerHTML= 'I can hear : '+results[0].label;
        document.getElementById("result_label").style.color= "rgb("+ random_r + "," + random_g + "," + random_b + ")";

        img1= document.getElementById("barking");
        img2= document.getElementById("meowing");
        img3= document.getElementById("mooing");
        img4= document.getElementById("roaring");
         
        if(results[0].label == "barking") {
            img1.src= "dog.gif";
            img2.src= "cat.jfif";
            img3.src= "cow.jfif";
            img4.src= "tiger.jfif";
        }
        else if(results[0].label == "meowing") {
            img1.src= "dog.jfif";
            img2.src= "cat.gif";
            img3.src= "cow.jfif";
            img4.src= "tiger.jfif";
        }
        else if(results[0].label == "mooing") {
            img1.src= "dog.jfif";
            img2.src= "cat.jfif";
            img3.src= "cow.gif";
            img4.src= "tiger.jfif";
        }
        else if(resuls[0].label == "roaring"){
            img1.src= "dog.jfif";
            img2.src= "cat.jfif";
            img3.src= "cow.jfif";
            img4.src= "tiger.gif";
        }
        
    }
}