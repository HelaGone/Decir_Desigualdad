import React, {Component, Fragment} from 'react';
import ListItem from './ListItem';
export default class Playlist extends Component{
	render(){
		const {episodios, methods, playerStatus, playThisEpisode, type} = this.props;
		return(
			<Fragment>
				<ul className="playlist">
					{
						episodios.map(episodio=>{
							return (
								<ListItem key={episodio.r_id} post={episodio} methods={methods} playerStatus={playerStatus} playThisEpisode={playThisEpisode} type={type} />
							)
						})
					}
				</ul>
			</Fragment>
		);
	}
}