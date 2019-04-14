import React, {Component, Fragment} from 'react';
// import {Link} from 'react-router-dom';
import Playlist from './Playlist';
import FirstPost from './FirstPost';


export default class Home extends Component{
	render(){
		const {episodios} = this.props;
		const safeRender = (episodios.length>0) ? true : false;		
		return(
			<section id="home_section">
				{
					safeRender && 
					<Fragment>
						{<FirstPost  first_post={episodios[0]} />}
						<Playlist episodios={episodios} />
					</Fragment>
				}
			</section>
		);
	}
}