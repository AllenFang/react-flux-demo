var DemoDispatcher = require("../dispatcher/DemoDispatcher");
var DemoAction = {
	increase: function(){
		DemoDispatcher.dispatch({
			actionType: "Increase"
		});
	},

	decrease: function(){
		DemoDispatcher.dispatch({
			actionType: "Decrease"
		});
	}
};

module.exports = DemoAction;