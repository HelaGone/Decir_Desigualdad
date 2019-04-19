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
        playButton: this.playButton
      },
      currentPathName: window.location.pathname,
      playThisEpisode: [],
      playerStatus: "stopped"
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
      let episode = this.state.playThisEpisode[0];
      const {r_meta} = episode;
      if(r_meta._episodio_url!==''){
        this.player.src = r_meta._episodio_url;
        this.player.play();
        this.setState({
          playerStatus: "playing"
        })
      }
    }

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

  playButton = (song)=>{
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
  }

  render() {
    console.log('render');
    const {episodios, isOpen, methods, playThisEpisode} = this.state;
    const {handleMenuClick} = methods;
    return (
      <Fragment>
        <Header isOpen={isOpen} handleMenuClick={handleMenuClick} />
        <Switch>
        	<Route path="/" exact render={(props)=><Home episodios={episodios} methods={methods} {...props} />}/>
          <Route path="/acerca/" render={(props)=><Acerca methods={methods} {...props} />}/>
          <Route path="/contacto/" render={(props)=><Contacto methods={methods} {...props} />}/>
        	<Route path="/episodios/" render={ (props)=><Episodios episodios={episodios} methods={methods} {...props} />}/>
          <Route path="/episodio/:episodio_slug" render={(props)=><Single episodios={episodios} methods={methods} {...props} />} />
          <Route path="/escucha/" render={(props)=><Escuchanos methods={methods} {...props} />}/>
          <Route render={(props)=><NotFound methods={methods} />} />
        </Switch>
        <Footer episodios={episodios} playthis={playThisEpisode} />
        <audio ref={ref=>this.player = ref} />
      </Fragment>
    );
  }
}

export default App;
