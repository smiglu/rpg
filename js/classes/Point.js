'use strict';
class PointObj {
    constructor(x, speedX, y, speedY) {
        this.x = x;
        this.speedX = speedX;
        this.y = y;
        this.speedY = speedY;
    }

    // Simple class instance methods using short-hand method
    // declaration
    sayName() {
        console.log('Hi, I am a ', this.x + '.');
    }

      setX (x){
        this.x = x;
    }

    setY (y){
        this.y = y;
    }

    // We will look at static and subclassed methods shortly
}