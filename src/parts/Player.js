import React, { Component, Fragment } from 'react';
export default class Player extends Component {
  render() {
  	const {playerStatus, methods, playthis} = this.props;
    console.log(methods.rewind);
    let song_ready = false;
    if(playthis.length!==0){
      song_ready = true;
    }
    return (
      <Fragment>
        <div id="player_control_container" className="player_main_container">
          {
            playerStatus === "paused" && (
              <button
                id="player_play"
                className="player_button"
                onClick={()=>{methods.playButton(playthis[0].r_id, "playing")}} >

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                  <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>

              </button>
            )
          }
          {
            playerStatus === "playing" && (
              <button
                id="player_pause"
                className="player_button"
                onClick={()=>{methods.playButton(playthis[0].r_id, "paused")}}>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z"/>
                </svg>

              </button>
            )
          }
          <button className="transport_control" onClick={()=>{methods.rewind()}}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path fill="white" d="M11 16.07V7.93c0-.81-.91-1.28-1.58-.82l-5.77 4.07c-.56.4-.56 1.24 0 1.63l5.77 4.07c.67.47 1.58 0 1.58-.81zm1.66-3.25l5.77 4.07c.66.47 1.58-.01 1.58-.82V7.93c0-.81-.91-1.28-1.58-.82l-5.77 4.07c-.57.4-.57 1.24 0 1.64z"/>
            </svg>
          </button>
          <button className="transport_control" onClick={() =>{methods.fastForward()}}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path fill="white" d="M5.58 16.89l5.77-4.07c.56-.4.56-1.24 0-1.63L5.58 7.11C4.91 6.65 4 7.12 4 7.93v8.14c0 .81.91 1.28 1.58.82zM13 7.93v8.14c0 .81.91 1.28 1.58.82l5.77-4.07c.56-.4.56-1.24 0-1.63l-5.77-4.07c-.67-.47-1.58 0-1.58.81z"/>
            </svg>
          </button>
        </div>
        <div className="track_info">
          {
            song_ready && (
              <h3>{playthis[0].r_name}</h3>
            )
          }
        </div>
      </Fragment>
    );
  }
}
