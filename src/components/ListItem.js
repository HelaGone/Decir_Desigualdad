import React from 'react';
import {Link} from 'react-router-dom';
import PlayButton from '../parts/PlayButton';
import {isMobileOnly, isTablet} from 'react-device-detect';
/**
 * This component takes one Object in the prop
 * called post wihch is a Wordpress post object
 * @param props
 * @return <li> html tag
*/
const ListItem = (props)=>{
	const {post, methods, playerStatus, playThisEpisode, type} = props;
	const {r_name, r_thumbnails, r_excerpt, r_slug} = post;
	const {square_small, square_mid} = r_thumbnails;
	let image_src = '';

	if(isMobileOnly){
		image_src = square_small;
	}else if(isTablet){
		image_src = square_mid;
	}else{
		image_src = square_mid;
	}
	return(
			<li className="audio_item">
				<figure className="fig_audio_item">
					<img src={image_src} alt="Hola" />
					<PlayButton 
						song={post.r_id} 
						methods={methods} 
						playerStatus={playerStatus} 
						playThisEpisode={ playThisEpisode } 
						/>
					<figcaption className="fig_audio_caption">
						<Link to={`/${type}/${r_slug}`}>
							<h4 className="fig_audio_title">{r_name}</h4>
						</Link>
						<p className="excerpt">{r_excerpt}</p>
					</figcaption>
				</figure>
			</li>
	);
}

export default ListItem;