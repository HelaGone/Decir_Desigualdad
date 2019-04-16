import React, {Component} from 'react';
class Escuchanos extends Component{
	componentDidMount(){
		const {methods} = this.props;
		const path_name = window.location.pathname;
		methods.handleMenuClose(path_name);
	}

	render(){
		return(
			<section className="section_wrapper">
				<h2>Escúchanos</h2>
			</section>
		);
	}
}
export default Escuchanos;