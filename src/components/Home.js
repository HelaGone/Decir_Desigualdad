import React, {Component, Fragment} from 'react';
// import {Link} from 'react-router-dom';
import Playlist from './Playlist';
import FirstPost from './FirstPost';

export default class Home extends Component{
	componentDidMount(){
		const {methods} = this.props;
		const path_name = window.location.pathname;
		methods.handleMenuClose(path_name);
		window.scrollTo(0,0);
	}

	render(){
		const {episodios, glosario, methods, playerStatus, playThisEpisode} = this.props;
		const safeRender = ( (episodios.length>0&&glosario.length>0) ) ? true : false;
		return(
			<section id="home_section" className="section_wrapper_two blue_bg">
				{
					safeRender && 
					<Fragment>
						<FirstPost first_post={episodios[0]} methods={methods} playerStatus={playerStatus} playThisEpisode={playThisEpisode} />
						<Playlist episodios={episodios} methods={methods} playerStatus={playerStatus} playThisEpisode={ playThisEpisode } type="episodio"/>
						<Playlist episodios={glosario} methods={methods} playerStatus={playerStatus} playThisEpisode={ playThisEpisode } type="glosario" />
					</Fragment>
				}
			</section>
		);
	}
}