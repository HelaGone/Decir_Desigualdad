import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class NotFound extends Component{
	componentDidMount(){
		const {methods} = this.props;
		const path_name = window.location.path_name;
		methods.handleMenuClose(path_name);
		window.scrollTo(0,0);
	}

	render(){
		return(
			<section className="section_wrapper">
				<h2>Oops! ¿Qué buscas que no encuentras?</h2>
				<Link to="/decirdesigualdades/">Regersa a tu espacio!</Link>
			</section>
		);
	}
}