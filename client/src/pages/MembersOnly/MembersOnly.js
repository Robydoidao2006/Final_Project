import React, { Component} from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import { Container, Row, Col } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";
import Carousel from"../../components/Carousel";

class MembersOnly extends Component {
  state = {

  };
render() {
  return (
    <Wrapper>
        <Nav />
    {/* create new components and call them here
    (education, professional development, etc.) */}
        <Footer />
      </Wrapper>
  );
}
}

export default MembersOnly;
