let moveset = [];

let GameManager = {
    setGameStart: function (classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function (classType) {
        let imgName;

        switch (classType) {
        case "moon":
            player = new Player(classType, 350, 500, 650, 150, 100);
            imgName = 'SailorMoonMainImage.png';
            moveset = [{
                name: 'Moon Tiara Action!',
                pow: 250,
            }, {
                name: 'Moon Gorgeous Meditation',
                pow: 450,
            }];
            break;
        case "jupiter":
            player = new Player(classType, 350, 300, 500, 250, 150);
            imgName = 'sailor%20jupiter.jpg';
            moveset = [{
                name: 'Sparkling Wide Pressure!',
                pow: 300, 
            }, {
                name: 'Supreme Thunder!',
                pow: 400,
            }];
            break;
        case "mars":
            player = new Player(classType, 350, 400, 350, 350, 200);
            imgName = 'sailor%20mars.png';
            moveset = [{
            name: 'Fire Soul!',
            pow: 300,
        }, {
            name: 'Mars Flame Sniper!',
            pow: 400,
        }];
            break;
        case "neptune":
            player = new Player(classType, 350, 450, 550, 450, 400);
            imgName = 'sailor%20neptune.png';
            moveset = [{
                name: 'Deep Submerge!',
                pow: 300,
            }, {
                name: 'Submarine Violon Tide!',
                pow: 400,
            }];
            break;
        case "chibiusa":
            player = new Player(classType, 350, 250, 150, 250, 200);
            imgName = 'sailorchibiusa.jpg';
            moveset = [{
                name: 'Moon Princess Halation!',
                pow: 300,
            }, {
                name: 'Rainbow Double Moon Heartache!',
                pow: 350,
            }];
            break;
        case "pluto":
            player = new Player(classType, 350, 550, 700, 350, 300);
            imgName = 'sailorpluto.jpeg';
            moveset = [{
                name: 'Dead Scream....',
                pow: 500,
            }, {
                name: 'Chronos Typhoon',
                pow: 400,
            }];
            break;
        case "saturn":
            player = new Player(classType, 350, 750, 800, 450, 300);
            imgName = 'sailorsaturn.jpeg';
            moveset = [{
                name: 'Death Reborn Revolution',
                pow: 500,
            }, {
                name: 'Silence Glaive Surprise',
                pow: 400,
            }];
            break;
        case "mercury":
            player = new Player(classType, 350, 400, 350, 550, 400);
            imgName = 'sailormercury.jpg';
            moveset = [{
                name: 'Mercury Aqua Rhapsody',
                pow: 350,
            }, {
                name: 'Shine Aqua Illusion',
                pow: 350,
            }];
            break;
        case "venus":
            player = new Player(classType, 350, 400, 400, 550, 400);
            imgName = 'sailorvenus.png';
            moveset = [{
                name: 'Venus Love-Me Chain!',
                pow: 400,
            }, {
                name: 'Crescent Beam',
                pow: 400,
            }];
            break;
        case "uranus":
            player = new Player(classType, 350, 450, 600, 550, 400);
            imgName = 'sailoruranus.jpg';
            moveset = [{
                name: 'Space Sword Blaster',
                pow: 450,
            }, {
                name: 'World Shaking!',
                pow: 500,
            }];
            break;
        }

        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="img/' + imgName + '" class="img=avatar" />' +
        '<div><h3>' + classType + 
        '</h3> <p class="health-player">Health:' + player.health + 
        '</p> <p>Mana:' + player.mana + 
        '</p> <p>Strength:' + player.strength + 
        '</p>  <p>Agility:' + player.agility + 
        '</p> <p>Speed:' + player.speed + '</p><div>';

    },
    getMoveset: function() {
        console.log(this);
        return this.moveset;
    },
    setPreFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Task: Find a villain! <p>';
        getActions.innerHtml = '<p class="btn-prefight" onclick="GameManager.setFight()">Find a Villain!</p>';
        getArena.style.visibility = 'visible';
        let button = document.createElement('button');
        button.textContent = 'Find a Villian';
        button.addEventListener('click', GameManager.setFight);
        getActions.append(button);
        console.log(getActions);
    },
    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getVillain = document.querySelector(".villain");
        //Create Villain!!
        let villain00 = new Villain("Black Lady", 250, 350, 250, 200, 200);
        let villain01 = new Villain("Kaolinute", 350, 350, 300, 200, 300);
        let villain02 = new Villain("Doctor Tomoe", 400, 350, 300, 200, 250);
        let villain03 = new Villain("Queen Metalia", 450, 350, 300, 200, 250);
        let villain04 = new Villain("Mistress 9", 500, 350, 500, 200, 250);
        let villain05 = new Villain("Sailor Galaxia", 600, 600, 600, 200, 400);
        let chooseRandomVillain = Math.floor(Math.random() * Math.floor(6));
        console.log(getHeader);
        let imgName;
        switch (chooseRandomVillain) {
            case 0:
                villain = villain00;
                imgName = 'blacklady.jpg';
                break;
            case 1:
                villain = villain01;
                imgName = 'kaolinite.jpg';
                break;
            case 2:
                villain = villain02;
                imgName = 'Doctor_Tomoe.jpg';
                break;
            case 3:
                villain = villain03;
                imgName = 'queenmetalia.jpg';
                break;
            case 4:
                villain = villain04;
                imgName = 'Mistress_9-Crystal.jpg';
                break;
            case 5: 
                villain = villain05;
                imgName = 'Sailor_Galaxia.jpg'
                break;
        }
        console.log(moveset);
        // const moveset = this.getMoveset();
        const moveOpts = moveset.map(move => {
            return `<option value=${move.pow}>${move.name}</option>`;
        });

        getHeader.innerHTML = '<p>Task: Choose your move!</p>' +
            '<select>' + moveOpts.join('') + '</select>';
        getActions.innerHTML= '<a href= "#" class= "btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
        getVillain.innerHTML = `<img src="img/avatar-villain/${imgName}"` + 
        + ' class="img=avatar"/><div><h3>' + villain.classType + 
        '</h3> <p class="health-villain">Health:' + villain.health + 
        '</p> <p>Mana:' + villain.mana + 
        '</p> <p>Strength:' + villain.strength + 
        '</p>  <p>Agility:' + villain.agility + 
        '</p> <p>Speed:' + villain.speed + '</p><div>';
    }
}

let audio = document.getElementById('audio');
let playPauseBTN = document.getElementById('playPauseBTN');
let count = 0;

function playPause() {
    if (count == 0) {
        count = 1;
        audio.play();
        playPauseBTN.innerHTML = "Pause &#9208;"
    } else {
        count = 0;
        audio.pause();
        playPauseBTN.innerHTML = "Play &#9658;"
    }
}

function stop() {
    playPause()
    audio.pause();
    audio.currentTime = 0;
    playPauseBTN.innerHTML = "Play &#9658;";
    
}
  

