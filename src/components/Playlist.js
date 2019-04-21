import React, {Component, Fragment} from 'react';
import ListItem from './ListItem';
export default class Playlist extends Component{
	render(){
		const {episodios, methods, playerStatus, playThisEpisode} = this.props;
		return(
			<Fragment>
				<div className="playlist_header">
					<h4>TODOS LOS EPISODIOS</h4>
				</div>
				<ul className="playlist">
					{
						episodios.map(episodio=>{
							return (
								<ListItem key={episodio.r_id} post={episodio} methods={methods} playerStatus={playerStatus} playThisEpisode={playThisEpisode} />
							)
						})
					}
				</ul>
			</Fragment>
		);
	}
}