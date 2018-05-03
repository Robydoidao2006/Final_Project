import React, { Component} from "react";
import { Link } from "react-router-dom";
//page components
import { Container } from "../../components/pageComponents/Grid/Container";
import Membership from "../../components/pageComponents/Memberships"
import Carousel from"../../components/pageComponents/Carousel";
import Wrapper from "../../components/pageComponents/Wrapper";
import Contact from "../../components/pageComponents/Contact";
import Footer from "../../components/pageComponents/Footer";
import Events from "../../components/pageComponents/Events";
import Map from "../../components/pageComponents/Google";
import Nav from "../../components/pageComponents/Nav";
import Bio from "../../components/pageComponents/Bio";
//login comp
import withAuthorization from '../../components/login/Session/withAuthorization';
import Navigation from '../../components/login/Navigation';
//database
import { db } from '../../firebase';


class HomePage extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        users: {}
      };
    }
  
    componentDidMount() {
      db.onceGetUsers().then(snapshot =>
        this.setState(() => ({ users: snapshot.val() }))
      );
    }
    render() {
        const { users } = this.state;
        
        return (

            <Wrapper>
              <Nav />
                <Carousel />
                  <Container />
                    <Membership />
                      <Events />
                        <Map />
                          <Bio />
                            <Contact /> 
                              <Footer />

            </Wrapper>

        );
    }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);