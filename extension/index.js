module.exports = function (nodecg) {
	nodecg.Replicant('leftScore', {defaultValue: '0'});
	nodecg.Replicant('rightScore', {defaultValue: '0'});

	nodecg.Replicant('Team1Name', {defaultValue: 'Team 1'});
	nodecg.Replicant('Team1ColourP', {defaultValue: '#ff0000'});
	nodecg.Replicant('Team1ColourS', {defaultValue: '#0000ff'});
	nodecg.Replicant('Team1Logo');

	nodecg.Replicant('Team2Name', {defaultValue: 'Team 2'});
	nodecg.Replicant('Team2ColourP', {defaultValue: '#0000ff'});
	nodecg.Replicant('Team2ColourS', {defaultValue: '#ff0000'});
	nodecg.Replicant('Team2Logo');

	nodecg.Replicant('SideLogosVisible', {defaultValue: true});
	nodecg.Replicant('LeftSideIcon', {defaultValue: 'attack'});
	nodecg.Replicant('RightSideIcon', {defaultValue: 'defense'});

	nodecg.Replicant('TeamLogos');
};
