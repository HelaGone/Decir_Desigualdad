import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import Menu from './Menu';

export default class Header extends Component{

	// handleHeaderClass=()=>{
	// 	if(document.getElementById('main_header')!=null){
	// 		if(window.location.pathname !== '/'){
	// 			document.getElementById('main_header').classList.add('with_background');
	// 		}else{
	// 			document.getElementById('main_header').classList.remove('with_background');
	// 		}
	// 	}
	// }
	componentDidMount(){
	}

	render(){
		// this.handleHeaderClass();
		const {isOpen, handleMenuClick} = this.props;
		return(
			<Fragment>
				<header id="main_header" className="visual" >
					<button id="menu_hamburguer" onClick={handleMenuClick} className={(isOpen) ? 'change' : ''} >
						<div className="bar1"></div>
						<div className="bar2"></div>
						<div className="bar3"></div>
					</button>
					<Link to="/">
						<div className="logo_nofm"></div>
					</Link>
				</header>
				<Menu isOpen={isOpen}/>
			</Fragment>
		);
	}
}