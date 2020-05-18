import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';
import ShopPage from './pages/shop/shop.component'
import Homepage from './pages/homepage/homepage.component';

import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils'

class App extends React.Component{
       constructor(props){
              super()
              this.state={
                     currentUser : null
              }
       }
unSubscribeFromAuth=null;
       componentDidMount(){
              this.unSubscribeFromAuth=auth.onAuthStateChanged(user=>{
                     this.setState({currentUser : user})
                     console.log(user)
              })
              

       }
       componentWillUnmount(){
              this.unSubscribeFromAuth()
       }

 render(){
  return (<div>
    <Header currentUser={this.state.currentUser}/>
    <Switch>
           <Route  exact path='/' component={Homepage}/>         
           <Route exact path='/shop' component={ShopPage}/> 
           <Route exact path='/signin' component={SignInAndSignUp}/> 
    </Switch>    
           </div>)
}
}
export default App;
