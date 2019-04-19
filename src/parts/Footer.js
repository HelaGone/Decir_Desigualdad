import React, {Component} from 'react';
import Player from './Player';

export default class Footer extends Component{
	render(){
		const {playthis}=this.props;
		return(
			<footer id="main_footer">
				<Player playthis={playthis} />
			</footer>
		);
	}
}