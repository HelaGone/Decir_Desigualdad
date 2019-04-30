import React, {Component} from 'react';

class Proyecto extends Component{
	componentDidMount(){
		console.log('proyecto mount');
		const {methods} = this.props;
		const path_name = window.location.pathname;
		methods.handleMenuClose(path_name);
		window.scrollTo(0,0);
	}

	render(){
		return(
			<section id="proyect_section" className="section_wrapper simple_page_section">
				<h2>¿Cómo hicimos este proyecto?</h2>
				<div>
					<p>
						Decir desigualdad es… es una serie de siete radiodocumentales que, a 
						través de diversas narrativas como el testimonio, la entrevista, el 
						registro sonoro, la crónica, entre otros, exploran las diferentes 
						perspectivas del fenómeno de la desigualdad en México. Cada uno de 
						los programas busca, por un lado ofrecer al escucha una explicación 
						clara y asequible de los diferentes tipos, causas y consecuencias de 
						la desigualdad, y por otro, una experiencia sonora particular evidencie 
						de manera creativa la multidimensionalidad del fenómeno.
					</p>
					<p>
						En los siete podcasts se tocarán los cinco tipos de desigualdad: de 
						oportunidades y resultados, de ingresos, de riqueza, de género, y de 
						poder político, así como la estrecha relación que existe entre ellos. 
						Las construcciones narrativas, irán acompañadas de opiniones de expertos 
						y datos duros que permitan al escucha sensibilizarse e identificar en su 
						propia vida cotidiana las características de una sociedad desigual como 
						la nuestra.
					</p>
				</div>
			</section>
		);
	}
}

export default Proyecto;