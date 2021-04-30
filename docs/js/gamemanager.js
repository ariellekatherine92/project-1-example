let player;
let computer;

const scoutHealth = document.querySelector('.scout-health');
const scoutImage = document.querySelector('.scout-image');
const scoutName = document.querySelector('.scout-name');
const scoutStats = document.querySelector('.scout-stats');

const villainHealth = document.querySelector('.villain-health');
const villainImage = document.querySelector('.villain-image');
const villainName = document.querySelector('.villain-name');
const villainStats = document.querySelector('.villain-stats');

function startFight(scout) {
    // Set scout display
    player = setPlayer(scout);

    scoutHealth.innerHTML = `Health: ${player.stats.health}`;

    scoutImage.style.backgroundImage = `url('img/scouts/${scouts[scout].img}')`;

    const scoutTitle = document.createElement('h3');
    scoutTitle.innerHTML = scouts[scout].name;

    scoutName.append(scoutTitle);
    
    const statsTable = document.createElement('table');
    statsTable.innerHTML = `
        <tr><td>Mana:</td><td>${player.stats.mana}</td></tr>
        <tr><td>Strength:</td><td>${player.stats.strength}</td></tr>
        <tr><td>Agility:</td><td>${player.stats.agility}</td></tr>
        <tr><td>Speed:</td><td>${player.stats.speed}</td></tr>
    `;
    
    scoutStats.append(statsTable);

    // Set villian display
    computer = setVillain();

    villainHealth.innerHTML = `Health: ${computer.stats.health}`;

    villainImage.style.backgroundImage = `url('img/villains/${computer.img}')`;

    const villainTitle = document.createElement('h3');
    villainTitle.innerHTML = computer.stats.name;

    villainName.append(villainTitle);

    const villainStatsTable = document.createElement('table');
    villainStatsTable.innerHTML = `
        <tr><td>Mana:</td><td>${computer.stats.mana}</td></tr>
        <tr><td>Strength:</td><td>${computer.stats.strength}</td></tr>
        <tr><td>Agility:</td><td>${computer.stats.agility}</td></tr>
        <tr><td>Speed:</td><td>${computer.stats.speed}</td></tr>
    `;
    
    villainStats.append(villainStatsTable);

    // Set moveset picker
    const movesetSelect = document.createElement('select');
    
    player.moveset.forEach(move => {
        const option = document.createElement('option');
        option.value = move.pow;
        option.innerHTML = move.name;
        movesetSelect.append(option);
    });

    const btnAttack = document.createElement('button');
    btnAttack.addEventListener('click', () => {
        playerAttack(player, computer);
    });
    btnAttack.innerHTML = 'Attack!';
    
    movesetContainer.prepend(movesetSelect);
    movesetContainer.append(btnAttack);
}

const audio = document.getElementById('audio');
const playPauseBTN = document.getElementById('playPauseBTN');

const PLAY = "Play &#9658;";
const PAUSE = "Pause &#9208;";

let audioPlaying = false;

function playPause() {
    if (!audioPlaying) {
        audio.play();
        audioPlaying = true;
        playPauseBTN.innerHTML = PAUSE;
    } else {
        audio.pause();
        audioPlaying = false;
        playPauseBTN.innerHTML = PLAY;
    }
}

function stop() {
    audio.pause();
    audioPlaying = false;
    audio.currentTime = 0;
    playPauseBTN.innerHTML = PLAY;
}
