import React, { Component, Fragment } from 'react';
import './Reset.css';
import './App.css';
import Header from './parts/Header';
import Footer from './parts/Footer';
import Home from './components/Home';
import Episodios from './components/Episodios';
import Single from './components/Single';
import NotFound from './components/NotFound';

import {Switch, Route} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      episodios: []
    }
  }

  componentDidMount(){
    const rest_url = 'http://localhost/~cube/nofm-radio.com/wp-json/react/v2/desigualdad/';
    this.getQueryedObject(rest_url);
  };

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

  render() {
    const {episodios} = this.state;
    return (
      <Fragment>
        <Header/>
        <Switch>
        	<Route path="/" exact render={(props)=><Home episodios={episodios} {...props} />}/>
        	<Route path="/episodios/" render={ (props)=><Episodios episodios={episodios} {...props} />}/>
          <Route path="/episodio/:episodio_slug" render={(props)=><Single episodios={episodios} {...props} />} />
          <Route component={NotFound} />
        </Switch>
        {<Footer episodios={episodios}/>}
      </Fragment>
    );
  }
}

export default App;
