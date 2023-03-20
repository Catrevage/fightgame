class Character {
    
    _life = 1;
    maxlife = 1;
    attack = 0;
    defense = 0;
    
    constructor(name) {
        this.name = name;
    }

    get life() {
        return this._life;
    }

    set life(newlife) {
        this._life = newlife <0 ? 0 : newlife;
    }

}

class Knight extends Character {
    constructor (name) {
        super(name);
        this.life = 100;
        this.maxlife = this.life;
        this.attack = 10;
        this.defense = 8;
    }
}

class Sorcener extends Character {
    constructor(name) {
        super(name);
        this.life = 90;
        this.maxlife = this.life;
        this.attack = 15;
        this.defense = 3;
    }
}

class LittleMonster extends Character {
    constructor(name){
        super(name);
        this.life = 40;
        this.attack = 4;
        this.defense = 4;
        this.maxlife =this.life;

 }
}

class BigMonster extends Character {
    constructor(name){
        super(name);
        this.life = 120;
        this.attack = 16;
        this.defense = 6;
        this.maxlife =this.life;

 }
}

class Stage {
    constructor(fighter1,fighter2, fighter1El, fighter2El ){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El  = fighter2El;
    }

    start() {
        this.update();

    }

    update(){
        //Figther1
        this.fighter1El.querySelector('.name').innerHTML = this.fighter1.name;

        //Fighter2
        this.fighter2El.querySelector('.name').innerHTML = this.fighter2.name;


    }
}
