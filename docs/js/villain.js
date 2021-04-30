const villains = {};

class Villain {
    constructor(name, health, mana, strength, agility, speed) {
        this.name = name;
        this.health = health * 10;
        this.mana = mana;
        this.strength = strength;
        this.agility = agility;
        this.speed = speed;
    }
}

function setVillain() {
    let randomVillain = Math.floor(Math.random() * Math.floor(6));

    switch (randomVillain) {
    case 0:
        return {
            stats: new Villain("Black Lady", 250, 350, 250, 200, 200),
            img: 'black-lady.jpg',
        };
    case 1:
        return {
            stats: new Villain("Kaolinute", 350, 350, 300, 200, 300),
            img: 'kaolinite.jpg',
        };
    case 2:
        return {
            stats: new Villain("Doctor Tomoe", 400, 350, 300, 200, 250),
            img: 'doctor-tomoe.jpg',
        };
    case 3:
        return {
            stats: new Villain("Queen Metalia", 450, 350, 300, 200, 250),
            img: 'queen-metalia.jpg',
        };
    case 4:
        return {
            stats: new Villain("Mistress 9", 500, 350, 500, 200, 250),
            img: 'mistress-9.jpg',
        };
    case 5:
        return {
            stats: new Villain("Sailor Galaxia", 600, 600, 600, 200, 400),
            img: 'sailor-galaxia.jpg',
        };
    }
}

