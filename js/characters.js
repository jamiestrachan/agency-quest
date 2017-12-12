AQ.Character = function () {
	/// create object
	var theCharacter = {};
	
	/// private members
	// info
	var name;
	var gender;
	// stats
	var drive;
	var skills;
	var organization;
	var savvy;
	var agreeableness;
	var perception;
	// battle properties
	var morale;
	var productivity;
	// class
	var role;
	// status
	var status;
	// other
	var nameList = ["Bill", "Jamie", "Linda", "Joan"];
	
	/// public members
	
	/// private functions
	function generateName() {
		return nameList[Math.floor(Math.random() * nameList.length)];
	}
	
	function generateStat(low, high) {
		return Math.floor(Math.random() * (high - low + 1) + low);
	}
	
	/// priviledged functions
	theCharacter.toString = function () {
		return "Name: " + name +
			", Role: " + role +
			", Drive: " + drive +
			", Skills: " + skills +
			", Organization: " + organization +
			", Savvy: " + savvy +
			", Agreeableness: " + agreeableness +
			", Perception: " + perception;
	};
	
	theCharacter.setName = function (newName) {
		name = newName;
	};
	
	theCharacter.generateRole = function () {
		var roles = [AQ.Workhorse, AQ.RockStar, AQ.ProjectManager, AQ.AccountManager];
		var selectedRole = roles[Math.floor(Math.random() * roles.length)];
		return selectedRole();
	};
	
	theCharacter.setRole = function (newRole) {
		role = newRole;
	};
	
	theCharacter.randomizeStats = function () {
		drive = generateStat(1,15);
		skills = generateStat(1,15);
		organization = generateStat(1,15);
		savvy = generateStat(1,15);
		agreeableness = generateStat(1,15);
		perception = generateStat(1,15);
	};
	
	theCharacter.setStats = function (stats) {
		drive = stats[0];
		skills = stats[1];
		organization = stats[2];
		savvy = stats[3];
		agreeableness = stats[4];
		perception = stats[5];
	};

	theCharacter.createRandom = function () {
		name = generateName();
		theCharacter.randomizeStats();
		role = theCharacter.generateRole();
	};
	
	theCharacter.getActions = function () {
		return role.getActions(theCharacter);
	};
	
	theCharacter.isPlayer = function () {
		return false;
	};
	
	/// return object
	return theCharacter;
}

AQ.Player = function () {
	/// create object
	var thePlayer = AQ.Character();
	
	/// private members
	
	/// public members

	/// private methods
	
	/// priviledged methods
	thePlayer.isPlayer = function () {
		return true;
	};
	
	/// constructor
	thePlayer.setRole(AQ.Entrepreneur());
	
	/// return object
	return thePlayer;
}

AQ.Employee = function () {
	/// create object
	var theEmployee = AQ.Character();

	/// public members
	
	/// return object
	return theEmployee;
}
