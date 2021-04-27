let villain;

function Villain(villainType, health, mana, strength, agility, speed) {
    this.classType = villainType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}

    //Villain attacks//
    let villainAttack = function() {
        let calcBaseDamage;
        if (villain.mana > 0) {
       calcBaseDamage = villain.strength * villain.mana/ 1000;
        } else {
        calcBaseDamage = villain.strength * villain.agility/ 1000;  
        }
        let offsetDamage = Math.floor(Math.random() * Math.floor(10));
        let calcOutputDamage = calcBaseDamage + offsetDamage;
        //number of hits
        let numberOfHits = Math.floor(Math.random() * Math.floor(villain.agility /10) /2) + 1;
        let attackValues = [calcOutputDamage, numberOfHits];
        return attackValues;
    }

