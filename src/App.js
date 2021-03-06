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
import Proyecto from './components/Proyecto';
import Glosario from './components/Glosario';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faRss } from '@fortawesome/free-solid-svg-icons';

import {Switch, Route} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      episodios: [],
      glosario: [],
      isOpen: false,
      methods: {
        handleMenuClick: this.handleMenuClick,
        handleMenuClose: this.handleMenuClose,
        playButton: this.playButton,
        fastForward: this.fastForward,
        rewind: this.rewind
      },
      currentPathName: window.location.pathname,
      playThisEpisode: [],
      playerStatus: "paused",
      showPlayer: false
    }
  }

  componentDidMount(){
    //const rest_url = 'http://localhost/~rizika/nofm-radio.com/wp-json/react/v2/desigualdad/';
    const rest_url = 'https://nofm-radio.com/wp-json/react/v2/desigualdad/';
    this.getQueryedObject(rest_url);

    //const rest_glosario = "http://localhost/~rizika/nofm-radio.com/wp-json/react/v2/glosario/";
    const rest_glosario = "https://nofm-radio.com/wp-json/react/v2/glosario/";
    this.getGlosarioObject(rest_glosario);
  };

  componentDidUpdate(prevProps, prevState) {

    if(this.state.playThisEpisode !== prevState.playThisEpisode){
      // console.log('update');
      // console.log('-----Current track-----');
      // console.log(`${this.state.playThisEpisode[0].r_id}`);
      //asigan el episodio del estado a la variable episode
      let episode = this.state.playThisEpisode[0];
      const {r_meta} = episode;
      //comprueba que la propiedad _episodio_url no está vacía
      if(r_meta._episodio_url!==''){
        if(this.player.src === ''){
          //asigna el valor de la propiedad _episodio_url al atributo src del audio tag
          this.player.src = r_meta._episodio_url;
          // console.log(this.state.playerStatus);
          if(this.state.playerStatus === "paused" && this.state.playThisEpisode !== prevState.playThisEpisode){

            //Comienza la reprodicción
            this.player.play();
            //Actualiza el estado de la propiedad playerStatus
            this.setState({
              playerStatus: "playing",
              showPlayer: true
            });

          }else if(this.state.playerStatus === "playing"){
            //Comienza la reprodicción
            this.player.pause();
            //Actualiza el estado de la propiedad playerStatus
            this.setState({
              playerStatus: "paused"
            });
          }

        }else if(this.player.src === r_meta._episodio_url){
          // console.log("same audio source");
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
        }else if(this.player.src !== r_meta._episodio_url){
          // console.log("different audio source");
          this.player.pause();
          //asigna un track diferente al player
          this.player.src = r_meta._episodio_url;
          this.player.load();
          this.player.play();
        }
      }//_episodio_url != ''
      // console.log('---end update---');
    }//player status
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

  getGlosarioObject = (url)=>{
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
      this.setState({
        glosario: data
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

  /*HANDLE MENU CLOSE*/
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
    const {episodios, glosario} = this.state;
    const arr_mix = [...episodios, ...glosario];
    const play_this_episode = arr_mix.filter(episodio=>{
      if(episodio.r_id === song){
        return episodio;
      }
      return null;
    });

    this.setState({
      playThisEpisode: play_this_episode
    });
  }// End playButton

  fastForward = ()=>{
    if(this.player != null){
      this.player.currentTime = this.player.currentTime + 30;
    }
  }

  rewind = ()=>{
    if(this.player != null){
      this.player.currentTime = this.player.currentTime - 10;
    }
  }

  render() {
    // console.log('render');
    const {episodios, glosario, isOpen, methods, playThisEpisode, playerStatus, showPlayer} = this.state;
    const {handleMenuClick} = methods;
    library.add(fab, faRss);
    return (
      <Fragment>
        <Header isOpen={isOpen} handleMenuClick={handleMenuClick} />
        <Switch>
        	<Route path="/decirdesigualdades/" exact render={(props)=><Home episodios={episodios} glosario={glosario} methods={methods} playerStatus={playerStatus} playThisEpisode={playThisEpisode} {...props} />}/>
          <Route path="/decirdesigualdades/acerca/" render={(props)=><Acerca methods={methods} {...props} />}/>
          <Route path="/decirdesigualdades/proyecto/" render={(props)=><Proyecto methods={methods} {...props} />}/>
          <Route path="/decirdesigualdades/contacto/" render={(props)=><Contacto methods={methods} {...props} />}/>
        	<Route path="/decirdesigualdades/episodios/" render={ (props)=><Episodios episodios={episodios} methods={methods} playerStatus={playerStatus} playThisEpisode={playThisEpisode} type="episodio" {...props} />}/>
          <Route path="/decirdesigualdades/episodio/:slug" render={(props)=><Single episodios={episodios} methods={methods} playerStatus={playerStatus} playThisEpisode={playThisEpisode} {...props} />} />
          <Route path="/decirdesigualdades/escucha/" render={(props)=><Escuchanos methods={methods} {...props} />}/>
          <Route path="/decirdesigualdades/glosarios/" render={(props)=><Glosario glosario={glosario} methods={methods} playerStatus={playerStatus} playThisEpisode={playThisEpisode} type="glosario" {...props} />}/>
          <Route path="/decirdesigualdades/glosario/:slug" render={(props)=><Single episodios={glosario} methods={methods} playerStatus={playerStatus} playThisEpisode={playThisEpisode} {...props} />}/>
          <Route render={(props)=><NotFound methods={methods} />} />
        </Switch>
        <Footer episodios={episodios} playthis={playThisEpisode} playerStatus={playerStatus} methods={methods} showPlayer={showPlayer} />
        <audio ref={ref=>this.player = ref} />
      </Fragment>
    );
  }
}

export default App;
