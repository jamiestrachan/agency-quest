AQ.Company = function () {
	/// create object
	var theCompany = {}; // could be empty object or constructor of object to inherit from
	
	/// private members
	var experience = 0;
	var level = 1;
	var coffers = 0;
	
	function calculateLevel () {
		var oldLevel = level;
		level = 1; // some calculation belongs here
		if (oldLevel !== level) {
			// level up! do something
		}
	};
	
	/// priviledged functions
	theCompany.addExperience = function (xp) {
		experience += xp;
		calculateLevel();
	};
	
	theCompany.earnMoney = function (amt) {
		coffers += amt;
	};
	
	theCompany.spendMoney = function (amt) {
		coffers -= amt;
	};
	
	/// return object
	return theCompany;
}
