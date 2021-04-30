const scouts = {
    jupiter: { name: 'Sailor Jupiter', img: 'jupiter.jpg' },
    chibiusa: { name: 'Sailor Chibiusa', img: 'chibiusa.jpg' },
    mars: { name: 'Sailor Mars', img: 'mars.png' },
    mercury: { name: 'Sailor Mercury', img: 'mercury.jpg' },
    moon: { name: 'Sailor Moon', img: 'moon.png' },
    neptune: { name: 'Sailor Neptune', img: 'neptune.png' },
    pluto: { name: 'Sailor Pluto', img: 'pluto.jpeg' },
    saturn: { name: 'Sailor Saturn', img: 'saturn.jpeg' },
    uranus: { name: 'Sailor Uranus', img: 'uranus.jpg' },
    venus: { name: 'Sailor Venus', img: 'venus.png' },
};

const scoutsArray = Object.keys(scouts);

class Player {
    constructor(classType, health, mana, strength, agility, speed) {
        this.classType = classType;
        this.health = health * 10;
        this.mana = mana;
        this.strength = strength;
        this.agility = agility;
        this.speed = speed;
    }
}

const playerHealth = document.querySelector('.scout-health');
const computerHealth = document.querySelector('.villain-health');
const gameInfo = document.querySelector('.game-info');
const movesetContainer = document.querySelector('.moveset-container');

function getAttackValues(player) {
    let baseDamage;

    if (player.stats.mana > 0) {
        baseDamage = player.stats.strength * player.stats.mana / 1000;
    } else {
        baseDamage = player.stats.strength * player.stats.agility / 1000;
    }

    const offsetDamage = Math.floor(Math.random() * Math.floor(10));
    const outputDamage = baseDamage + offsetDamage;

    const numberOfHits = Math.floor(Math.random() * Math.floor(player.stats.agility / 10) / 2) + 1;
    
    return [outputDamage, numberOfHits];
}

function endMatch(winInfo) {
    gameInfo.append(winInfo);

    movesetContainer.style.display = 'none';

    const btnRestart = document.createElement('button');
    btnRestart.innerHTML = 'Restart';
    btnRestart.onclick = () => {
        location.reload();
    };

    gameInfo.append(btnRestart);
}

function playerWins(player, computer) {
    const winInfo = document.createElement('p');
    winInfo.innerHTML = "I'll make you feel so much regret, it'll leave you numb! Villain Defeated!";
    
    computerHealth.innerHTML = 'Health: 0';

    endMatch(winInfo);
}

function computerWins(player, computer) {
    const winInfo = document.createElement('p');
    winInfo.innerHTML = "Cheeky girl! You've been defeated!";
    
    playerHealth.innerHTML = 'Health: 0';

    endMatch(winInfo);
}

function computerAttack(player, computer) {
    const computerAttackValues = getAttackValues(computer);
    const totalDamage = computerAttackValues[0] * computerAttackValues[1];

    player.stats.health = player.stats.health - totalDamage;

    const villainAttackInfo = document.createElement('p');
    villainAttackInfo.innerHTML = `Ultimately people are born alone and die alone! ${computerAttackValues[0]} damage has been dealt ${computerAttackValues[1]} times! You have to bear it and live through it`;
    
    gameInfo.append(villainAttackInfo);
}

function playerAttack(player, computer) {
    const playerAttackValues = getAttackValues(player);
    const totalDamage = playerAttackValues[0] * playerAttackValues[1];

    gameInfo.innerHTML = '';

    const playerAttackInfo = document.createElement('p');
    playerAttackInfo.innerHTML = `In the name of the moon ${playerAttackValues[0]} damage has been dealt to the villain ${playerAttackValues[1]} times!`;

    if (player.stats.speed >= computer.stats.speed) {
        computer.stats.health = computer.stats.health - totalDamage;

        gameInfo.append(playerAttackInfo);

        if (computer.stats.health <= 0) {
            playerWins(player, computer);
        } else {
            computerHealth.innerHTML = `Health: ${computer.stats.health}`;

            computerAttack(player, computer);

            if (player.stats.health <= 0) {
                computerWins();
            } else {
                playerHealth.innerHTML = `Health: ${player.stats.health}`;
            }
        }
    } else {
        computerAttack(player, computer);

        if (player.stats.health <= 0) {
            computerWins();
        } else {
            playerHealth.innerHTML = `Health: ${player.stats.health}`;

            computer.stats.health = computer.stats.health - totalDamage;

            gameInfo.append(playerAttackInfo);

            if (computer.stats.health <= 0) {
                playerWins(player, computer);
            }
        }
    }
}

function setPlayer(scout) {
    switch (scout) {
    case "moon":
        return {
            stats: new Player(scout, 350, 500, 650, 150, 100),
            moveset: [{
                name: 'Moon Tiara Action!',
                pow: 250,
            }, {
                name: 'Moon Gorgeous Meditation',
                pow: 450,
            }],
        };
    case "jupiter":
        return {
            stats: new Player(scout, 350, 300, 500, 250, 150),
            moveset: [{
                name: 'Sparkling Wide Pressure!',
                pow: 300, 
            }, {
                name: 'Supreme Thunder!',
                pow: 400,
            }],
        };
    case "mars":
        return {
            stats: new Player(scout, 350, 400, 350, 350, 200),
            moveset: [{
                name: 'Fire Soul!',
                pow: 300,
            }, {
                name: 'Mars Flame Sniper!',
                pow: 400,
            }],
        };
    case "neptune":
        return {
            stats: new Player(scout, 350, 450, 550, 450, 400),
            moveset: [{
                name: 'Deep Submerge!',
                pow: 300,
            }, {
                name: 'Submarine Violon Tide!',
                pow: 400,
            }],
        };
    case "chibiusa":
        return {
            stats: new Player(scout, 350, 250, 150, 250, 200),
            moveset: [{
                name: 'Moon Princess Halation!',
                pow: 300,
            }, {
                name: 'Rainbow Double Moon Heartache!',
                pow: 350,
            }],
        };
    case "pluto":
        return {
            stats: new Player(scout, 350, 550, 700, 350, 300),
            moveset: [{
                name: 'Dead Scream....',
                pow: 500,
            }, {
                name: 'Chronos Typhoon',
                pow: 400,
            }],
        };
    case "saturn":
        return {
            stats: new Player(scout, 350, 750, 800, 450, 300),
            moveset: [{
                name: 'Death Reborn Revolution',
                pow: 500,
            }, {
                name: 'Silence Glaive Surprise',
                pow: 400,
            }],
        };
    case "mercury":
        return {
            stats: new Player(scout, 350, 400, 350, 550, 400),
            moveset: [{
                name: 'Mercury Aqua Rhapsody',
                pow: 350,
            }, {
                name: 'Shine Aqua Illusion',
                pow: 350,
            }],
        };
    case "venus":
        return {
            stats: new Player(scout, 350, 400, 400, 550, 400),
            moveset: [{
                name: 'Venus Love-Me Chain!',
                pow: 400,
            }, {
                name: 'Crescent Beam',
                pow: 400,
            }],
        };
    case "uranus":
        return {
            stats: new Player(scout, 350, 450, 600, 550, 400),
            moveset: [{
                name: 'Space Sword Blaster',
                pow: 450,
            }, {
                name: 'World Shaking!',
                pow: 500,
            }],
        };
    }
}
