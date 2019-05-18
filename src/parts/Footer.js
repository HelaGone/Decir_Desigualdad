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
				<figure>
						<img src="" alt="" />
					<figcaption>
						<p>ESTE SITIO NO TIENE FINES DE LUCRO CON LA REPRODUCCIÓN O EXPLOTACIÓN	DE LOS FONOGRAMAS. NO OFRECE NINGÚN TIPO DE DESCARGA GRATUITA NI BAJO NINGÚN TIPO DE COBRO.</p>
					</figcaption>
				</figure>
			</footer>
		);
	}
}