import React, {Component} from 'react';

class Acerca extends Component{
	componentDidMount(){
		console.log('acerca mount');
		const {methods} = this.props;
		const path_name = window.location.pathname;
		methods.handleMenuClose(path_name);
		window.scrollTo(0,0);
	}

	render(){
		return(
			<section id="about_section" className="section_wrapper">
				<h2>Acerca de NoFm</h2>
				<div>
					<p>
						Etiam auctor, nisl imperdiet accumsan aliquam, nunc purus laoreet orci, 
						quis placerat nisl enim sed quam. Vivamus nec rhoncus leo. Sed maximus 
						varius malesuada. Sed in risus vel orci elementum rhoncus sit amet in 
						elit. Maecenas dictum turpis nec nisl tempus, et viverra ipsum iaculis. 
						Sed condimentum velit viverra, eleifend tortor a, blandit mi. Donec 
						condimentum vel ante eu interdum. Pellentesque imperdiet et lorem ac 
						sollicitudin. Sed faucibus tincidunt volutpat.
					</p>
				</div>
			</section>
		);
	}
}

export default Acerca;