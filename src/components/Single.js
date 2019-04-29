import React, {Component, Fragment} from 'react';
import PlayButton from '../parts/PlayButton';
import { 
	FacebookIcon, FacebookShareButton, 
	TwitterShareButton, TwitterIcon, 
	WhatsappShareButton, WhatsappIcon,
	} from 'react-share';
export default class Single extends Component{
	componentDidMount(){
		console.log('single mount');
		const {methods} = this.props;
		const path_name = window.location.pathname;
		methods.handleMenuClose(path_name);
		window.scrollTo(0,0);
	}

	render(){
		const {episodios, methods, playerStatus, playThisEpisode} = this.props;
		const {episodio_slug} = this.props.match.params;
		const episodio = episodios.filter(episodio=>episodio.r_slug === episodio_slug);
		let safe_render = false;
		const path_name = `${window.location.pathname}/${episodio_slug}`
		if(episodio.length>0){
			safe_render = true;
		}
		return(
			<Fragment>
				<section id="single_section" className="section_wrapper_two">
					{
						safe_render && 
							<article className="single_article_container">
								<img className="single_article_image" src={episodio[0].r_thumbnails.square_small} alt={episodio[0].r_name}/>
								<div className="single_article_caption section_wrapper">
									<div className="play_section">
										<PlayButton methods={methods} song={episodio[0].r_id} playerStatus={playerStatus} playThisEpisode={playThisEpisode} />
										<span>Escucha el episodio completo</span>
									</div>
									<h3 className="single_article_title">{episodio[0].r_name}</h3>
								</div>
								<div className="single_content">
									{episodio[0].r_content}
								</div>
								
								<div className="share_container">
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