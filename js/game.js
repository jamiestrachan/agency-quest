AQ.Game = function (canvasId) {
	/// create object
	var theGame = {}; // could be empty object or constructor of object to inherit from
	
	/// private members
	var gamestate;
	var GAMESTATE_OVER = 0;
	var GAMESTATE_NEWGAME = 1;
	var GAMESTATE_PROJECTSTARTING = 2;
	var GAMESTATE_PROJECT = 3;
	var GAMESTATE_PROJECTOVER = 4;
	var GAMESTATE_BOARDROOM = 5;
	var playArea;
	var display;
	var player;
	var team;
	var company;
	var project;
	var characterActions = [], teamActions = [];
	var i, l;
	
	/// private functions
	function notImplementedYet () {
		alert("Sorry, this isn't implemented yet");
	}
	
	function gameMenu (commands) {
		display.renderGameMenu(commands, handleGameMenu);
	}
	
	function handleGameMenu (command) {
		command.perform();
		continueGame();
	}
	
	function actionMenu (commands) {
		display.renderActionMenu(commands, handleActionMenu);
	}
	
	function handleActionMenu (command) {
		teamActions.push(command);
		continueGame();
	}
	
	function companyMenu (commands) {
		display.renderCompanyMenu(commands, handleCompanyMenu);
	}
	
	function handleCompanyMenu (command) {
		command.perform();
		continueGame();
	}
	
	function setupNewGame() {
		if (!player) {
			createPlayer();
		} else if (!team) {
			createTeam();
		} else if (!company) {
			createCompany();
		} else if (!project) {
			createFirstProject();
		} else {
			gamestate = GAMESTATE_NEWGAME;
			continueGame();
		}
	}
	
	function createPlayer () {
		if (!player) {
			display.renderPlayerNameForm(setPlayerName);
		} else {
			display.renderPlayerStatsForm(setPlayerStats);
		}
	}
	
	function setPlayerName(name) {
		player = AQ.Player();
		player.setName(name);
		createPlayer();
	}
	
	function setPlayerStats(stats) {
		player.setStats(stats);
		setupNewGame();
	}

	function createTeam () {
		team = AQ.Team(player);
		setupNewGame();
	}

	function createCompany () {
		company = AQ.Company();
		setupNewGame();
	}

	function createFirstProject () {
		project = AQ.Project();
		setupNewGame();
	}
	
	function createNewProject (team) {
		project = AQ.Project();
		gamestate = GAMESTATE_PROJECTSTARTING;
	}
	
	function playCutscene () {
	}

	function continueGame() {
		var i, l;
		
		gameloop: while ((gamestate === GAMESTATE_NEWGAME) || (gamestate === GAMESTATE_PROJECTSTARTING) || (gamestate === GAMESTATE_PROJECT) || (gamestate === GAMESTATE_PROJECTOVER) || (gamestate === GAMESTATE_BOARDROOM)) {
			playCutscene();
			if (gamestate === GAMESTATE_NEWGAME) { // any first time game stuff
				gamestate = GAMESTATE_PROJECTSTARTING;
			}
			if (gamestate === GAMESTATE_PROJECTSTARTING) { // init project
				display.clearDisplay();
				display.renderProjectStatus(project);
				gamestate = GAMESTATE_PROJECT;
			}
			if (gamestate === GAMESTATE_PROJECT) { // project loop
				if (teamActions.length < team.members.length) { // still need to collect actions
					characterActions = team.members[teamActions.length].getActions();
					actionMenu(characterActions);
					break gameloop;
				} else { // perform actions
					project.spendTime();
					l = teamActions.length;
					actionloop: for (i = 0; i < l; i++) {
						teamActions[i].perform(team.members[i], null, team, company, project);
						if (project.isOver()) {
							gamestate = GAMESTATE_PROJECTOVER;
							break actionloop;
						}
						display.renderProjectStatus(project);
					}
					teamActions = [];
				}
			}
			if (gamestate === GAMESTATE_PROJECTOVER) { // get paid
				display.clearDisplay();
				display.showMessage("Project finished!");
				gamestate = GAMESTATE_BOARDROOM;
			}
			if (gamestate === GAMESTATE_BOARDROOM) { // boardroom loop
				AQ.CompanyActions.startProject.perform = createNewProject;
				AQ.CompanyActions.teamBuild.perform = notImplementedYet;
				companyMenu([AQ.CompanyActions.startProject, AQ.CompanyActions.teamBuild]);
				break gameloop;
			}
		}
		if (gamestate === GAMESTATE_OVER) { // ending
			
		}
	}

	/// priviledged functions
	theGame.start = function () {
		display = AQ.Display(canvasId);
		AQ.MenuActions.startGame.perform = setupNewGame;
		AQ.MenuActions.loadGame.perform = notImplementedYet;
		gameMenu([AQ.MenuActions.startGame, AQ.MenuActions.loadGame]);
	};
	
	/// return object
	return theGame;
}