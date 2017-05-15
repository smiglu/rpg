'use strict';
class PointObj {
    constructor(name, x, speedX, y, speedY) {
        this.name = name;
        this.x = x;
        this.speedX = speedX;
        this.y = y;
        this.speedY = speedY;
    }

    setX(x) {
        this.x = x;
    }

    setY(y) {
        this.y = y;
    }
}