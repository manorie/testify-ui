import React from 'react';

export default React.createClass({
  getInitialState: function() {
  	return {
			baseLinks: [
				{ name: 'Home', path: '/'},
				{ name: 'Solve Test', path: '/solve/test'},
				{ name: 'Create Test', path: '/create/test'}
			]
		};
	},

	render: function() {
		var self = this;
		var linkLines = this.state.baseLinks.map(function(link) {
			return (
	    	<li key={link.name} className={self.props.activePath === link.path ? 'active' : ''}>
					<a href={link.path}>
						{link.name}
					</a>
				</li>
			)
		});

		return (
			<div className="row">
				<div className="col-md-12">
					<ul className="nav nav-tabs nav-justified">
						{linkLines}
					</ul>
				</div>
			</div>
		);
	}
});

