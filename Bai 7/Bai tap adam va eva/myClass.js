//Khai bao class Apple
class Apple {
    constructor(weight) {//thuoc tinh
        this.WEIGHT = weight;
    }
    //Khai bao phuong thuc
    decrease() {//giam
        this.WEIGHT--;
    }
    isEmtry() {
        if (this.WEIGHT === 0)
            return "Het tao";
    }
    getWeight() {
        return this.WEIGHT;
    }
};
//Khai bao class Human
class Human {
    constructor(name, gender, weight) {// thuoc tinh name,gender,weight
        this.NAME = name;
        this.GENDER = gender;
        this.WEIGHT = weight;
    }
    //Khai bao phuong thuc
    isMale() {//phuong thuoc kiem tra gioi tinh
        if (this.GENDER === "NAM")
            return "NAM";
        else
            return "NỮ";
    }
    eatApple() {
        this.WEIGHT++;
    }
    getWeight() { //phuong thuc get Weight
        return this.WEIGHT;
    }
};
let apple = new Apple(10);
console.log(apple.WEIGHT);
document.getElementById("text1").innerHTML = apple.WEIGHT;
let adam = new Human("ADAM", "NAM", 60);
document.getElementById("text2").innerHTML = adam.WEIGHT;
let eva = new Human("EVA", "NỮ", 40);
document.getElementById("text3").innerHTML = eva.WEIGHT;
function adamEat() {
    if (apple.WEIGHT > 0) {
        apple.decrease();
        adam.eatApple();
        document.getElementById("text1").innerHTML = apple.WEIGHT;
        document.getElementById("text2").innerHTML = adam.WEIGHT;
    } else
        document.getElementById("text1").innerHTML = apple.isEmtry();
}
function evaEat() {
    if (apple.WEIGHT > 0) {
        apple.decrease();
        eva.eatApple();
        document.getElementById("text1").innerHTML = apple.WEIGHT;
        document.getElementById("text3").innerHTML = eva.WEIGHT;
    } else
        document.getElementById("text1").innerHTML = apple.isEmtry();
}
