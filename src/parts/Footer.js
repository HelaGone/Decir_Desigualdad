import React, {Component} from 'react';
import Player from './Player';

export default class Footer extends Component{
	render(){
		const {episodios}=this.props;
		return(
			<footer id="main_footer">
				<Player episodios={episodios} />
			</footer>
		);
	}
}