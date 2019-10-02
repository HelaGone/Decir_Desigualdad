import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Menu extends Component{
	render(){
		const {isOpen} = this.props;
		return(
			<Fragment>
				<nav id="main_navigation" className={(isOpen) ? 'show' : ''}>
					<h4><Link to="/episodios">Episodios</Link></h4>
					<h4>
						<Link to="/glosarios">Glosario</Link>
					</h4>
					<ul className="nav_ilst">
						<li className="nav_item">
							<h4><Link to="/acerca">Decir Desigualdad</Link></h4>
						</li>
						<li className="nav_item">
							<h4><Link to="/contacto">Contacto</Link></h4>
						</li>
						<li className="nav_item">
							<h4>Síguenos</h4>
							<ul className="social_list">
								<li className="social_item">
									<a href="https://www.facebook.com/todomenosmiedo/" target="_blank" rel="noopener noreferrer" title="Facebook">
										<FontAwesomeIcon icon={['fab', 'facebook']} size="lg" />
									</a>
								</li>
								<li className="social_item">
									<a href="https://twitter.com/nofm_radio" target="_blank" rel="noopener noreferrer" title="Twitter">
										<FontAwesomeIcon icon={['fab', 'twitter']} size="lg"/>
									</a>
								</li>
								<li className="social_item">
									<a href="https://www.instagram.com/nofm_radio/" target="_blank" rel="noopener noreferrer" title="Instagram">
										<FontAwesomeIcon icon={['fab', 'instagram']} size="lg"/>
									</a>
								</li>
								<li className="social_item">
									<a href="http://feeds.feedburner.com/nofm-radio/HgNX" target="_blank" rel="noopener noreferrer" title="Feedburner">
										<FontAwesomeIcon icon="rss" size="lg"/>
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</Fragment>
		);
	}
}