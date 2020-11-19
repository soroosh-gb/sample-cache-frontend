import './App.css';
import React from 'react' 
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './Containers/Home'
import MySamples from './Containers/MySamples'
import Collection from './Containers/Collection'
import Navbar from './Components/Navbar'


function App() {
  return (
      
      
   
       <div>
         <BrowserRouter >
         <Navbar />
         <Switch>
            <Route path="/home" render={() => <Home />} />
            <Route path="/collection" render={() => <Collection />} />
            <Route path="/mysamples" render={() => <MySamples />} />
        </Switch>
         </BrowserRouter>
   
       </div>
    
      
    
      
  );
}

export default App;
