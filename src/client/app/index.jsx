import React from 'react';
import {render} from 'react-dom';

import NavigationBar 	from './components/NavigationBar.jsx';
import PageHeader 		from './components/PageHeader.jsx';
import ErrorPane 			from './components/ErrorPane.jsx';

var errorData = [
	{message: 'You should pick question size'},
	{message: 'E-mail cant be blank'}
];

var App = React.createClass({
	render: function() {
		return (
			<div>
				<NavigationBar activePath="/" />
				<PageHeader header="Create Test" info="Step 1" />
				<ErrorPane data={errorData} />
			</div>
		);
	}
});

render(<App/>, document.getElementById('app'));
