let player;

function Player(classType, health, mana, strength, agility, speed) {
    console.log(classType);
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}

let PlayerMoves = {
    calcAttack: function () {
        //who attacks first?
        let getPlayerSpeed = player.speed;
        let getVillainSpeed = villain.speed;
        let playerAttack = function() {
            let calcBaseDamage;
            if (player.mana > 0) {
                calcBaseDamage = player.strength * player.mana / 1000;
                console.log(calcBaseDamage);
            } else {
                calcBaseDamage = player.strength * player.agility / 1000;  
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;
            //number of hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility /10) /2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        }

        let getPlayerHealth = document.querySelector(".health-player");
        let getVillainHealth = document.querySelector(".health-villain");
            if (getPlayerSpeed >= getVillainSpeed) {
        let playerAttackValues = playerAttack();
        let totalDamage = playerAttackValues[0] * playerAttackValues[1];
        villain.health = villain.health - totalDamage;
        alert("In the name of the moon " + playerAttackValues[0] + " damage has been dealt to the villain!" 
        + playerAttackValues[1] + " punishment dealt!");
            if (villain.health <= 0) {
                alert("I'll make you feel so much regret, it'll leave you numb! Villain Defeated!");
            getPlayerHealth.innerHTML = 'Health: ' + player.health;
            getVillainHealth.innerHTML = 'Health: 0';
        } else {
            getVillainHealth.innerHTML = 'Health: ' + villain.health;
            //enemy attacks
            let villanAttackValues = villainAttack();
            let totalDamage = villainAttackValues[0] * villainAttackValues[1];
                player.health = player.health - totalDamage;
                alert("Ultimately people are born alone and die alone!" + villainAttackValues[0] + " damage has been dealt! You have to bear it and live through it" 
                + villainAttackValues[1] + " times!");
                    if (player.health <= 0) {
                alert("Cheeky girl! You've been defeated!");
                getPlayerHealth.innerHTML = 'Health: 0';
                getVillainHealth.innerHTML = 'Health: ' + villain.health;

                } else {
                    getPlayerHealth.innerHTML = 'Health :' + player.health;
                }
            }
        }
        else if (getVillainSpeed >= getPlayerSpeed) {
            let villainAttackValues = villainAttack();
            let totalDamage = villainAttackValues [0] * villainAttackValues[1];
            player.health = player.health - totalDamage;
            alert("Cheeky girl you've been hit " + villainAttackValues[0] + " damage has been dealt to you!" 
            + villainAttackValues[1] + " times!");
                if (player.health <= 0) {
                    alert("You've been defeated and the moon kingdom is compromised!");
                getVillainHealth.innerHTML = 'Health: ' + villain.health;
                getPlayerHealth.innerHTML = 'Health: 0';
            } else {
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                //enemy attacks
                let playerAttackValues = playerAttack();
                let totalDamage = playerAttackValues[0] * playerAttackValues[1];
                    villain.health = villain.health - totalDamage;
                    alert("Ultimately people are born alone and die alone!" + playerAttackValues[0] + " damage has been dealt! You have to bear it and live through it" 
                    + playerAttackValues[1] + " times!");
                        if (villain.health <= 0) {
                    alert("In the name of the moon you have been punished!");
                    getVillainHealth.innerHTML = 'Health: 0';
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                    } else {
                    getVillainHealth.innerHTML = 'Health :' + villain.health;
                    }
                }
            }
    }

}

