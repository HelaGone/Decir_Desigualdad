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
	const {post} = props;
	const {r_name, r_thumbnails, r_excerpt} = post;
	const {square_small} = r_thumbnails;
	console.log(post);
	return(
			<li className="audio_item">
				<figure className="fig_audio_item">
					<img src={square_small} alt="Hola" />
					<Link to="/single">
						<figcaption className="fig_audio_caption">
							<PlayButton />
							<h4 className="fig_audio_title">
									{r_name}
							</h4>
							<p>{r_excerpt}</p>
						</figcaption>
					</Link>
				</figure>
			</li>
	);
}

export default ListItem;