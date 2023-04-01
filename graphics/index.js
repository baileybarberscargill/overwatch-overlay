const leftScore = nodecg.Replicant('leftScore');
const rightScore = nodecg.Replicant('rightScore');

const Team1Name = nodecg.Replicant('Team1Name')
const Team1ColourP = nodecg.Replicant('Team1ColourP');
const Team1ColourS = nodecg.Replicant('Team1ColourS');
const Team1Logo = nodecg.Replicant('Team1Logo');

const Team2Name = nodecg.Replicant('Team2Name')
const Team2ColourP = nodecg.Replicant('Team2ColourP');
const Team2ColourS = nodecg.Replicant('Team2ColourS');
const Team2Logo = nodecg.Replicant('Team2Logo');

const SideLogosVisible = nodecg.Replicant('SideLogosVisible')
const leftSideIcon = nodecg.Replicant('LeftSideIcon');
const rightSideIcon = nodecg.Replicant('RIghtSideIcon');

leftScore.on('change', value => {
    document.getElementById('LeftScore').innerHTML = value;
});

rightScore.on('change', value => {
    document.getElementById('RightScore').innerHTML = value;
});

//TEAM 1 INFO
Team1Name.on('change', value => {
    document.getElementById('LeftTeamName').innerHTML = value;
});
Team1ColourP.on('change', value => {
    document.getElementById('LeftTeam').style.backgroundColor = value;
});
Team1ColourS.on('change', value => {
    document.getElementById('LeftTeamName').style.color = value;
});
Team1Logo.on('change', value => {
    document.getElementById('LeftTeamLogo').src = value;
});


//TEAM 2 INFO
Team2Name.on('change', value => {
    document.getElementById('RightTeamName').innerHTML = value;
});
Team2ColourP.on('change', value => {
    document.getElementById('RightTeam').style.backgroundColor = value;
});
Team2ColourS.on('change', value => {
    document.getElementById('RightTeamName').style.color = value;
});
Team2Logo.on('change', value => {
    document.getElementById('RightTeamLogo').src = value;
});

//OTHER INFO UPDATING
SideLogosVisible.on('change', value => {
    if (value === true) {
        document.getElementById('leftside').style.display = "block";
        document.getElementById('rightside').style.display = "block";
    }
    else {
        document.getElementById('leftside').style.display = "none";
        document.getElementById('rightside').style.display = "none";
    }
});

leftSideIcon.on('change', value => {
    if (value === "attack") {
        document.getElementById('leftsideicon').src = "resources/Attack.png";
        document.getElementById('rightsideicon').src = "resources/Defense.png";
    }
    else {
        document.getElementById('leftsideicon').src = "resources/Defense.png";
        document.getElementById('rightsideicon').src = "resources/Attack.png";
    }
});