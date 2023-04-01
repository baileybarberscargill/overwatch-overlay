//Define replicants
const TeamName = nodecg.Replicant('Team2Name');
const TeamColourP = nodecg.Replicant('Team2ColourP');
const TeamColourS = nodecg.Replicant('Team2ColourS');
const TeamLogo = nodecg.Replicant('Team2Logo');
const TeamLogos = nodecg.Replicant('assets:teamlogos');

//Define inputs
const teamNameInput = document.getElementById('inputTeamName');
const teamColourPInput = document.getElementById('inputTeamColorP');
const teamColourSInput = document.getElementById('inputTeamColorS');
const teamLogoInput = document.getElementById('inputTeamLogo');
const teamLogoPreview = document.getElementById('teamLogo');

//Update values on panel
TeamName.on('change', value => {
    teamNameInput.value = value;
    document.getElementById('TeamName').innerHTML = value;
});

TeamColourP.on('change', value => {
    teamColourPInput.value = value;
    document.getElementById('PanelBackground').style.backgroundColor = value;
});

TeamColourS.on('change', value => {
    teamColourSInput.value = value;
    document.getElementById('PanelBackground').style.color = value;
});

TeamLogo.on('change', value => {
    teamLogoInput.value = value;
    teamLogoPreview.src = value;
    TeamLogo.value = value;
});

TeamLogos.on('change', newValue => {
    // newValue will be the updated array
    // Update the select element with the new options
    teamLogoInput.innerHTML = '';

    if (newValue.length === 0) {
        const option = document.createElement('option');
        option.text = 'No Logos';
        option.disabled = true;
        teamLogoInput.appendChild(option);
        teamLogoInput.selectedIndex = 0;
        TeamLogo.value = "";
    } else {
        newValue.forEach((item, index) => {
            const option = document.createElement('option');
            option.text = item.base;
            option.value = item.url;

            // Create an img element for the thumbnail
            const img = document.createElement('img');
            img.src = item.url;
            img.style.width = '100%';
            img.style.height = '50px';
            option.prepend(img); // Add the thumbnail before the option text

            teamLogoInput.appendChild(option);

            if (newValue.length === 1 && index === 0) {
                teamLogoInput.selectedIndex = -1;
            }
        });
    }
});

//Add listeners
teamNameInput.addEventListener('change', event => {
    TeamName.value = event.target.value;
    document.getElementById('TeamName').innerHTML = event.target.value;
})

teamColourPInput.addEventListener('change', event => {
    TeamColourP.value =  event.target.value;
    document.getElementById('PanelBackground').style.backgroundColor = event.target.value;
});

teamColourSInput.addEventListener('change', event => {
    TeamColourS.value =  event.target.value;
    document.getElementById('PanelBackground').style.color = event.target.value;
});

teamLogoInput.addEventListener('change', () => {
    const selectedFile = teamLogoInput.options[teamLogoInput.selectedIndex];
    teamLogoPreview.src = selectedFile.value;
    teamLogoInput.selectedIndex = teamLogoInput.selectedIndex;
    TeamLogo.value = selectedFile.value;
});
