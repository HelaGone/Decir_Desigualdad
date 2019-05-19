import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import PlayButton from '../parts/PlayButton';
import { FacebookIcon, FacebookShareButton, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon,} from 'react-share';
import {isMobile} from 'react-device-detect';
import foncaLogo from '../images/cultura_fonca_blanco.png';

const FirtsPost = (props)=>{
	const {first_post, methods, playerStatus, playThisEpisode} = props;
	let path_name = '';
	let safe_render = false;
	if(first_post){
		path_name = `${window.location.pathname}/${first_post.r_slug}`
		safe_render = true;
	}

	// console.log( safe_render );

	return(
		<section id="first_post_section">
			{
				safe_render && 
				<Fragment>
					<figure className="fig_container first_post">
						<img src={ (isMobile) ? first_post.r_thumbnails.square_small : first_post.r_thumbnails.large } alt={first_post.r_name} />
						<figcaption className="fig_caption">

							<PlayButton methods={methods} song={first_post.r_id} playerStatus={playerStatus} playThisEpisode={ playThisEpisode } />

							<h2 className="fig_title">{first_post.r_name}</h2>
						</figcaption>
					</figure>

					<div className="post_detail">
						<figure>
							<figcaption>
								<h5>"Proyecto apoyado por el Fondo Nacional para la Cultura y las Artes"</h5>
							</figcaption>
							<img src={foncaLogo} alt="Logotipo FONCA"/>
						</figure>
						<p className="excerpt">{first_post.r_excerpt}</p>
						<Link to={`/episodio/${first_post.r_slug}`}>Acerca de este episodio</Link>
						<Link to="/proyecto/">¿Cómo hicimos este proyecto?</Link>

						<ul className="options_list">
							{/*<li className="options_item">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
									<circle cx="6.18" cy="17.82" r="2.18"/>
									<path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"/>
								</svg>
								<a href="/homa">Subscribirse</a>
							</li>*/}
							<li className="options_item option_share">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
									<path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
								</svg>
								<span href="/">Compartir</span>
							</li>
						</ul>

						<div className="share_container">
							<FacebookShareButton url={path_name} quote={first_post.r_name} className="share_button">
								<FacebookIcon size={32} round={true} />
							</FacebookShareButton>

							<TwitterShareButton url={path_name} quote={first_post.r_name} className="share_button">
								<TwitterIcon size={32} round={true} />
							</TwitterShareButton>

							<WhatsappShareButton url={path_name} quote={first_post.r_name} className="share_button">
								<WhatsappIcon size={32} round={true} />
							</WhatsappShareButton>
						</div>

					</div>
				</Fragment>
			}

		</section>
	);
}
export default FirtsPost;