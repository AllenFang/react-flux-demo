var React = require("react");
var DemoAction = require("../actions/DemoAction");

var Header = React.createClass({
	handleIncrease: function(){
		DemoAction.increase();
	},
	handleDecrease: function(){
		DemoAction.decrease();
	},
	render: function(){
		return(
			<div>
				<section>
					<button onClick={this.handleIncrease}>Increase</button>
					<button onClick={this.handleDecrease}>Decrease</button>
				</section>
			</div>
		);
	}
});

module.exports = Header;