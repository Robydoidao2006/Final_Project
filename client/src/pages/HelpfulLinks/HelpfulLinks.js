import React, { Component} from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/pageComponents/Nav";
import Footer from "../../components/pageComponents/Footer";
import Wrapper from "../../components/pageComponents/Wrapper";
import Links from "../../components/pageComponents/Links";

class HelpfulLinks extends Component {
    state = {
    
    };

render() {
    return (
   
        <Wrapper>
            <Nav />
                <Links />
                    <Footer />
        </Wrapper>
        
    );
}

}


export default HelpfulLinks;
