import React, { Component, Fragment } from 'react';
import './Reset.css';
import './App.css';
import Acerca from './components/Acerca';
import Contacto from './components/Contacto';
import Episodios from './components/Episodios';
import Escuchanos from './components/Escuchanos';
import Footer from './parts/Footer';
import Header from './parts/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Single from './components/Single';

import {Switch, Route} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      episodios: [],
      isOpen: false,
      methods: {
        handleMenuClick: this.handleMenuClick,
        handleMenuClose: this.handleMenuClose,
        handlePlayerStatus: this.handlePlayerStatus,
        playButton: this.playButton
      },
      currentPathName: window.location.pathname,
      playThisEpisode: [],
      playerStatus: "paused"
    }
  }

  componentDidMount(){
    const rest_url = 'http://localhost/~cube/nofm-radio.com/wp-json/react/v2/desigualdad/';
    this.getQueryedObject(rest_url);
  };

  componentDidUpdate(prevProps, prevState) {
    if(this.state.currentPathName !== prevState.currentPathName){
      console.log('update');
    }

    if(this.state.playThisEpisode !== prevState.playThisEpisode){
      //asigan el episodio del estado a la variable episode
      let episode = this.state.playThisEpisode[0];
      const {r_meta} = episode;
      //comprueba que la propiedad _episodio_url no está vacía
      if(r_meta._episodio_url!==''){
        if(this.player.src === ''){
          //asigna el valor de la propiedad _episodio_url al atributo src del audio tag
          this.player.src = r_meta._episodio_url;
          // console.log(this.state.playerStatus);
          if(this.state.playerStatus === "paused"){
            //Comienza la reprodicción
            this.player.play();
            //Actializa el estado de la propiedad playerStatus
            this.setState({
              playerStatus: "playing"
            });
          }else if(this.state.playerStatus === "playing"){
            //Comienza la reprodicción
            this.player.pause();
            //Actializa el estado de la propiedad playerStatus
            this.setState({
              playerStatus: "paused"
            });
          }

        }else{
          // console.log(this.state.playerStatus);
          if(this.state.playerStatus === "playing"){
            this.player.pause();
            //Actualiza el estado de la propiedad playerStatus
            this.setState({
              playerStatus: "paused"
            });
          }else if(this.state.playerStatus === "paused"){
            this.player.play();
            //Actualiza el estado de la propiedad playerStatus
            this.setState({
              playerStatus: "playing"
            });
          }

        }

      }

    }//player status

    // if(this.state.playerStatus !== prevState.playerStatus){
    //   if(this.state.playerStatus === "paused"){
    //     console.log('pause');
    //     this.player.pause();
    //   }else if(this.state.playerStatus === "playing" && prevState.playerStatus === "paused" ){
    //     console.log('play');
    //     this.player.play();
    //   }
    // }

  }//Did update

  getQueryedObject = (url)=>{
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
      this.setState({
        episodios: data
      });
      return data;
    })
    .catch(err=>console.error(err));
  }

  /*MENU*/
  handleMenuClick = (event)=>{
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  handleMenuClose = (pathName)=>{
    // console.log(pathName);
    const {currentPathName} = this.state;
    if(pathName!==currentPathName){
      this.setState({
        currentPathName: pathName,
        isOpen: false
      });
    }
  }

  /*PLAYER*/
  playButton = (song, state)=>{
    const {episodios} = this.state;
    const play_this_episode = episodios.filter(episodio=>{
      if(episodio.r_id === song){
        return episodio;
      }
      return null;
    });

    this.setState({
      playThisEpisode: play_this_episode
    });

    // console.log(play_this_episode);
  }// End playButton 

  handlePlayerStatus = (state)=>{
    if(this.state.playerStatus !== state){
      this.setState({
        playerStatus: state
      })
    }
  }

  render() {
    console.log('render');
    const {episodios, isOpen, methods, playThisEpisode, playerStatus} = this.state;
    const {handleMenuClick} = methods;
    return (
      <Fragment>
        <Header isOpen={isOpen} handleMenuClick={handleMenuClick} />
        <Switch>
        	<Route path="/" exact render={(props)=><Home episodios={episodios} methods={methods} playerStatus={playerStatus} {...props} />}/>
          <Route path="/acerca/" render={(props)=><Acerca methods={methods} {...props} />}/>
          <Route path="/contacto/" render={(props)=><Contacto methods={methods} {...props} />}/>
        	<Route path="/episodios/" render={ (props)=><Episodios episodios={episodios} methods={methods} {...props} />}/>
          <Route path="/episodio/:episodio_slug" render={(props)=><Single episodios={episodios} methods={methods} {...props} />} />
          <Route path="/escucha/" render={(props)=><Escuchanos methods={methods} {...props} />}/>
          <Route render={(props)=><NotFound methods={methods} />} />
        </Switch>
        <Footer episodios={episodios} playthis={playThisEpisode} playerStatus={playerStatus} methods={methods} />
        <audio ref={ref=>this.player = ref} />
      </Fragment>
    );
  }
}

export default App;
