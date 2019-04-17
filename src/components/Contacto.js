import React, {Component} from 'react';
class Contacto extends Component{
	componentDidMount(){
		const {methods} = this.props;
		const path_name = window.location.pathname;
		methods.handleMenuClose(path_name);
		window.scrollTo(0,0);
	}

	render(){
		return(
			<section className="section_wrapper">
				<h2>Contacto</h2>
			</section>
		);
	}
}
export default Contacto;