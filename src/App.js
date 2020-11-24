import './App.css';
import React from 'react' 
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import Home from './Containers/Home'
import MySamples from './Containers/MySamples'
import Collection from './Containers/Collection'
import Navbar from './Components/Navbar'
import Signup from './Components/Signup'
import Login from './Components/Login'
import { connect } from 'react-redux'
import { fetchSamplesAction } from './redux/actions';
import Logout from './Components/Logout'
// import { fetchCollectionAction } from './redux/actions.js'



class App extends React.Component{

  componentDidMount(){
    // console.log(this.history)
    // const token = localStorage.getItem("token")
    // if (token) {
    //   console.log(token)
    //   console.log("logged in")
      this.props.fetchSamples()
      // this.props.fetchCollection()
    // }
    // else{
    //   console.log("not logged in")
    // }
    
  }

  


  render(){
    console.log(this.props.user)
    return (
      <div>
        <BrowserRouter >
        <Navbar />
        <Switch>
           <Route path="/home" render={() => <Home />} />
           <Route path="/collection" render={() => <Collection />} />
           <Route path="/mysamples" render={() => <MySamples />} />
           <Route path="/signup" render={(routerProps) => <Signup {...routerProps}/>} />
           <Route path="/login" render={(routerProps) => <Login {...routerProps} />}/>
           <Route path="/logout" render={(routerProps) => <Logout {...routerProps} />} />
       </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

function mdp(dispatch){
  return { fetchSamples: () => dispatch(fetchSamplesAction())
            // fetchCollection: () => dispatch(fetchCollectionAction())    
  }
}

function msp(state){
  return { user: state.user,
            // collection: state.collection
          }
  // console.log(state)
}

export default connect(msp, mdp)(App)
