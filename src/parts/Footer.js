import React, {Component} from 'react';
import Player from './Player';

export default class Footer extends Component{
	render(){
		const {playthis, playerStatus, methods, showPlayer}=this.props;
		return(
			<footer id="main_footer">
				{
					showPlayer && <Player playthis={playthis} playerStatus={playerStatus} methods={methods}/>
				}
			</footer>
		);
	}
}