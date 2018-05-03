import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import NoMatch from "./pages/NoMatch";
import HelpfulLinks from "./pages/HelpfulLinks";
import Aboutus from "./pages/Aboutus";




const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/helpfullinks" component={HelpfulLinks}/>
        <Route exact path="/aboutus" component={Aboutus}/>

       {/* <Route exact path="/" component={}/>
        <Route exact path="/" component={}/>
        <Route exact path="/" component={}/> */}
        <Route component={NoMatch}/>
        <Route exact path="www.endo-nurses.org/2018-Betsy-Love-McClung-Award" component={Nav}/>
      </Switch>
    </div>
  </Router>

);



export default App;
