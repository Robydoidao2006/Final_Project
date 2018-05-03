import React, { Component} from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/pageComponents/Nav";
import Footer from "../../components/pageComponents/Footer";
import Wrapper from "../../components/pageComponents/Wrapper";
import About from "../../components/pageComponents/About";

class Aboutus extends Component {
    state = {
    
    };

    render() {
        return (
    
            <Wrapper>
               <Nav />
                 <About />
                   <Footer />
            </Wrapper>
            
        );
    }

}

export default Aboutus;
