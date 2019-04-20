import React from 'react';
import {Link} from 'react-router-dom';
import PlayButton from '../parts/PlayButton';
const FirtsPost = (props)=>{
	const {first_post, methods, playerStatus} = props;
	const {r_name, r_thumbnails, r_excerpt, r_slug} = first_post;
	const {square_small} = r_thumbnails;
	return(
		<section id="first_post_section">
			<figure className="fig_container first_post">
				<img src={square_small} alt={r_name} />
				<figcaption className="fig_caption">

					<PlayButton methods={methods} song={first_post.r_id} playerStatus={playerStatus} />

					<h2 className="fig_title">{r_name}</h2>
				</figcaption>
			</figure>

			<div className="post_detail">
				<h6>Decir Desigualdad, presentado por NoFm Radio</h6>
				<p className="excerpt">{r_excerpt}</p>
				<Link to={`/episodio/${r_slug}`}>Acerca de este episodio</Link>
				<Link to="/acerca/">¿Cómo hicimos este proyecto?</Link>

				<ul className="options_list">
					<li className="options_item">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<circle cx="6.18" cy="17.82" r="2.18"/>
							<path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"/>
						</svg>
						<a href="/homa">Subscribirse</a>
					</li>
					<li className="options_item">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
						</svg>
						<a href="/adios">Compartir</a>
					</li>
				</ul>

			</div>

		</section>
	);
}
export default FirtsPost;