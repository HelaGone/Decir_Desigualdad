import React, {Component, Fragment} from 'react';

export default class PlayButton extends Component{
	render(){
		const {song, methods, playerStatus, playThisEpisode} = this.props;
		let is_same_song = false;
		let render_pause = false; 
		let render_play = true;
		if(playThisEpisode.length!==0){
			if(playThisEpisode[0].r_id === song){
				is_same_song = true;
			}
		}
		if(playerStatus === "playing" && is_same_song){
			render_pause = true;
			render_play = false;
		}else if(playerStatus === "paused" && is_same_song){
			render_pause = false;
			render_play = true;
		}
		//console.log(song);
		return(
			<Fragment>
				{
					render_pause && (
						<button id="btn_pause" className="play_button" onClick={()=>methods.playButton(song, "playing")}>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
								<path d="M0 0h24v24H0z" fill="none"/>
							</svg>
						</button>
					)
				}
				{
					render_play && (
						<button id="btn_play" className="play_button" onClick={()=>methods.playButton(song, "playing")}>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path d="M8 5v14l11-7z"/>
								<path d="M0 0h24v24H0z" fill="none"/>
							</svg>
						</button>
					)
				}
			</Fragment>
		);
	}
}