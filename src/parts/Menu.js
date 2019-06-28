import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Menu extends Component{
	render(){
		const {isOpen} = this.props;
		return(
			<Fragment>
				<nav id="main_navigation" className={(isOpen) ? 'show' : ''}>
					<h4><Link to="/decirdesigualdades/episodios">Episodios</Link></h4>
					<h4>
						<Link to="/decirdesigualdades/glosarios">Glosario</Link>
					</h4>
					<ul className="nav_ilst">
						<li className="nav_item">
							<h4><Link to="/decirdesigualdades/acerca">Decir Desigualdad</Link></h4>
						</li>
						<li className="nav_item">
							<h4><Link to="/decirdesigualdades/contacto">Contacto</Link></h4>
						</li>
						<li className="nav_item">
							<h4>Síguenos</h4>
							<ul className="social_list">
								<li className="social_item">
									<a href="https://www.facebook.com/todomenosmiedo/" target="_blank" title="Facebook">
										<FontAwesomeIcon icon={['fab', 'facebook']} size="lg" />
									</a>
								</li>
								<li className="social_item">
									<a href="https://twitter.com/nofm_radio" target="_blank" title="Twitter">
										<FontAwesomeIcon icon={['fab', 'twitter']} size="lg"/>
									</a>
								</li>
								<li className="social_item">
									<a href="https://www.instagram.com/nofm_radio/" target="_blank" title="Instagram">
										<FontAwesomeIcon icon={['fab', 'instagram']} size="lg"/>
									</a>
								</li>
								<li className="social_item">
									<a href="http://feeds.feedburner.com/nofm-radio/HgNX" target="_blank" title="Feedburner">
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