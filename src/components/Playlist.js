import React, {Component, Fragment} from 'react';
import ListItem from './ListItem';
export default class Playlist extends Component{
	render(){
		const {episodios, methods, playerStatus, playThisEpisode, type} = this.props;
		let section_title = '';
		if(type.toUpperCase()==='EPISODIO'){
			section_title = `${type.toUpperCase()}S`;
		}else{
			section_title = type.toUpperCase();
		}
		// console.log(episodios);
		return(
			<Fragment>
				<ul className="playlist">
				<li className="audio_item">
					<h3>{ section_title }</h3>
				</li>
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