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
		const {episodios, methods} = this.props;
		const {playButton} = methods;
		const safeRender = (episodios.length>0) ? true : false;		
		return(
			<section id="home_section">
				{
					safeRender && 
					<Fragment>
						<FirstPost  first_post={episodios[0]} playbtn={playButton}/>
						<Playlist episodios={episodios} playbtn={playButton} />
					</Fragment>
				}
			</section>
		);
	}
}