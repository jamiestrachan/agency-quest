AQ.Project = function (size, team) {
	/// create object
	var theProject = {};
	
	/// private members
	var client;
	var clientSatisfaction = 100;
	var timeline = 8;
	var budget;
	var scope = 10;
	var disorder;
	
	/// priviledged methods
	theProject.scope = function () {
		return scope;
	};

	theProject.timeline = function () {
		return timeline;
	};
	
	theProject.diminshScope = function (amt) {
		scope -= amt;
	};
	
	theProject.spendTime = function () {
		timeline -= 1;
	};
	
	theProject.isOver = function () {
		return (scope <= 0);
	};
	
	/// constructor
	
	/// return object
	return theProject;
}
