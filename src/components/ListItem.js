import React from 'react';
import {Link} from 'react-router-dom';
import PlayButton from '../parts/PlayButton';
/**
 * This component takes one Object in the prop
 * called post wihch is a Wordpress post object
 * @param props
 * @return <li> html tag
*/
const ListItem = (props)=>{
	const {post, methods, playerStatus, playThisEpisode, type} = props;
	const {r_name, r_thumbnails, r_slug} = post; //episodios
	const {square_mid} = r_thumbnails;
	let image_src = square_mid;
	return(
			<li className="audio_item">
				<figure className="fig_audio_item">
					<Link to={`/decirdesigualdades/${type}/${r_slug}`}>
						<img src={image_src} alt="Hola" />
					</Link>
					<figcaption className="fig_audio_caption">
						<PlayButton song={post.r_id} methods={methods} playerStatus={playerStatus} playThisEpisode={ playThisEpisode } />
						<Link to={`/decirdesigualdades/${type}/${r_slug}`}>
							<h4 className="fig_audio_title">{r_name}</h4>
						</Link>
					</figcaption>
				</figure>
			</li>
	);
}

export default ListItem;