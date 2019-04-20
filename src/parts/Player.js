import React, { Component } from 'react';
export default class Player extends Component {
  render() {
    //playthis, 
  	const {playerStatus, methods} = this.props;
    return (
      <div id="player_control_container">
        {
          playerStatus === "paused" && (
            <button 
              id="player_play" 
              className="player_button" 
              onClick={()=>{methods.handlePlayerStatus("playing")}} >

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
              onClick={()=>{methods.handlePlayerStatus("paused")}}>

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z"/>
              </svg>

            </button>
          )
        }
      </div>
    );
  }
}