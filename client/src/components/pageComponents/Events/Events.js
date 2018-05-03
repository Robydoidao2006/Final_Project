import React from "react";
import "./Events.css";

const Events = () => (

<div  className="bg-1" id="newEvents" >
    <div className="container">
        <h1 className="text-center">ENS Upcoming Events</h1>
    </div>

      <div className="col-sm-2">
        <div className="thumbnail">
            <img className="Boston" src={require('./pic/boston.jpg')} alt="Boston" href="https://www.aace.com/annualmeeting/aace-2018" />
                <p><strong>Boston</strong></p>
                <p>May 16-20</p>
            <button className="btn"><a href="https://www.aace.com/annualmeeting/aace-2018" target="_blank">INFO</a></button>
        </div>
      </div>

      <div className="col-sm-2">
        <div className="thumbnail">
            <img  className="Keystone" src={require('./pic/keystone.jpg')} alt="Keystone" href="http://www.atdcconference.com/" />
                <p><strong>Keystone</strong></p>
                <p>July 12-15</p>
            <button className="btn"><a href="http://www.atdcconference.com/">INFO</a></button>
        </div>
      </div>

      <div className="col-sm-2">
        <div className="thumbnail">
            <img className="SanDiego" src={require('./pic/sanDiego.jpg')} alt="San Diego" href="https://www.globalacademycme.com/conferences/meds/register" />
                <p><strong>San Diego</strong></p>
                <p>August 1-4</p>
            <button className="btn"><a href="https://www.globalacademycme.com/conferences/meds/register" target="_blank">INFO</a></button>
          </div>
        </div>
   
        <div className="col-sm-2">
          <div className="thumbnail">
            <img className="baltimore" src={require('./pic/baltimore.jpg')} alt="Baltimore" href="http://www.aademeeting.org/" />
                <p><strong>Baltimore</strong></p>
                <p>August 17-20</p>
            <button className="btn"><a href="http://www.aademeeting.org/" target="_blank">INFO</a></button>
          </div>
        </div>

        <div className="col-sm-2">
          <div className="thumbnail">
            <img className="Orlando" src={require('./pic/orlando.jpg')} alt="Orlando" href="https://www.globalacademycme.com/conferences/meds/register" />
                <p><strong>Orlando</strong></p>
                <p>October 10-13</p>
            <button className="btn"><a href="https://www.globalacademycme.com/conferences/meds/register" target="_blank">INFO</a></button>
          </div>
        </div>

        <div className="col-sm-2">
          <div className="thumbnail">
            <img className="CapeTown" src={require('./pic/cape.jpg')} alt="Cape Town" href="http://www.ice2018.org/" />
                <p><strong>Cape Town</strong></p>
                <p>December 1-4</p>
            <button className="btn"><a href="http://www.ice2018.org/" target="_blank">INFO</a></button>
          </div>
        </div>
</div>

);

export default Events;
