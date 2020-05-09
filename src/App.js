import React from 'react';
import {Route} from 'react-router-dom'

import './App.css';
import Homepage from './pages/homepage/homepage.component';

const HatsPage = () =>{
  return(<div>
    
    <h1>Hats Page</h1>
    </div>)
}

const App = ()=>{

  return (<div>
           <Route  exact path='/' component={Homepage}/>
           <Route exact path='/hats' component={HatsPage}/>  
        </div>)
}
export default App;
