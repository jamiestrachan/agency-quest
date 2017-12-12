AQ.Display = function (canvasId) {
	/// create object
	var theDisplay = {};
	
	/// private members
	var canvas = document.getElementById(canvasId);
	var menu;
	var info;
	var message;
	var displayBlocked = false;
	var returnedCommand;
	
	/// private functions
	function clearMenu() {
		menu.innerHTML = "";
	}

	function clearInfo() {
		info.innerHTML = "";
	}

	function clearMessage() {
		message.innerHTML = "";
	}

	/// priviledged functions
	theDisplay.clearDisplay = function () {
		clearMenu();
		clearInfo();
		clearMessage();
	}
	
	theDisplay.renderGameMenu = function (commands, callback) {
		var i, l, button, buttonText, chosenCommand;
		var generateCallback = function (func, arg) {
			return function () { clearMenu(); func(arg); };
		};
		
		clearMenu();
		l = commands.length;
		displayBlocked = true;
		for (i = 0; i < l; i++) {
			button = document.createElement("button");
			buttonText = document.createTextNode(commands[i].title);
			button.appendChild(buttonText);
			button.onclick = generateCallback(callback, commands[i]);
			menu.appendChild(button);
		}
	};
	
	theDisplay.renderActionMenu = theDisplay.renderGameMenu;

	theDisplay.renderCompanyMenu = theDisplay.renderGameMenu;
	
	theDisplay.renderProjectStatus = function (project) {
		clearInfo();
		info.innerHTML = "Project Scope: " + project.scope() + "<br />Time Remaining: " + project.timeline() + " weeks";
	};

	theDisplay.showMessage = function (txt) {
		clearMessage();
		message.innerHTML = txt;
	};
	
	theDisplay.renderPlayerNameForm = function (callback) {
		var form, input, button;
		theDisplay.clearDisplay();
		form = document.createElement("form");
		input = document.createElement("input");
		input.setAttribute("type", "text");
		button = document.createElement("button");
		button.setAttribute("type", "submit");
		button.innerHTML = "OK";
		form.onsubmit = function () { callback(input.value); return false; }
		form.appendChild(input);
		form.appendChild(button);
		menu.appendChild(form);
	};
	
	theDisplay.renderPlayerStatsForm = function (callback) {
		var i, l;
		var skillSet = ["Drive", "Hard Skills", "Organization", "Savvy", "Agreeableneess", "Perception"];
		var labels = [];
		var fields = [];
		var pluses = [];
		var minuses = [];
		var availablePoints = 6;
		var pointsLeft;
		var complete;
		var adjustor = function (index, variance) {
			return function () {
				var currentVal, newVal;
				if ((availablePoints - variance) >= 0) {
					currentVal = fields[index].value;
					newVal = parseInt(currentVal, 10) + variance;
					if (newVal >= 5) {
						fields[index].value = newVal;
						availablePoints -= variance;
						pointsLeft.innerHTML = "Points left: " + availablePoints;
					}
				}
			};
		};
		
		theDisplay.clearDisplay();
		l = skillSet.length;
		for (i = 0; i < l; i++) {
			labels[i] = document.createElement("label");
			labels[i].innerHTML = skillSet[i];
			fields[i] = document.createElement("input");
			fields[i].setAttribute("type", "text");
			fields[i].setAttribute("value", "10");
			minuses[i] = document.createElement("button");
			minuses[i].innerHTML = "-";
			minuses[i].onclick = adjustor(i, -1);
			pluses[i] = document.createElement("button");
			pluses[i].innerHTML = "+";
			pluses[i].onclick = adjustor(i, 1);
			menu.appendChild(labels[i]);
			menu.appendChild(minuses[i]);
			menu.appendChild(fields[i]);
			menu.appendChild(pluses[i]);
			menu.appendChild(document.createElement("br"));
		}
		pointsLeft = document.createElement("p");
		pointsLeft.innerHTML = "Points left: " + availablePoints;
		menu.appendChild(pointsLeft);
		complete = document.createElement("button");
		complete.innerHTML = "Finished";
		complete.onclick = function () {
			var statVals = [];
			for (i = 0; i < l; i++) {
				statVals[i] = fields[i].value;
			}
			callback(statVals);
		};
		menu.appendChild(complete);
	};
	
	/// constructor
	message = document.createElement("p");
	canvas.appendChild(message);	
	menu = document.createElement("div");
	canvas.appendChild(menu);
	info = document.createElement("div");
	canvas.appendChild(info);
	
	/// return object
	return theDisplay;
}
