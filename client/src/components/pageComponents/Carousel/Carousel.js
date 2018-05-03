import React from "react";
import "./Carousel.css";

const Carousel = () => (
  <div id="myCarousel" className="carousel slide" data-ride="carousel">

      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>


      <div className="carousel-inner" role="listbox" id="slide1">
        <div className="item active">
          <img src={require('./images/NursePic01.jpg')}/>
          <div className="carousel-caption">
            <h3 className="CarouselTitle">Mission</h3>
            <h3 className="CarouselText">ENS is a professional organization for endocrine nurses founded to promote excellence in the clinical care of patients through advancement of the science and art of endocrine nursing.</h3>
          </div>
        </div>

        <div className="item">
        <img src={require('./images/NursePic02.jpg')}/>
          <div className="carousel-caption">
            <h3 className="CarouselTitle">Goals</h3>
            <h3 className="CarouselText">Professional development, facilitate communication, educational forums related to endocrine disorders, support nursing research, and enhance interdisciplinary collaboration </h3>
          </div>
        </div>

        <div className="item">
          <img src={require('./images/ENSpic3.jpg')}/>
          <div className="carousel-caption">
            <h3 className="CarouselTitle">Growth</h3>
            <h3 className="CarouselText">Membership is open to nurses and other professionals who are interested in exploring the world of endocrinology.</h3>
          </div>
        </div>
      </div>


        <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
  </div>



);
 export default Carousel;
