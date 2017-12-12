AQ.MenuActions = {};
AQ.MenuActions.startGame = {
	title: "Start new game",
	description: ""
}
AQ.MenuActions.loadGame = {
	title: "Load game",
	description: ""
}

AQ.CharacterActions = {};
AQ.CharacterActions.work = {
	title: "Work",
	description: "",
	perform: function (actor, target, team, company, project) {
		project.diminshScope(5);
	}
};
AQ.CharacterActions.vacation = {
	title: "Vacation",
	description: "",
	perform: function (actor, target, team, company, project) {
	}
};

AQ.CompanyActions = {};
AQ.CompanyActions.teamBuild = {
	title: "Team Build",
	description: "",
	perform: function (target, team, company) {
	}
};
AQ.CompanyActions.startProject = {
	title: "Start New Project",
	description: "",
	perform: function (target, team, company) {
	}
};