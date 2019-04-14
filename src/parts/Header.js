import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import facebook from '../images/f-ogo_RGB_HEX-58.svg';
import instagram from '../images/instagram_color.png';
import twitter from '../images/Twitter_Logo_Blue.svg';
import feedburner from '../images/rss_feed.svg';

export default class Header extends Component{
	handleMenuClick = (event)=>{
		//Show Menu
		document.getElementById('main_navigation').classList.toggle('show');
		//Bars Animation
		const btnMenu = event.target.parentNode;
		btnMenu.classList.toggle('change');
	}
	render(){
		return(
			<Fragment>
				<header id="main_header" className="visual">
					<div id="menu_hamburguer" onClick={this.handleMenuClick}>
						<div className="bar1"></div>
						<div className="bar2"></div>
						<div className="bar3"></div>
					</div>
					<div className="logo_nofm"></div>
				</header>
				<nav id="main_navigation" >
					<h3><Link to="/episodios">Episodios</Link></h3>
					<ul className="nav_ilst">
						<li className="nav_item"><Link to="/acerca">Acerca de NoFm</Link></li>
						<li className="nav_item"><Link to="/contacto">Contacto</Link></li>
						<li className="nav_item"><Link to="/escucha">Escúchanos</Link></li>
					</ul>
					<div>
						<h4>Síguenos</h4>
						<ul className="social_list">
							<li className="social_item">
								<Link to="https://www.facebook.com/todomenosmiedo/">
									<img src={facebook} alt="facebook" />
								</Link>
							</li>
							<li className="social_item">
								<Link to="https://www.instagram.com/nofm_radio/">
									<img src={instagram} alt="instagram"/>
								</Link>
							</li>
							<li className="social_item">
								<Link to="https://twitter.com/nofm_radio">
									<img src={twitter} alt="twitter" />
								</Link>
							</li>
							<li className="social_item">
								<Link to="http://feeds.feedburner.com/nofm-radio/HgNX">
									<img src={feedburner} alt="feedburner" />
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</Fragment>
		);
	}
}