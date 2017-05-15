'use strict';
class Player extends PointObj{
    constructor(name, x, speedX, y, speedY) {
        super(name, x, speedX, y, speedY);
        this.hp = 20;
    }
}