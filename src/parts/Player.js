import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';


export default class Player extends Component {

  render() {
  	const {episodios} = this.props;
  	const ep_urls = episodios.map(episodio=>{
      return episodio.r_meta._episodio_url
    });
    return (
      <div id="player_container">
        <ReactAudioPlayer src={ep_urls[1]} autoplay controls/>
      </div>
    );
  }
}
