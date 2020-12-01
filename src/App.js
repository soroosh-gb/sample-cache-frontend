import './App.css';
import React from 'react' 
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './Containers/Home'
import MySamples from './Containers/MySamples'
import Collection from './Containers/Collection'
import Navbar from './Components/Navbar'
import Signup from './Components/Signup'
import Login from './Components/Login'
import { connect } from 'react-redux'
import { setUserAction } from './redux/actions';
import Logout from './Components/Logout'
import { fetchCollectionAction } from './redux/actions.js'
import { fetchSamplesAction } from './redux/actions';
import { fetchCommentsAction } from './redux/actions';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faHeart, faTrash, faUserAstronaut, faUnlockAlt, faChevronCircleRight, faCompactDisc } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faCoffee, faHeart, faTrash, faUserAstronaut, faUnlockAlt, faChevronCircleRight, faCompactDisc)

class App extends React.Component{

  componentDidMount(){
    this.props.fetchSamples()

    const token = localStorage.getItem("token")
    if (token) {
      fetch("http://localhost:3000/api/v1/profile", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}`},
      })
      .then(resp => resp.json())
      .then(data => this.props.setUser(data.user))

      
      this.props.fetchCollection()
      this.props.fetchComments()
    }
    else{
      <Redirect to="/login"/>
      // this.props.history.push('/login')
    }
    
  }

  


  render(){
    console.log(this.props.user)
    // console.log(history)
    return (
      <div>
        {/* <BrowserRouter > */}
        <Navbar />
        <Switch>
           <Route path="/home" render={() => <Home />} />
           <Route path="/collection" render={() => <Collection />} />
           <Route path="/mysamples" render={() => <MySamples />} />
           <Route path="/signup" render={(routerProps) => <Signup {...routerProps}/>} />
           <Route path="/login" render={(routerProps) => <Login {...routerProps} />}/>
           <Route path="/logout" render={(routerProps) => <Logout {...routerProps} />} />
       </Switch>
        {/* </BrowserRouter> */}
      </div>
    );
  }
}

function mdp(dispatch){
  return { setUser: (user) => dispatch(setUserAction(user)),
           fetchSamples: () => dispatch(fetchSamplesAction()),
           fetchCollection: () => dispatch(fetchCollectionAction()),
           fetchComments: () => dispatch(fetchCommentsAction())
  }
}


function msp(state){
  return { user: state.user,
            collection: state.collection,
            api: state.api,
            addedToCollecttion: state.addedToCollecttion
          }
  // console.log(state)
}

export default connect(msp, mdp)(App)
