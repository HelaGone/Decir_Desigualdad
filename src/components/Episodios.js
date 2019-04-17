import React, {Component, Fragment} from 'react';
import ListItem from './ListItem';

class Episodios extends Component{
	componentDidMount(){
		// console.log(window.location.pathname);
		const {methods} = this.props
		// console.log(methods);
		methods.handleMenuClose(window.location.pathname);

		window.scrollTo(0,0);
	}

	render(){
		const {episodios} = this.props;
		return(
			<Fragment>
				<section id="episodios_section" className="section_wrapper">
					<div className="playlist_header">
						<h4>EPISODIOS</h4>
					</div>
					<ul>
						{
							episodios.map(episodio=><ListItem key={episodio.r_id} post={episodio}/>)
						}
					</ul>
				</section>
			</Fragment>
		);
	}
}

export default Episodios;