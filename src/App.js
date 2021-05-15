import "./App.css";
import { Helmet } from "react-helmet";
import ExternalLink from './icons/ExternalLink';
import Education from './icons/Education';
import Experience from './icons/Experience';
import Skills from './icons/Skills';
import Portfolio from './icons/Portfolio';
import Email from './icons/Email';
import Github from './icons/Github';
import Phone from './icons/Phone';


function App() {
  return (
    <div className="app">
      <Helmet>
        <title>CV</title>
      </Helmet>
      {/* HEADER CONTENT */}
      <div className="Div-header">
        <header className="App-header">
          Darren <b>Doyle</b>
        </header>
        <div className="Header-details">
          <div className="Header-text">
          <Github />
            {" "}
            <b>
              <a href="https://github.com/swizkhalifaa" target="_blank">
                github.com/swizkhalifaa 
              </a>
            </b>
            
          </div>
          <div className="Header-separator">||</div>
          <div className="Header-text">
          <Email />
          {" "}
            <b>
              <a href="mailto: darren.doyle3710@gmail.com">
                darren.doyle3710@gmail.com
              </a>
            </b>
          </div>
          <div className="Header-separator">||</div>
          <div className="Header-text">
            <Phone />
            {" "}
            <b>+3530830032583</b>
          </div>
        </div>
      </div>

      <div className="Bottom-div-behavior">
        <div className="Left-div">
          <div className="Top-compartment">
            {/* EDUCATION */}
            <div className="Div-compartment">
              <header className="Bottom-header">EDUCATION {"  "}<Education /></header>
              
            </div>
            <header className="Bottom-header-bold">
              DUBLIN BUSINESS SCHOOL
            </header>
            <header className="Bottom-header-light">BSc in Computing</header>
            <header className="Bottom-header-light-small">
              <b>First Class Honours</b>
            </header>
            <header className="Bottom-header-light-small">
              2016-2020 || Dublin, Ireland
            </header>
          </div>

          <header className="Bottom-header-light">MODULES COVERED:</header>
          <ul className="ul-other">
            <li className="Bottom-header-light-small">
              Object-Orientated Programming
            </li>
            <li className="Bottom-header-light-small">
              Programming Fundamentals
            </li>
            <li className="Bottom-header-light-small">
              Algorithms and Data Structures
            </li>
            <li className="Bottom-header-light-small">Web Development</li>
            <li className="Bottom-header-light-small">Big Data</li>
            <li className="Bottom-header-light-small">Distributed Systems</li>
            <li className="Bottom-header-light-small">Databases</li>
            <li className="Bottom-header-light-small">Operating Systems</li>
            <li className="Bottom-header-light-small">Computer Architecture</li>
            <li className="Bottom-header-light-small">Computer Security</li>
          </ul>

          <div className="Div-compartment">
            <header className="Bottom-header-bold">
              CASTLEKNOCK COMMUNITY COLLEGE
            </header>
            <header className="Bottom-header-light">Leaving Certificate</header>
            <header className="Bottom-header-light-small">
              <b>Passed Higher-Level Mathematics</b>
            </header>
            <header className="Bottom-header-light-small">
              2011-2016 || Dublin, Ireland
            </header>
          </div>

          <div className="Div-compartment">
            <hr className="Divider"></hr>
          </div>

          <div className="Experience-compartment">
            <div className="Div-compartment">
              {/* EXPERIENCE */}
              <div className="Div-compartment">
                <header className="Bottom-header">EXPERIENCE <Experience /></header>
              </div>

              <div className="Div-portfolio">
                <div className="Div-experience-header">OCUCO LTD</div>{" "}
                <div className="Div-portfolio-header">
                  {" "}
                  | PROFESSINAL SERVICES{" "}
                </div>{" "}
                <div className="Div-portfolio-header"> ENGINEER</div>
              </div>
              <header className="Bottom-header-light">Internship</header>
              <header className="Bottom-header-light-small">
                09/18 - 03/19 || Dublin, Ireland
              </header>
            </div>
            <header className="Bottom-header-light">WORK DETAILS:</header>
            <div className="Div-compartment">
              <ul className="ul-other">
                <li className="Bottom-header-light-small">
                  Provided first line support to customers in United States and
                  Europe
                </li>
                <li className="Bottom-header-light-small">
                  Ran SQL queries to resolve irregularities in customers
                  databases
                </li>
                <li className="Bottom-header-light-small">
                  Liaised with the development team to troubleshoot critical and
                  urgent issues
                </li>
                <li className="Bottom-header-light-small">
                  Testing of new software
                </li>
                <li className="Bottom-header-light-small">
                  Record all issues in JIRA
                </li>
              </ul>
            </div>
            <hr className="Divider-display-condition"></hr>
          </div>
        </div>

        {/* other side */}

        <div className="Right-div">
          <div className="Div-compartment">
            {/* SKILLS */}
            <div className="Div-compartment">
              <header className="Bottom-header">TECHNICAL SKILLS <Skills /></header>
            </div>
          </div>
          <div className="Div-tech">
            <div className="Div-language">
              <header className="Bottom-header-bold">PROGRAMMING</header>
              <ul className="ul">
                <li className="Bottom-header-skills">Java</li>
                <li className="Bottom-header-skills">C#</li>
                <li className="Bottom-header-skills">Python</li>
                <li className="Bottom-header-skills">Kotlin</li>
                <li className="Bottom-header-skills">Javascript</li>
                <li className="Bottom-header-skills">ReactJS</li>
                <li className="Bottom-header-skills">HTML5/CSS</li>
                <li className="Bottom-header-skills">Android</li>
              </ul>
            </div>

            <div className="Div-other">
              <header className="Bottom-header-bold">DATABASES</header>
              <ul className="ul">
                <li className="Bottom-header-skills">SQL</li>
                <li className="Bottom-header-skills">MongoDB</li>
              </ul>
              <header className="Bottom-header-bold">IDEs</header>
              <ul className="ul">
                <li className="Bottom-header-skills">Visual Studio</li>
                <li className="Bottom-header-skills">VS Code</li>
                <li className="Bottom-header-skills">Android Studio</li>
              </ul>
            </div>
          </div>
          <div className="Div-compartment"></div>
          <hr className="Divider"></hr>

          <div className="Portfolio-compartment">
            <div className="Final-compartment">
              {/* PORTFOLIO */}
              <div className="Div-compartment">
                <header className="Bottom-header">PORTFOLIO <Portfolio /></header>
              </div>
              <div className="Div-portfolio">
              
              
                <div className="Div-portfolio-header">
                  <a href="https://github.com/swizkhalifaa/College-Capstone-Project---Android-Application-Kotlin-" target="_blank">
                    <b> CAPSTONE ANDROID APPLICATION </b>
                    {" "}
                  <ExternalLink />
                  </a>
                  
                </div>{" "}
                <div className="Div-portfolio-header"> | Kotlin + Android </div>
                
              </div>
              <div className="Div-project">
                <header className="Bottom-header-light-portfolio">
                  Final year college project that involved learning Android
                  development with no prior knowledge and writing an application
                  in Kotlin which also had to be learned. Social media
                  application with a Firebase backend allowing chatting and a
                  'matching' system.
                </header>
              </div>
              <div className="Div-portfolio">
                <div className="Div-portfolio-header">
                  <a href="https://github.com/swizkhalifaa/Distributed-System-Project-C-" target="_blank">
                    <b> DISTRIBUTED CHAT ROOM </b>
                    {" "}
                  <ExternalLink />
                  </a>
                </div>{" "}
                <div className="Div-portfolio-header"> | C# + JavaScript</div>
              </div>
              <div className="Div-project">
                <header className="Bottom-header-light-portfolio">
                  A distributed web chat application which demonstrates concepts
                  such as fault tolerance, concurrency and scalability using
                  ASP.NET with C# and JavaScript.
                </header>
              </div>{" "}
              <div className="Div-portfolio">
                <div className="Div-portfolio-header">
                  <a href="https://github.com/swizkhalifaa/WebScraperPython" target="_blank">
                    <b> FOOTBALL WEB SCRAPER </b>
                    {" "}
                  <ExternalLink />
                  </a>
                </div>{" "}
                <div className="Div-portfolio-header"> | Python</div>
              </div>
              <div className="Div-project">
                <header className="Bottom-header-light-portfolio">
                  A data processing pipeline system written in Python which
                  scrapes browser HTML to obtain dynamic football statistics in
                  realtime.
                </header>
              </div>
              <div className="Div-portfolio">
                <div className="Div-portfolio-header">
                  <a href="https://github.com/swizkhalifaa/React-First-Website" target="_blank">
                    <b> SPOTIFY SOCIAL NETWORK </b>
                    {" "}
                  <ExternalLink />
                  </a>
                </div>{" "}
                <div className="Div-portfolio-header">
                  {" "}
                  | ReactJS + JavaScript
                </div>
              </div>
              <div className="Div-project-last">
                <header className="Bottom-header-light-portfolio">
                  An ambitious summer project post-college to learn JavaScript
                  and ReactJS and make a web application with Spotify
                  functionality through REST API calls.
                </header>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
