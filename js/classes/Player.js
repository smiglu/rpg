'use strict';
class Player extends PointObj {
    constructor(name, x, speedX, y, speedY) {
        super(name, x, speedX, y, speedY);
        this.hp = 20;
        this.pressingDown = false;
        this.pressingLeft = false;
        this.pressingRight = false;
        this.pressingUp = false;
        this.width= 30;
        this.height = 30;
    }
}