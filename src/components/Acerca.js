import React, {Component} from 'react';

class Acerca extends Component{
	componentDidMount(){
		console.log('acerca mount');
		const {methods} = this.props;
		const path_name = window.location.pathname;
		methods.handleMenuClose(path_name);
		window.scrollTo(0,0);
	}

	render(){
		return(
			<section id="about_section" className="section_wrapper simple_page_section">
				<h2>Acerca de Decir Desigualdad</h2>
				<div>
					<p>
						¿Cómo se ha narrado la desigualdad en nuestro país? ¿Cuáles son nuestros referentes 
						y cómo han influido para que concibamos la desigualdad como una característica 
						innegable de nuestro país? La literatura, el cine, la televisión e incluso la 
						publicidad han representado de tal forma la desigualdad que suele confundirse con 
						pobreza, y han narrado ésta de manera reivindicativa. Así, al escuchar que México 
						es uno de los 25 países más desiguales del mundo, únicamente pensamos en  la 
						disparidad de riqueza que existe entre diferentes grupos sociales. Sin embargo, 
						las brechas de la desigualdad son mucho más diversas y tocan la vida cotidiana de 
						las personas de otras formas además del dinero que cada persona tiene.
					</p>
					<p>
						El proyecto Decir desigualdad es…  pretende representar historias que hagan evidente
						las diferentes desigualdades que coexisten en nuestro país, un país en que conviven 
						13 de los 100 hombres más ricos del planeta con 52 millones de pobres, pero también 
						hombres y mujeres igualmente capacitados que no tienen el mismo salario, puestos 
						públicos que excluyen de facto a personas por su origen social, o niños cuyo futuro 
						está determinado por el lugar en que nacieron. Las narraciones tienen la intención 
						no sólo de sensibilizar al escucha, sino de envolverlo en un ambiente que es de 
						muchas formas familiar y cotidiano, pero evidenciando el peso de la desigualdad social.
					</p>
					<p>
						Decir desigualdad es…  más que una serie de definiciones y opiniones de expertos, es 
						elegir narrar de una forma u otra nuestra historia, y la construcción de nuestra identidad.
					</p>
				</div>
			</section>
		);
	}
}

export default Acerca;