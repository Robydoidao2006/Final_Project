import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";



const NoMatch = () => (
  <Wrapper>
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