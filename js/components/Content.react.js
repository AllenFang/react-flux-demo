var React = require("react");

var Content = React.createClass({
	render: function(){
		return(
			<div>{this.props.value}</div>
		)
	}
});

module.exports = Content;