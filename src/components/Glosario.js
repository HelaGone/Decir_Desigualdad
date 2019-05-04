import React, {Component} from 'react';
import Playlist from './Playlist';

export default class Glosario extends Component{
	componentDidMount(){
		const {methods} = this.props
		methods.handleMenuClose(window.location.pathname);
		window.scrollTo(0,0);
	}

	render(){
		const {glosario, type, methods, playerStatus, playThisEpisode} = this.props;
		return(
			<section id="glosario_section" className="section_wrapper_two">
				<div className="playlist_header">
					<h4>GLOSARIO</h4>
				</div>
				<Playlist episodios={glosario} methods={methods} playerStatus={playerStatus} playThisEpisode={ playThisEpisode } type={type}/>
			</section>
		);
	}
}