var React = require("react");
var Header = require("./Header.react");
var Content = require("./Content.react");
var DemoStore = require("../stores/DemoStore");

var DemoApp = React.createClass({
	getInitialState: function(){
		return{
			value: DemoStore.getValue()
		};
	},
	componentDidMount: function() {
    	DemoStore.addChangeListener(this._onChange);
	},

  	componentWillUnmount: function() {
    	DemoStore.removeChangeListener(this._onChange);
  	},

	render: function(){
		return(
			<div>
				<Header />
				<Content value={this.state.value}/>			
			</div>
		);
	},

	_onChange: function(){
		this.setState({
			value: DemoStore.getValue()
		});
	}
});

module.exports = DemoApp;