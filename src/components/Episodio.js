import React, {Fragment} from 'react';

const Episodio = (props)=>{
	const {episodio} = props;
	return(
		<figure className="fig_container">
			<img src={episodio.r_thumbnails.medium} alt={episodio.r_name} />
			<figcaption className="fig_caption">
				<h3 className="fig_title">{episodio.r_name}</h3>
			</figcaption>
		</figure>
	);
}

export default Episodio;