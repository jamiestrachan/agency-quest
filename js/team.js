AQ.Team = function (initialMember) {
	/// create object
	var theTeam = {};
	
	/// public members
	theTeam.members = [];
	
	/// priviledged functions
	theTeam.addMember = function (newMember) {
		theTeam.members.push(newMember);
	};

	/// constructor
	theTeam.members.push(initialMember);
	
	/// return object
	return theTeam;
}
