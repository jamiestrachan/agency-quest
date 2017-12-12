AQ.Role = function () {
	/// create object
	var theRole = {}; // could be empty object or constructor of object to inherit from
	
	/// private members
	
	/// public members
	theRole.name = "";
	theRole.description = "";
	
	/// private functions
	
	/// priviledged functions
	theRole.toString = function () {
		return theRole.name;
	};
	
	theRole.getActions = function (character) {
		return [AQ.CharacterActions.work, AQ.CharacterActions.vacation];
	};
	
	/// return object
	return theRole;
}

AQ.Entrepreneur = function () {
	/// create object
	var theEntrepreneur = AQ.Role();
	
	/// private members
	
	/// public members
	theEntrepreneur.name = "Entrepreneur";
	
	/// private functions
	
	/// priviledged functions
	theEntrepreneur.getActions = function (character) {
		return [AQ.CharacterActions.work, AQ.CharacterActions.vacation];
	};
	
	/// return object
	return theEntrepreneur;
}

AQ.Intern = function () {
	/// create object
	var theIntern = AQ.Role();
	
	/// private members
	
	/// public members
	theIntern.name = "Intern";
	
	/// private functions
	
	/// priviledged functions
	theIntern.getActions = function (character) {
		return [AQ.CharacterActions.work];
	};
	
	/// return object
	return theIntern;
}

AQ.Workhorse = function () {
	/// create object
	var theWorkhorse = AQ.Role();
	
	/// private members
	
	/// public members
	theWorkhorse.name = "Workhorse";
	
	/// private functions
	
	/// priviledged functions
	
	/// return object
	return theWorkhorse;
}

AQ.RockStar = function () {
	/// create object
	var theRockStar = AQ.Role();
	
	/// private members
	
	/// public members
	theRockStar.name = "Rock Star";
	
	/// private functions
	
	/// priviledged functions
	
	/// return object
	return theRockStar;
}

AQ.ProjectManager = function () {
	/// create object
	var theProjectManager = AQ.Role();
	
	/// private members
	
	/// public members
	theProjectManager.name = "Project Manager";
	
	/// private functions
	
	/// priviledged functions
	
	/// return object
	return theProjectManager;
}

AQ.AccountManager = function () {
	/// create object
	var theAccountManager = AQ.Role();
	
	/// private members
	
	/// public members
	theAccountManager.name = "Account Manager";
	
	/// private functions
	
	/// priviledged functions
	
	/// return object
	return theAccountManager;
}