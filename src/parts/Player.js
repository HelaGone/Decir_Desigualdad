import React, { Component } from 'react';
// import ReactAudioPlayer from 'react-audio-player';


export default class Player extends Component {
  render() {
  	const {playthis} = this.props;
  	// const ep_urls = playthis.map(episodio=>{
    //   return episodio.r_meta._episodio_url
    // });
    // console.log(playthis);
    
    return (
      <div id="player_container">
        
        {/*<ReactAudioPlayer src={ep_urls[0]} autoplay controls/>*/}
      </div>
    );
  }
}
