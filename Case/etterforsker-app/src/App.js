import React, { Component  } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.min.js";
import Header from './Components/Header';
import Home from './Components/Home';
import Admin from './Components/Admin';
import CaseFiles from './Components/CaseFiles';
import deleteCase from './Components/deleteCase';
import createCase from './Components/createCase';
import editCase from './Components/editCase';
import redux from './Components//Redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



class App extends Component{

  constructor(props){
    super(props);
    this.PageTitle = "Etterforsker App"

} 

render(){
  return(
    <Router>
    <div>
      <Header headerTitle={ this.PageTitle } />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Admin" component={Admin}/>
      <Route path="/CaseFiles" component={CaseFiles}/>
      <Route path="/createCase" component={createCase}/>
      <Route path="/deleteCase" component={deleteCase}/>
      <Route exact path="/editCase/:id" component={editCase}/>
      <Route  path="/redux" component={redux}/>
      </Switch>
    </div>
    </Router>
   
  )
}







}






export default App;
