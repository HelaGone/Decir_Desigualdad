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
								<path d="M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z"/>
							</svg>
						</button>
					)
				}
				{
					render_play && (
						<button id="btn_play" className="play_button" onClick={()=>methods.playButton(song, "playing")}>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
							</svg>
						</button>
					)
				}
			</Fragment>
		);
	}
}