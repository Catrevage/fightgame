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

        this.fighter1El.querySelector('.attack').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));

        this.fighter2El.querySelector('.attack').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));

    }

    update(){
        
        //Figther1
        let f1pct = (this.fighter1.life / this.fighter1.maxlife) * 100
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(0)} - HP`;
        this.fighter1El.querySelector('.lifebar .bar').style.width =`${f1pct}%`;
        
        //Fighter2
        let f2pct = (this.fighter2.life / this.fighter2.maxlife) * 100;
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(0)} - HP`;
        this.fighter2El.querySelector('.lifebar .bar').style.width =`${f2pct}%`;

    }

    doAttack(attacking, attaked) {

        if (attacking.life <= 0 || attaked.life <=0) {
            console.log('Atacando Cachorro morto!')
            return;
        }

        let attackFactor = (Math.random() * 2).toFixed(2);
        let defensseFacor = (Math.random() * 2).toFixed(2);


        let actualAttack = attacking.attack *attackFactor;
        let actualDefense = attaked.attack * defensseFacor;
        

        if (actualAttack > actualDefense) {
            attaked.life -= actualAttack;
            console.log(`${attacking.name} conseguiu atacar`);

        } else {
            console.log(`${attaked.name} conseguiu se defender.`);
        }

        
        this.update();

    }
}
