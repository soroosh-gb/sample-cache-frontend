import './App.css';
import React from 'react' 
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './Containers/Home'
import MySamples from './Containers/MySamples'
import Collection from './Containers/Collection'
import Navbar from './Components/Navbar'
import Signup from './Components/Signup'
import { connect } from 'react-redux'
import { fetchSamplesAction } from './redux/actions';


class App extends React.Component{

  componentDidMount(){
    this.props.fetchSamples()
  }

  render(){
    return (
      <div>
        <BrowserRouter >
        <Navbar />
        <Switch>
           <Route path="/home" render={() => <Home />} />
           <Route path="/collection" render={() => <Collection />} />
           <Route path="/my samples" render={() => <MySamples />} />
           <Route path="/signup" render={() => <Signup />} />
       </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

function mdp(dispatch){
  return {fetchSamples: ()=> dispatch(fetchSamplesAction())}
}

export default connect(null, mdp)(App)
