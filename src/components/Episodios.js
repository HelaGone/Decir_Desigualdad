import React, {Fragment} from 'react';
import ListItem from './ListItem';

const Episodios = (props)=>{
	const {episodios} = props;
	return(
		<Fragment>
			<section id="episodios_section" className="section_wrapper">
				<div className="playlist_header">
					<h4>EPISODIOS</h4>
				</div>
				<ul>
					{
						episodios.map(episodio=><ListItem key={episodio.r_id} post={episodio}/>)
					}
				</ul>
			</section>
		</Fragment>
	);
}

export default(Episodios);