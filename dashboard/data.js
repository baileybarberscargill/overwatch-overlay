// Define left score replicant from overlay
const leftScore = nodecg.Replicant('leftScore');
const rightScore = nodecg.Replicant('rightScore');
const sidesVisible = nodecg.Replicant('SideLogosVisible');
const leftSideIcon = nodecg.Replicant('LeftSideIcon');
const rightSideIcon = nodecg.Replicant('RIghtSideIcon');

//Replicants needed for swapping all data
const Team1Name = nodecg.Replicant('Team1Name', {defaultValue: 'Team 1'});
const Team1ColourP = nodecg.Replicant('Team1ColourP', {defaultValue: '#ff0000'});
const Team1ColourS = nodecg.Replicant('Team1ColourS', {defaultValue: '#0000ff'});
const Team1Logo = nodecg.Replicant('Team1Logo');

const Team2Name = nodecg.Replicant('Team2Name', {defaultValue: 'Team 2'});
const Team2ColourP = nodecg.Replicant('Team2ColourP', {defaultValue: '#0000ff'});
const Team2ColourS = nodecg.Replicant('Team2ColourS', {defaultValue: '#ff0000'});
const Team2Logo = nodecg.Replicant('Team2Logo');

// Define input left score from panel
const inputLeftScore = document.getElementById('inputLeftScore');
const inputRightScore = document.getElementById('inputRightScore');
const hideSidesButton = document.getElementById('hideSideIconsBtn');
const swapSidesButton = document.getElementById('swapSideIconsBtn');
const swapAllDataButton = document.getElementById('swapAllBtn');

// Update data panel
leftScore.on('change', value => {
    inputLeftScore.value = value;
});

rightScore.on('change', value => {
    inputRightScore.value = value;
});

sidesVisible.on('change', value => {
    hideSidesButton.innerHTML = value ? 'Hide Sides' : 'Show Sides';
    hideSidesButton.style.backgroundColor = value ? '#ff4a4a' : '#69de4b';
});

// Add listeners
inputLeftScore.addEventListener('change', event => {
    leftScore.value = event.target.value;
});

inputRightScore.addEventListener('change', event => {
    rightScore.value = event.target.value;
});

hideSidesButton.addEventListener('click', () => {
    if (sidesVisible.value === true) {
        sidesVisible.value = false;
    } else {
        sidesVisible.value = true;
    }
});

let clickedOnce = false;

function swapSideIcons() {
    if (leftSideIcon.value === "attack") {
        leftSideIcon.value = "defense";
        rightSideIcon.value = "attack";
    } else {
        leftSideIcon.value = "attack";
        rightSideIcon.value = "defense";
    }
}

swapSidesButton.addEventListener('click', () => {
    if (!clickedOnce) {
        swapSideIcons();
        clickedOnce = true;
        swapSidesButton.style.backgroundColor = "#26e2ff";
        swapSidesButton.innerHTML = "Sides Changed!";
        setTimeout(() => {
            clickedOnce = false;
            swapSidesButton.style.backgroundColor = "";
            swapSidesButton.innerHTML = "Swap Sides Icons";
        }, 1000);
    }
});

swapAllDataButton.addEventListener('click', () => {
    // swap left and right scores
    let tempScore = leftScore.value;
    leftScore.value = rightScore.value;
    rightScore.value = tempScore;

    // swap side icons
    swapSideIcons();

    // update input values
    inputLeftScore.value = leftScore.value;
    inputRightScore.value = rightScore.value;

    // Swap Team1 and Team2 replicant data
    let tempTeam = {
        name: Team1Name.value,
        colorPrimary: Team1ColourP.value,
        colorSecondary: Team1ColourS.value,
        logo: Team1Logo.value,
    };

    Team1Name.value = Team2Name.value;
    Team1ColourP.value = Team2ColourP.value;
    Team1ColourS.value = Team2ColourS.value;
    Team1Logo.value = Team2Logo.value;

    Team2Name.value = tempTeam.name;
    Team2ColourP.value = tempTeam.colorPrimary;
    Team2ColourS.value = tempTeam.colorSecondary;
    Team2Logo.value = tempTeam.logo;

    clickedOnce = true;
    swapAllDataButton.style.backgroundColor = "#ffbf00";
    swapAllDataButton.innerHTML = "Swapped Data!";
    setTimeout(() => {
        clickedOnce = false;
        swapAllDataButton.style.backgroundColor = "";
        swapAllDataButton.innerHTML = "SWAP ALL DATA";
    }, 1000);
});



