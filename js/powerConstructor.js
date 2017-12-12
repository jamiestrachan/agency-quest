AQ.PowerObject = function () {
	/// create object
	var thePowObj = {}; // could be empty object or constructor of object to inherit from
	
	/// private members
	var private = true;
	
	/// public members
	thePowObj.public = true;
	
	/// private functions
	function privateFunction() {
	};
	
	/// priviledged functions
	thePowObj.publicFunction = function () {
	};
	
	/// return object
	return thePowObj;
}
