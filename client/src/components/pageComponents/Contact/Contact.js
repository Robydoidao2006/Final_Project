import React from "react";
import "./Contact.css";


const Contact = () => (

<div id="contact" className="container">
	<h2 className="text-center" id="title">CONTACT US</h2>
			<div className="row">
				<div className="col-md-4">
				<p>Reach out.</p>
				<p><span className="glyphicon glyphicon-envelope"></span>Email: endocrinenurses@gmail.com </p>
			</div>
			<div className="col-md-8">
				<div className="row">
					<div className="col-sm-6 form-group">
						<form method="POST" action="https://formspree.io/robydoidao2006@yahoo.com" />
						<input className="form-control" id="name" name="name" placeholder="Name" type="text" required />
								</div>
								<div className="col-sm-6 form-group">
									<input className="form-control" id="email" name="email" placeholder="Your email" type="email" required />
								</div>
							</div>
								<textarea className="form-control" id="comments" name="comments" placeholder="How can we help?" rows="5"></textarea>
									<div className="row">
										<div className="col-md-12 form-group">
											<button className="btn pull-right" type="submit">Send</button>
								</div>
						</div>
			</div>
		</div>
</div>

);

export default Contact;
