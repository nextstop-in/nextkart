import React from 'react';
import {Route} from 'react-router-dom'

import './App.css';
import ShopPage from './pages/shop/shop.component'
import Homepage from './pages/homepage/homepage.component';


const App = ()=>{

  return (<div>
           <Route  exact path='/' component={Homepage}/>
           
           <Route exact path='/shop' component={ShopPage}/>  
        </div>)
}
export default App;
