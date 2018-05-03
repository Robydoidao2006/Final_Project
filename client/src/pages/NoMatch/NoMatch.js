import React from "react";
import { Col, Row, Container } from "../../components/pageComponents/Grid";
import Jumbotron from "../../components/pageComponents/Jumbotron";
import Wrapper from "../../components/pageComponents/Wrapper";
import Footer from "../../components/pageComponents/Footer";
import Nav from "../../components/pageComponents/Nav";
import "./NoMatch.css";



const NoMatch = () => (
  <Wrapper>
    <Nav />
      <Jumbotron>
        <h1 className="text-center">404 Page Not Found</h1>
          <h1 className="text-center">
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
          </h1>
      </Jumbotron>
    <Footer /> 
  </Wrapper>
);

export default NoMatch;