import React from "react";
import "./Footernomatch.css";


const Footernomatch = () => (

<footer>
  <div className="container">
			<div className="row">
				<div className="col-md-4">
					<h3>About Us</h3>
                        <p>Somthing here</p>
                        <p>Somthing here</p>
                        <p>Somthing here</p>
				</div>
				<div className="push"></div>
				<div className="col-md-4" id="quickLinks">
                    <ul>
                        <li><h3>Quick Links</h3></li>
						<li><a href="#">History</a></li>
						<li><a href="#">Products</a></li>
						<li><a href="#">Services</a></li>
						<li><a href="#">Contact</a></li>
                    </ul>
				</div>
				<div class="col-md-4">
					<ul>
                        <li><h3>Follow Us</h3></li>
						<li><a href="https://www.twitter.com/" target="_blank"><i className="fa fa-twitter-square"></i><span>     Twitter</span></a></li>
						<li><a href="https://www.facebook.com/Endocrine-Nurses-Society-179481138764587/" target="_blank"><i className="fa fa-facebook-square"></i><span>     Facebook</span></a></li>
						<li><a href="https://www.instagram.com/" target="_blank"><i className="fa fa-instagram"></i><span>     Instagram</span></a></li>
						<li><a href="https://www.linkedin.com" target="_blank"><i className="fa fa-linkedin-square"></i><span>     LinkedIn</span></a></li>
					</ul>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12 text-center" id="copyright">
                    <p>&copy; 2018 Endocrine Nurses Society All Rights Reserved</p>
				</div>
			</div>
		</div>
	</footer>

);

export default Footernomatch;