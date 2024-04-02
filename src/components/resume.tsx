
"use client";
import React, { useState } from 'react';

const ResumeSection = () => {
  const [activeSection, setActiveSection] = useState('education');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <section className="resume" id="resume">
    <div className="container">
        {/*  Section Head */}  
        <div className="section-head text-center">
            <span className="text-uppercase">7+ years of experiences</span>
            <span className="d-block text-capitalize display-4 fw-bold">my resume</span>
        </div>
        {/*  Start My Resume Shuffle */}  
        {/*  Panel Buttons Dad */}  
        <div className="panel-dad text-capitalize">
            <ul className="list-unstyled nav row">
                <li className="button nav-item col-12"><a className="active nav-link" href="#" data-content=".education-content">Education</a>
                </li>
                <li className="button nav-item col-12"><a className="nav-link" href="#" data-content=".proffesinal-content">Proffesinal Skills</a>
                </li>

            </ul>
        </div>
        {/*  Start My Resume Content */}  
        {/*  Education Row */}  
        <div className="row">
            {/*  Education Content */}  
            <div className="education-content content active col-12">
                <div className="row">
                    {/*  Left Side Content */}  
                    <div className="col col-md-6">
                        <div className="left-boxes">
                            {/*  Head Of Left Side Boxes */}  
                            <div className="head">
                                {/*  Head Date */}  
                                <div className="date">
                                    <span>2010 - 2023</span>
                                </div>
                                {/*  Head Title */}  
                                <div className="head-title">
                                    <span>education</span>
                                </div>
                            </div>
                            {/*  Start Boxes Content */}  
                            <div className="boxes">
                                {/*  Box 1 */}  
                                <div className="box">
                                    <div className="inner text-capitalize">
                                        <h3>FIELD OF INFORMATION TECHNOLOGIES / Database Programming</h3>
                                        <div className="collage">Mehmet Rıfat Evyap Vocational and Technical Anatolian High School (Graduate: 12/06/2015)</div>
                                        <div className="rate-badge">3.1 / 4</div>
                                        
                                    </div>
                                </div>
                                {/*  Box 2 */}  
                                <div className="box">
                                    <div className="inner text-capitalize">
                                        <h3>Computer Programming</h3>
                                        <div className="collage">Samsun Ondokuz Mayıs University (OMÜ) (2015 - 2017)</div>
                                        <div className="rate-badge">3.62 / 4</div>
                                    </div>
                                </div>
                                {/*  Box 3 */}  
                                <div className="box">
                                    <div className="inner text-capitalize">
                                        <h3>Management Information Systems</h3>
                                        <div className="collage">Anadolu University (2018 - 2023)</div>
                                        <div className="rate-badge">2.9 / 4</div>
                                 
                                    </div>
                                </div>
                            </div>
                            {/*  End Boxes Content */}  
                        </div>
                    </div>
                    {/*  Right Side Content */}  
                    <div className="col col-md-6">
                        <div className="right-boxes">
                            {/*  Head Of Left Side Boxes */}  
                            <div className="head">
                                {/*  Head Date */}  
                                <div className="date">
                                    <span>2013 - 2024</span>
                                </div>
                                {/*  Head Title */}  
                                <div className="head-title">
                                    <span>Qualification</span>
                                </div>
                            </div>
                            {/*  Start Boxes Content */}  
                            <div className="boxes">
                                {/*  Box 1 */}  
                                <div className="box">
                                    <div className="inner text-capitalize">
                                        <h3>Web Designer</h3>
                                        <div className="collage">Toshiba Authorized Service Center Istanbul (2013 - 2015)</div>
                                    </div>
                                </div>
                                {/*  Box 2 */}  
                                <div className="box">
                                    <div className="inner text-capitalize">
                                        <h3>Journeyman, Mastership, Master Instructor and Business Opening Certificate</h3>
                                        <div className="collage">Istanbul/Sarıyer (758902) Mehmet Rıfat Evyap Vocational and Technical Anatolian High School 
                                            12/06/2015</div>
                                        
                                    </div>
                                </div>
                                   {/*  Box 3 */}  
                                   <div className="box">
                                    <div className="inner text-capitalize">
                                        <h3>IT - Associate</h3>
                                        <div className="collage">PricewaterhouseCoopers (PwC) (2018 - 2022)</div>
                                    
                                    </div>
                                </div>
                                {/*  Box 3 */}  
                                <div className="box">
                                    <div className="inner text-capitalize">
                                        <h3>Advanced Python Programming</h3>
                                        <div className="collage">Nisantasi University Acunmedya Academy (2023 - 2024)</div>
                                    
                                    </div>
                                </div>
                            </div>
                            {/*  End Boxes Content */}  
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*  Proffesinal Skillls Progress Row */}  
        <div className="row">
            {/*  Progress Skills */}  
            <div className="proffesinal-content content col-12">
                <div className="row">
                    <div className="col col-md-6">
                        {/*  Left Side Content */}  
                        <div className="left-side">
                            {/*  Head Of Left Side Boxes */}  
                            <div className="head">
                                {/*  Head Type */}  
                                <div className="type">
                                    <span>features</span>
                                </div>
                                {/*  Head Title */}  
                                <div className="head-title">
                                    <span>Leadership Skills</span>
                                </div>
                            </div>
                            {/*  Progresess Bars */}  
                            <div className="progress-grouping">
                                {/*  One */}  
                                <div className="group-bar">
                                    {/*  Title 1 */}  
                                    <div className="title d-flex justify-content-between">
                                        <span className="name">Tech Transition Leader (PwC Global to Local)</span>
                                    </div>
                                    {/*  Progress Bar 1 */}  
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: "90%"}}
                                            aria-valuenow="(20+ Projects) 90" aria-valuemin="0" aria-valuemax="20+ Projects"></div>
                                    </div>
                                </div>
                                {/*  Two */}  
                                <div className="group-bar">
                                    {/*  Title 1 */}  
                                    <div className="title d-flex justify-content-between">
                                        <span className="name">Agile Practitioner</span>
                                    </div>
                                    {/*  Progress Bar 1 */}  
                                     <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: "95%"}}
                                            aria-valuenow=" (20+ sprints) 95" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                {/*  Three */}  
                                <div className="group-bar">
                                    {/*  Title 1 */}  
                                    <div className="title d-flex justify-content-between">
                                        <span className="name">Event Organizer </span>
                                    </div>
                                    {/*  Progress Bar 1 */}  
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: "60%"}}
                                            aria-valuenow="(20+ events) 60" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                {/*  Four */}  
                                <div className="group-bar">
                                    {/*  Title 1 */}  
                                    <div className="title d-flex justify-content-between">
                                        <span className="name">Data Driven Decision Making</span>
                                    </div>
                                    {/*  Progress Bar 1 */}  
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: "70%"}}
                                            aria-valuenow="(Pandas And BI Tools) 70" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                {/*  Last */}  
                                <div className="group-bar">
                                    {/*  Title 1 */}  
                                    <div className="title d-flex justify-content-between">
                                        <span className="name">Visual Communication | Content</span>
                                    </div>
                                    {/*  Progress Bar 1 */}  
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: "80%"}}
                                            aria-valuenow="500+ post 80" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-6">
                        {/*  Right Side Content */}  
                        <div className="right-side">
                            {/*  Head Of Left Side Boxes */}  
                            <div className="head">
                                {/*  Head Type */}  
                                <div className="type">
                                    <span>features</span>
                                </div>
                                {/*  Head Title */}  
                                <div className="head-title">
                                    <span>development skills</span>
                                </div>
                            </div>
                            {/*  Progresess Bars */}  
                            <div className="progress-grouping">
                                {/*  One */}  
                                <div className="group-bar">
                                    {/*  Title 1 */}  
                                    <div className="title d-flex justify-content-between">
                                        <span className="name">Python</span>
                                    </div>
                                    {/*  Progress Bar 1 */}  
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: "85%"}}
                                            aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                {/*  Two */}  
                                <div className="group-bar">
                                    {/*  Title 1 */}  
                                    <div className="title d-flex justify-content-between">
                                        <span className="name">HTML / CSS</span>
                                    </div>
                                    {/*  Progress Bar 1 */}  
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: "80%"}}
                                            aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                {/*  Three */}  
                                <div className="group-bar">
                                    {/*  Title 1 */}  
                                    <div className="title d-flex justify-content-between">
                                        <span className="name">javascript</span>
                                    </div>
                                    {/*  Progress Bar 1 */}  
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: "40%"}}
                                            aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                {/*  Four */}  
                                <div className="group-bar">
                                    {/*  Title 1 */}  
                                    <div className="title d-flex justify-content-between">
                                        <span className="name">AWS Machine Learning</span>
                                    </div>
                                    {/*  Progress Bar 1 */}  
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: "70%"}}
                                            aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                {/*  Last */}  
                                <div className="group-bar">
                                    {/*  Title 1 */}  
                                    <div className="title d-flex justify-content-between">
                                        <span className="name">Plugins (Chrome Extentions)</span>
                                    </div>
                                    {/*  Progress Bar 1 */}  
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: "70%"}}
                                            aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*  Experince Row */}  
        <div className="row">
            {/*  Exprince */}  
            <div className="experince-content content col-12">
                <div className="row">
                    {/*  Left Side Content */}  
                    <div className="col col-md-6">
                        <div className="left-boxes">
                            {/*  Head Of Left Side Boxes */}  
                            <div className="head">
                                {/*  Head Date */}  
                                <div className="date">
                                    <span>2007 - 2010</span>
                                </div>
                                {/*  Head Title */}  
                                <div className="head-title">
                                    <span>experince content</span>
                                </div>
                            </div>
                            {/*  Start Boxes Content */}  
                            <div className="boxes">
                                {/*  Box 1 */}  
                                <div className="box">
                                    <div className="inner text-capitalize">
                                        <h3>personal portfolio april fools</h3>
                                        <div className="collage">univirsty of dvi (1997 - 2001)</div>
                                        <div className="rate-badge">4.70 / 5</div>
                                        <p>
                                            the education should be very
                                            interactual. Ut tincidunt est ac dolor aliquam sodales.
                                            Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                            mauris hendrerit ante Phasellus sed mauris hendrerit, laoreet sem
                                            in, lobortis
                                            .
                                        </p>
                                    </div>
                                </div>
                                {/*  Box 2 */}  
                                <div className="box">
                                    <div className="inner text-capitalize">
                                        <h3>examples of personal portfolio</h3>
                                        <div className="collage">collage of studies (2000 - 2002)</div>
                                        <div className="rate-badge">4.5 / 5</div>
                                        <p>
                                            maecenas finibus nec sem ut
                                            imperdiet. Ut tincidunt est ac dolor aliquam sodales.
                                            Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                            mauris hendrerit ante.
                                        </p>
                                    </div>
                                </div>
                                {/*  Box 3 */}  
                                <div className="box">
                                    <div className="inner text-capitalize">
                                        <h3>tips for personal portfolio</h3>
                                        <div className="collage">univirsty of studies (1997 - 2001)</div>
                                        <div className="rate-badge">4.80 / 5</div>
                                        <p>
                                            if you are going to use a passage.
                                            Ut tincidunt est ac dolor aliquam sodales.
                                            Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                            mauris hendrerit ante.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/*  End Boxes Content */}  
                        </div>
                    </div>
                    {/*  Right Side Content */}  
                    <div className="col col-md-6">
                        <div className="right-boxes">
                            {/*  Head Of Left Side Boxes */}  
                            <div className="head">
                                {/*  Head Date */}  
                                <div className="date">
                                    <span>2007 - 2010</span>
                                </div>
                                {/*  Head Title */}  
                                <div className="head-title">
                                    <span>job experience</span>
                                </div>
                            </div>
                            {/*  Start Boxes Content */}  
                            <div className="boxes">
                                {/*  Box 1 */}  
                                <div className="box">
                                    <div className="inner text-capitalize">
                                        <h3>diploma in web development</h3>
                                        <div className="collage">bse in cse (2004 - 2008)</div>
                                        <div className="rate-badge">4.70 / 5</div>
                                        <p>
                                            contrary to popular belief. Ut
                                            tincidunt est ac dolor aliquam sodales.
                                            Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                            mauris hendrerit ante.
                                        </p>
                                    </div>
                                </div>
                                {/*  Box 2 */}  
                                <div className="box">
                                    <div className="inner text-capitalize">
                                        <h3>the personal portfolio mystery</h3>
                                        <div className="collage">job at rainbow - themes (2008 - 2018)</div>
                                        <div className="rate-badge">4.70 / 5</div>
                                        <p>
                                            generate Lorem Ipsum which looks. Ut
                                            tincidunt est ac dolor aliquam sodales.
                                            Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                            mauris hendrerit ante.
                                        </p>
                                    </div>
                                </div>
                                {/*  Box 3 */}  
                                <div className="box">
                                    <div className="inner text-capitalize">
                                        <h3>diploma in computer science</h3>
                                        <div className="collage">works at plugin development (2016 - 2020)</div>
                                        <div className="rate-badge">5.00 / 5</div>
                                        <p>
                                            maecenas finibus nec sem ut
                                            imperdiet. Ut tincidunt est ac dolor aliquam sodales.
                                            Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                            mauris hendrerit ante.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/*  End Boxes Content */}  
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*  Interview Row */}  
        <div className="row">
            {/*  Interview */}  
            <div className="interview-content content col-12">
                <div className="row">
                    {/*  Left Side Content */}  
                    <div className="col col-md-6">
                        <div className="left-boxes">
                            {/*  Head Of Left Side Boxes */}  
                            <div className="head">
                                {/*  Head Date */}  
                                <div className="date">
                                    <span>2007 - 2010</span>
                                </div>
                                {/*  Head Title */}  
                                <div className="head-title">
                                    <span>interview content</span>
                                </div>
                            </div>
                            {/*  Start Boxes Content */}  
                            <div className="boxes">
                                {/*  Box 1 */}  
                                <div className="box">
                                    <div className="inner text-capitalize">
                                        <h3>personal portfolio april fools</h3>
                                        <div className="collage">univirsty of dvi (1997 - 2001)</div>
                                        <div className="rate-badge">4.70 / 5</div>
                                        <p>
                                            the education should be very
                                            interactual. Ut tincidunt est ac dolor aliquam sodales.
                                            Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                            mauris hendrerit ante Phasellus sed mauris hendrerit, laoreet sem
                                            in, lobortis
                                            mauris hendrerit ante.
                                        </p>
                                    </div>
                                </div>
                                {/*  Box 2 */}  
                                <div className="box">
                                    <div className="inner text-capitalize">
                                        <h3>examples of personal portfolio</h3>
                                        <div className="collage">collage of studies (2000 - 2002)</div>
                                        <div className="rate-badge">4.5 / 5</div>
                                        <p>
                                            maecenas finibus nec sem ut
                                            imperdiet. Ut tincidunt est ac dolor aliquam sodales.
                                            Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                            mauris hendrerit ante.
                                        </p>
                                    </div>
                                </div>
                                {/*  Box 3 */}  
                                <div className="box">
                                    <div className="inner text-capitalize">
                                        <h3>tips for personal portfolio</h3>
                                        <div className="collage">univirsty of studies (1997 - 2001)</div>
                                        <div className="rate-badge">4.80 / 5</div>
                                        <p>
                                            if you are going to use a passage.
                                            Ut tincidunt est ac dolor aliquam sodales.
                                            Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                            mauris hendrerit ante.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/*  End Boxes Content */}  
                        </div>
                    </div>
                    {/*  Right Side Content */}  
                    <div className="col col-md-6">
                        <div className="right-boxes">
                            {/*  Head Of Left Side Boxes */}  
                            <div className="head">
                                {/*  Head Date */}  
                                <div className="date">
                                    <span>2007 - 2010</span>
                                </div>
                                {/*  Head Title */}  
                                <div className="head-title">
                                    <span>job experience</span>
                                </div>
                            </div>
                            {/*  Start Boxes Content */}  
                            <div className="boxes">
                                {/*  Box 1 */}  
                                <div className="box">
                                    <div className="inner text-capitalize">
                                        <h3>diploma in web development</h3>
                                        <div className="collage">bse in cse (2004 - 2008)</div>
                                        <div className="rate-badge">4.70 / 5</div>
                                        <p>
                                            contrary to popular belief. Ut
                                            tincidunt est ac dolor aliquam sodales.
                                            Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                            mauris hendrerit ante
                                        </p>
                                    </div>
                                </div>
                                {/*  Box 2 */}  
                                <div className="box">
                                    <div className="inner text-capitalize">
                                        <h3>the personal portfolio mystery</h3>
                                        <div className="collage">job at rainbow - themes (2008 - 2018)</div>
                                        <div className="rate-badge">4.70 / 5</div>
                                        <p>
                                            generate Lorem Ipsum which looks. Ut
                                            tincidunt est ac dolor aliquam sodales.
                                            Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                            mauris hendrerit ante.
                                        </p>
                                    </div>
                                </div>
                                {/*  Box 3 */}  
                                <div className="box">
                                    <div className="inner text-capitalize">
                                        <h3>diploma in computer science</h3>
                                        <div className="collage">works at plugin development (2016 - 2020)</div>
                                        <div className="rate-badge">5.00 / 5</div>
                                        <p>
                                            maecenas finibus nec sem ut
                                            imperdiet. Ut tincidunt est ac dolor aliquam sodales.
                                            Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                            mauris hendrerit ante.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/*  End Boxes Content */}  
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*  End My Resume Content */}  
        {/*  End My Resume Shuffle */}  
    </div>
</section>
  );
};

export default ResumeSection;
