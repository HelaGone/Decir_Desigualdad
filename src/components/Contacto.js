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
				<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe_PxR6yk8kno5MKXeKdUc72jdI7AJqDy6jJhv51MmofR3jtQ/viewform?embedded=true" width="100%" height="1015" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
			</section>
		);
	}
}
export default Contacto;