//Khai bao lop Mouse
class Mouse {
    constructor(name, weight, speed, status, objAudio) {
        this.NAME = name;
        this.WEIGHT = weight;
        this.SPEED = speed;
        this.STATUS = status;
        this.AUDIO = objAudio;
    }
    //Khaai bao phuong thuc
    speak() {
        return this.AUDIO.play();
    }
};
//Khai bao lop Cat
class Cat {
    constructor(name, weight, maxSpeed, objAudio, objMouse) {
        this.NAME = name;
        this.WEIGHT = weight;
        this.MAXSPEED = maxSpeed;
        this.AUDIO = objAudio;
        this.MOUSE = objMouse;
    }
    //Khai bao cac phuong thuc
    speak() {
        return this.AUDIO.play();
    }
    cacth() {
        return "Da bat duoc 1 con chuot";
    }
    eat() {
        if (this.MOUSE.STATUS) {
            this.WEIGHT += this.MOUSE.WEIGHT;
        }
    }
};
//Khai bao 
var audioCat = new Audio("Sound/Tieng-meo-keu.mp3");
var audioMouse = new Audio("Sound/chuot-keu.mp3");
var rat = new Mouse("RAT", 5, 20, true, audioMouse);
var cat = new Cat("CAT", 12, 50, audioCat, rat)