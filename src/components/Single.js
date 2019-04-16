import React, {Component, Fragment} from 'react';
import PlayButton from '../parts/PlayButton';
export default class Single extends Component{
	componentDidMount(){
		console.log('single mount');
		const {methods} = this.props;
		const path_name = window.location.pathname;
		methods.handleMenuClose(path_name);
		console.log(path_name);
	}

	render(){
		const {episodios} = this.props;
		const {episodio_slug} = this.props.match.params;
		const episodio = episodios.filter(episodio=>episodio.r_slug === episodio_slug);
		let safe_render = false;
		if(episodio.length>0){
			safe_render = true;
			// console.log(episodio);
		}
		// console.log(this.props);
		return(
			<Fragment>
				<section id="single_section" className="section_wrapper">
					{
						safe_render && 
							<article className="single_article_container">
								<img className="single_article_image" src={episodio[0].r_thumbnails.square_small} alt={episodio[0].r_name}/>
								<div className="single_article_caption">
									<div className="play_section">
										<PlayButton />
										<span>Escucha el episodio completo</span>
									</div>
									<h3 className="single_article_title">{episodio[0].r_name}</h3>
								</div>
								<div className="single_content">
									{episodio[0].r_content}
								</div>
							</article>
					}
				</section>
			</Fragment>
		);
	}
}