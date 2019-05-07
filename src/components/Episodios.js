import React, {Component, Fragment} from 'react';
import Playlist from './Playlist';

class Episodios extends Component{
	componentDidMount(){
		const {methods} = this.props
		methods.handleMenuClose(window.location.pathname);
		window.scrollTo(0,0);
	}

	render(){
		const {episodios, type, playThisEpisode, methods, playerStatus} = this.props;
		return(
			<Fragment>
				<section id="episodios_section" className="section_wrapper_two">
					<Playlist episodios={episodios} methods={methods} playerStatus={playerStatus} playThisEpisode={ playThisEpisode } type={type} />
				</section>
			</Fragment>
		);
	}
}

export default Episodios;