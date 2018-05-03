import React from "react";
import "./Memberships.css";



const Membership = () => (

  <div className="container" id="memberships">
  <h2 className="text-center">ENDOCRINE NURSES SOCIETY MEMBERSHIPS</h2>
  <h3>Membership is open to anyone interested in exploring the world of endocrinology. Our members have access to exclusive continuing education resources, virtual lectures, patient educational resources, clinical practice guidelines and resources, the Abbvie Hypothyroid Kit, member directory enabling collaboration, exclusive symposium slides and videos, and countless resources for learning and growing in knowledge and practice.</h3>
  <h2> MEMBERSHIP TYPES </h2>
    <ul className="nav nav-tabs">
        <li className="active tabText"><a data-toggle="tab" href="#home1">Associate/1 Year</a></li>
        <li className="tabText"><a data-toggle="tab" href="#home2">Associate/2 Years</a></li>
        <li className="tabText"><a data-toggle="tab" href="#home3">RN 1 Year</a></li>
          <li className="tabText"><a data-toggle="tab" href="#home4">RN 2 Years</a></li>
    </ul>

    <div className="tab-content">
        <div id="home1" className="tab-pane fade in active">
            <h3>Associate (Non-RN) Annual Membership</h3>
                <ul className="bioText">
                  <li>$100.00 (USD)</li>
                  <li>  Membership is recognized for one year from the date of membership activation.</li>
                </ul>
        </div>

        <div id="home2" className="tab-pane fade">
            <h3>Associate (Non-RN) 2 Year Membership</h3>
                <ul className="bioText">
              <li> $180.00 (USD)</li>
              <li>Membership is recognized for 2 years form the date of membership activation.</li>
              </ul>
        </div>

        <div id="home3" className="tab-pane fade">
            <h3>Full RN Status ~ 1 Year Membership</h3>
                <ul className="bioText">
                <li>$100.00 (USD)</li>
                <li>Membership is recognized for one year from the date of membership activation.</li>
                </ul>
        </div>

        <div id="home4" className="tab-pane fade">
        <h3>Full RN Status ~ 2 Year Membership</h3>
            <ul className="bioText">
            <li>$180.00 (USD)</li>
            <li>Membership is recognized for two years from the date of membership activation.</li>
            </ul>
        </div>

    </div>
</div>

);

export default Membership;
