import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import Menu from './Menu';

export default class Header extends Component{

	componentDidMount(){
		//Mount component
	}

	componentWillUnmount(){
		//Unmount component
	}

	render(){
		const {isOpen, handleMenuClick} = this.props;
		return(
			<Fragment>
				<header id="main_header" className="visual" >
					<button id="menu_hamburguer" onClick={handleMenuClick} className={(isOpen) ? 'change' : ''} >
						<div className="bar1"></div>
						<div className="bar2"></div>
						<div className="bar3"></div>
					</button>
					<Link to="/decirdesigualdades/">
						<div className="logo_nofm"></div>
					</Link>
				</header>
				<Menu isOpen={isOpen}/>
			</Fragment>
		);
	}
}