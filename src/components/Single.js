import React, {Component, Fragment} from 'react';
import PlayButton from '../parts/PlayButton';
import ReactHtmlParser from 'react-html-parser';
import { FacebookIcon, FacebookShareButton, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon,} from 'react-share';
import {isMobileOnly, isTablet} from 'react-device-detect';
export default class Single extends Component{

	componentDidMount(){
		// console.log('single mount');
		const {methods} = this.props;
		const path_name = window.location.pathname;
		methods.handleMenuClose(path_name);
		window.scrollTo(0,0);
	}

	decodeHTML = (html) =>{
		var txt = document.createElement('textarea');
		txt.innerHTML = html;
		return txt.value;
	}

	render(){
		const {episodios, methods, playerStatus, playThisEpisode} = this.props;
		const {slug} = this.props.match.params;
		// console.log(this.props);
		const episodio = episodios.filter(episodio=>{
			// console.log(`${episodio} - ${slug}`);
			return episodio.r_slug === slug
		});
		// console.log(episodio);
		let safe_render = false;
		const path_name = `${window.location.pathname}/${slug}`
		let image_src = '';
		let post_content = '';
		// let arrUsers = [];

		// console.log(episodios);
		// console.log(episodio);

		if(episodio.length>0){
			safe_render = true;
			post_content =  this.decodeHTML(episodio[0].r_content)

			// arrUsers.push(post_content);

			if(isMobileOnly){
				image_src = episodio[0].r_thumbnails.square_mid
			}else if(isTablet){
				image_src = episodio[0].r_thumbnails.square_mid
			}else{
				image_src = episodio[0].r_thumbnails.large
			}
		}
		return(
			<Fragment>
				<section id="single_section" className="section_wrapper_two">
					{
						safe_render && 
							<article className="single_article_container">
								<img className="single_article_image" src={image_src} alt={episodio[0].r_name}/>
								<div className="single_article_caption section_wrapper">
									<div className="play_section">
										<PlayButton methods={methods} song={episodio[0].r_id} playerStatus={playerStatus} playThisEpisode={playThisEpisode} />
										<span>Escucha el episodio completo</span>
									</div>
									<h3 className="single_article_title">{episodio[0].r_name}</h3>
								</div>
								<div className="single_content">
									{ReactHtmlParser(post_content)}
								</div>
								
								<div className="share_container section_wrapper">
									<FacebookShareButton url={path_name} quote={episodio[0].r_name} className="share_button">
										<FacebookIcon size={32} round={true} />
									</FacebookShareButton>

									<TwitterShareButton url={path_name} quote={episodio[0].r_name} className="share_button">
										<TwitterIcon size={32} round={true} />
									</TwitterShareButton>

									<WhatsappShareButton url={path_name} quote={episodio[0].r_name} className="share_button">
										<WhatsappIcon size={32} round={true} />
									</WhatsappShareButton>
								</div>
							</article>
					}
				</section>
			</Fragment>
		);
	}
}