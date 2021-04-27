let GameManager = {
  setGameStart: function (classType) {
    this.resetPlayer(classType);
    this.setPreFight();
  },
  resetPlayer: function (classType) {
    let imgName;
    switch (classType) {
        case "Sailor Moon":
            player = new Player(classType, 350, 500, 650, 150, 100);
            imgName = '';
            break;
        case "Sailor Jupiter":
            player = new Player(classType, 350, 300, 500, 250, 150);
            imgName = 'sailor%20jupiter.jpg';
            break;
        case "Sailor Mars":
            player = new Player(classType, 350, 400, 350, 350, 200);
            imgName = '';
            break;
        case "Sailor Neptune":
            player = new Player(classType, 350, 450, 550, 450, 400);
            imgName = '';
            break;
        case "Sailor Chibiusa":
            player = new Player(classType, 350, 250, 150, 250, 200);
            imgName = '';
            break;
        case "Sailor Pluto":
            player = new Player(classType, 350, 550, 700, 350, 300);
            imgName = '';
            break;
        case "Sailor Saturn":
            player = new Player(classType, 350, 750, 800, 450, 300);
            imgName = '';
            break;
        case "Sailor Mercury":
            player = new Player(classType, 350, 400, 350, 550, 400);
            imgName = '';
            break;
        case "Sailor Venus":
            player = new Player(classType, 350, 400, 400, 550, 400);
            imgName = '';
            break;
        case "Sailor Uranus":
            player = new Player(classType, 350, 450, 600, 550, 400);
            imgName = '';
            break;
        }

        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="img/' + imgName + '" class="img=avatar" />' +
        '<div><h3>' + classType + 
        '</h3> <p class = "health-player">Health:' + player.health + 
        '</p> <p>Mana:' + player.mana + 
        '</p> <p>Strength:' + player.strength + 
        '</p>  <p>Agility:' + player.agility + 
        '</p> <p>Speed:' + player.speed + '</p><div>';

    },
    setPreFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Task: Find a villain! <p>';
        //getActions.innerHtml = '<a href= "#" class= "btn-prefight" onclick="GameManager.setFight()">Find a Villain!</a>';
        getActions.innerHtml = '<p class="btn-prefight" onclick="GameManager.setFight()">Find a Villain!</p>';
        getArena.style.visibility = 'visible';
        let button = document.createElement('button');
        button.textContent = 'Find a Villian';
        button.addEventListener('click', GameManager.setFight);
        getActions.append(button);
        console.log(getActions);
        // let findVillianButton = document.createElement('button');
        // findVillianButton.textContent = 'Task: Find a villain!';
        // findVillianButton.onclick = GameManager.setFight();
        // findVillianButton.setAttribute('class', 'btn-prefight');
        // getHeader.append(findVillianButton);
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
        switch (chooseRandomVillain) {
            case 0:
                villain = villain00;
                break;
            case 1:
                villain = villain01;
                break;
            case 2:
                villain = villain02;
                break;
            case 3:
                villain = villain03;
                break;
            case 4:
                villain = villain04;
                break;
            case 5: 
                villain = villain05;
                break;
        }
        getHeader.innerHTML = '<p>Task: Choose your move!</p>';
        getActions.innerHTML= '<a href= "#" class= "btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
        getVillain.innerHTML = `<img src="img/avatar-villain/${villain.classType.toLowerCase()}"` + 
        '.jpg" class="img=avatar"/><div><h3>' + villain.classType + 
        '</h3> <p>Health:' + villain.health + 
        '</p> <p>Mana:' + villain.mana + 
        '</p> <p>Strength:' + villain.strength + 
        '</p>  <p>Agility:' + villain.agility + 
        '</p> <p>Speed:' + villain.speed + '</p><div>';
    }
  }
  

  

