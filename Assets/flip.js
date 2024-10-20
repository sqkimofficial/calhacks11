//slightly psuedo code so beware but it generally is what you need
// @input SceneObject scarObj
// @input SceneObject tattoo1

var SIK = require("SpectaclesInteractionKit/SIK").SIK;
global.HandDataProvider = SIK.HandInputData;
var dotFunc = function (vector1, vector2) {
    var result = 0;
    result += vector1.x * vector2.x;
    result += vector1.y * vector2.y;
    result += vector1.z * vector2.z;
    return result;
}
var rightHand = global.HandDataProvider.getHand("right");
var leftHand = global.HandDataProvider.getHand("left");
var activeHand;
let counter = 0;

//var scarObj = global.getSceneObject().findChildByName("Scar");
//print(scarObj);
//var tattooObj = rightHand.getSceneObject().name;
//print(tattooObj);
//var tattooObj = script.getSceneObject().getChild("Tattoo1");
//print(scarObj == null);

script.createEvent("UpdateEvent").bind(function () {
    if (activeHand == null || !activeHand.isTracked()) {
        activeHand = rightHand.isTracked() ? rightHand : (leftHand.isTracked() ? leftHand : null);
        return;
    }
    var up = activeHand.middleToWrist.up;
    var worldUp = vec3.up();
    var dot = dotFunc(up,worldUp);
    
    
    if (dot > 0.22 && counter == 0) {
        //script.tattoo1.enabled = false;
        script.scarObj.enabled = true;
        script.tattoo1.enabled = false;
        print("alpha");
        print(counter);
    
    
    }else {
        script.tattoo1.enabled = true;
        script.scarObj.enabled = false;
        counter += 1;
        print("beta");
        print(counter);
    }
    
   if (dot > 0.22 && counter >= 1) {
        counter += 1;        
        script.tattoo1.enabled = true;
        script.scarObj.enabled = false;    
        print("omega");
        print(counter);
    
     
    }});