const initialSpeed = 60;
let route = [0, 30, 0, -45, 50, 25, 30];
let plusV = 0;
let minusV = 0;

for (let i = 0; i < route.length; i++) {
    if (route[i] > 0) {
        plusV += route[i];
    } else if (route[i] < 0) {
        minusV += route[i];
    }
}

let finalSpeed = initialSpeed - plusV - minusV;

if (finalSpeed > 0) {
    console.log("Final Speed is: " + finalSpeed + ". You Won!");
} else if (finalSpeed <= 0) {
    finalSpeed = 0;
    console.log("Final Speed is: " + finalSpeed + ". You lost your life.");
}
