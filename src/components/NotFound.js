import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

export default class NotFound extends Component{
	render(){
		return(
			<Fragment>
				<h2>Oops! we can't find anything here</h2>
				<Link to="/">Get back to safety!</Link>
			</Fragment>
		);
	}
}