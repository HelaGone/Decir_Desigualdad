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
	const {post, methods, playerStatus, playThisEpisode} = props;
	const {r_name, r_thumbnails, r_excerpt, r_slug} = post;
	const {square_small} = r_thumbnails;
	return(
			<li className="audio_item">
				<figure className="fig_audio_item">
					<img src={square_small} alt="Hola" />
					<PlayButton song={post.r_id} methods={methods} playerStatus={playerStatus} playThisEpisode={ playThisEpisode } />
					<figcaption className="fig_audio_caption">
						<Link to={`/episodio/${r_slug}`}>
							<h4 className="fig_audio_title">{r_name}</h4>
						</Link>
						<p>{r_excerpt}</p>
					</figcaption>
				</figure>
			</li>
	);
}

export default ListItem;