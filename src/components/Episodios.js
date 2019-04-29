import React, {Component, Fragment} from 'react';
import ListItem from './ListItem';

class Episodios extends Component{
	componentDidMount(){
		const {methods} = this.props
		methods.handleMenuClose(window.location.pathname);
		window.scrollTo(0,0);
	}

	render(){
		const {episodios, playThisEpisode, methods, playerStatus} = this.props;
		return(
			<Fragment>
				<section id="episodios_section" className="section_wrapper_two">
					<div className="playlist_header">
						<h4>EPISODIOS</h4>
					</div>
					<ul>
						{
							episodios.map(episodio=><ListItem key={episodio.r_id} post={episodio} methods={methods} playerStatus={playerStatus} playThisEpisode={playThisEpisode} />)
						}
					</ul>
				</section>
			</Fragment>
		);
	}
}

export default Episodios;