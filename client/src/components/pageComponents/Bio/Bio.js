import React from "react";
import "./Bio.css";



const Bio = () => (

<div className="container" id="boardmembers">
  <h2 className="text-center">BOARDMEMBERS</h2>
    <ul className="nav nav-tabs">
        <li className="active tabText"><a data-toggle="tab" href="#home">Chris</a></li>
        <li className="tabText"><a data-toggle="tab" href="#menu6">Joan</a></li>
        <li className="tabText"><a data-toggle="tab" href="#menu2">Molly</a></li>
        <li className="tabText"><a data-toggle="tab" href="#menu3">Kathryn</a></li>
        <li className="tabText"><a data-toggle="tab" href="#menu4">Daphne</a></li>
        <li className="tabText"><a data-toggle="tab" href="#menu5">Amy</a></li>
    </ul>

    <div className="tab-content">
        <div id="home" className="tab-pane fade in active">
            <h3>President Elect: Chris Yedinak, DNP, FNP-BC, RN, Oregon</h3>
                <p className="bioText"><img className="bioPic" src={require('./members/ChrisYenidak1.jpg')}/><br/>Chris  is the incoming ENS president 2018-2020. She is anassistant professor in the Department of Neurosurgery, N.W. Pituitary Center at Oregon Health & Sciences University, Portland Oregon providing clinical management to patients with pituitary and adrenal dysfunction for the past 15 years. Chris  completed undergraduate training in Australia and post graduate and Doctoral Studies at Oregon Health & Sciences University.  She also holds a post Graduate Diploma in Tertiary Education University of Southern Queensland, Australia. She is PI in several studies including  an ongoing study of Quality of Life in patients with pituitary diseases with  multiple related publications Her ongoing clinical research is focused on outcome studies in pituitary diseases. She has been delighted to be involved in a global project to produce the first Endocrine Nursing textbook, due to be published by Springer UK in 2018 and has had the pleasure of presenting at scientific meetings worldwide. She is a co-leader of the Federation of International Nurses in Endocrinology (F.I.N.E), originally the brainchild of the ENS. This. has become a thriving entity with a symposium every 2 years; the last in Beijing, China and the next Cape Town, South Africa Dec 2018. She is outskied by her 6 year old granddaughter and out  ‘teched’ by her 13 year old grandson.</p>
        </div>

        <div id="menu2" className="tab-pane fade">
            <h3>Treasurer: Molly Solares- Yeardley, RN, Arizona</h3>
                <p className="bioText"><img className="bioPic" src={require('./members/MollySolares1.png')}/><br/>Molly Marriott Solares, R.N. joined ENS in 1990. Since that time she has held Board positions including Program Director, International Liaison and Treasurer, her current position, held for almost a decade. Molly’s endocrine experience spans 30+ years. At Harbor-UCLA Medical Center in Torrance, California she coordinated the outpatient multifocal endocrine care of 7,000 adults and children (newborn to 90), performed dynamic testing, initiated a diabetes education program and coordinated multi-site research projects in diabetes management and obesity screening and treatment.  In Beverly Hills, she was co-investigator of numerous osteoporosis treatment and prevention clinical trials, and at Cedars-Sinai Medical Center, she coordinated endocrine and diabetes clinical trials. Molly has presented at numerous national, international and local meetings, has authored, and co-authored many abstracts and text chapters.  She is an experienced midwife and was a hospital supervisor in both England and Germany.  Molly currently has a solo practice as a consultant in medical malpractice following 5 years in a busy law firm in Arizona. Whilst retired from academia, she maintains an active nursing license, and enjoys numerous volunteer activities.</p>
        </div>

        <div id="menu3" className="tab-pane fade">
            <h3>Education Chair:  Kathryn Evans Kreider, DNP, FNP-BC, BC-ADM, N. Carolina</h3>
                <p className="bioText"><img className="bioPic" src={require('./members/KathrynKreider2.jpg')}/><br/>Kathryn is an assistant professor of nursing at Duke University School of Nursing (DUSON). She is the lead faculty for the new endocrinology specialty for nurse practitioners at DUSON, the first program of its kind for nurse practitioners in the Unites States. She is a nurse practitioner and director for advanced practice providers in the division of endocrinology at Duke University Medical Center. Dr. Kreider has been involved as an investigator in multiple clinical trials evaluating the efficacy of diabetes medications and therapies. She has an active clinical practice in adult endocrinology and is board-certified in advanced diabetes management. She was recently invited to join the Professional Practice Committee for the American Diabetes Association. She is currently serving as the appointed chair of education for the Endocrine Nurses Society.</p>
        </div>

        <div id="menu4" className="tab-pane fade">
            <h3>Research Chair: Daphne Adelman</h3>
                <p className="bioText"><img className="bioPic" src={require('./members/DaphneAdelman.png')}/><br/>As a project manager & study coordinator at Northwestern University, I am responsible for the oversight of administrative functions and operations for both Pharmaceutical and NIH-sponsored studies in the area of pituitary – Acromegaly, Cushing’s, growth hormone deficiency and diabetes (T1D and T2D). With over 15+ years of relevant research coordination and management experience, I am able to successfully lead and supervise the research team. Some of my duties include supporting the Principal Investigator and Co-Investigator, overseeing the study team, hiring personnel as necessary, participating in central training, communicating with the Data Coordinating Center, supervising the staff in preparing for and responding to feedback from monitoring visits, coordinating internal project meetings, being responsible for regulatory documentation and tracking, monitoring adherence to the project objectives and timelines, and serving as a liaison between the clinical staff and the Principal Investigator. I have extensive experience in entering data in a multitude of large study databases. My main responsibility is the day-to- day management of the studies which includes regulatory aspects including IRB submissions, modifications and study closure, and budget preparation. I am also responsible for patient care and communication throughout the study including but not limited to obtaining informed consents, obtaining medical histories, performing vital signs, collecting, processing and shipping laboratory specimens, dispensing and accounting for study drug, and adverse event reporting.</p>
        </div>

        <div id="menu5" className="tab-pane fade">
            <h3>Membership Chair:  Amy Mundy, FNP, BC-ADM, Virginia</h3>
                <p className="bioText"><img className="bioPic" src={require('./members/AmyMundy.JPG')}/><br/>Amy obtained her FNP at the University of Virginia and her BSN at Georgetown University.  She currently works as a nurse practitioner at the McGuire VA Medical Center in Richmond, Virginia.  She has varied clinical interests and cares for veterans in the general endocrine, diabetes, metabolic bone disease, weight management, and lipid clinics.  She is Board Certified in Advanced Diabetes Management and also has an clinical interest in osteoporosis.  Amy commonly sees patients remotely using Clinical Video Telehealth and enjoys finding new ways to use technology to help her patients.</p>
        </div>
        <div id="menu6" className="tab-pane fade">
            <h3>President: Joan Damon-Simon, MBA, RN, Texas</h3>
                <p className="bioText"><img className="bioPic" src={require('./members/JoanDamon.png')}/><br/>Joan Damon Simon, MBA, RN has over 46 years of nursing and healthcare experience. She began her career in Pediatrics and worked her way through nursing leadership roles. Her senior leadership career began as the first Administrator for The Methodist Hospital built in the outlying community of Sugar Land, Texas. She moved into the Long-Term Acute Care arena as CEO for 8 years and then served as CEO of a Rehab hospital. Joan’s most recent position is Operations Manager, III for a 50 physician multi-specialty outpatient clinic that is part of the Houston Methodist Specialty Physician Group. She also serves as the R.N. for Dr. Richard Robbins, Chairman of the Department of Medicine, and practicing endocrinologist specializing in thyroid cancer. She has been a member of the Endocrine Nurses Society for almost six years. She is currently serving as President and continues to support growth and educational opportunities for endocrine nurses. Joan is married to Harold Simon and has four grown children and three precious grandchildren. Her hobbies include cooking, entertaining, and karaoke!</p>
        </div>
    </div>
</div>

);

export default Bio;
