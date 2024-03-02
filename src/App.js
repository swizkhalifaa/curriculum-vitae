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
              <a href="https://github.com/swizkhalifaa" target="_blank" rel="noreferrer">
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
            <b>+353 830032583</b>
          </div>
        </div>
      </div>

      <div className="Bottom-div-behavior">
        <div className="Left-div">
          <div className="Experience-compartment">
            <div className="Div-compartment">
              {/* EXPERIENCE */}
              <div className="Div-compartment">
                <header className="Bottom-header">EXPERIENCE <Experience /></header>
              </div>

              <div className="Div-portfolio">
                <div className="Div-experience-header">AVANADE</div>{" "}
                <div className="Div-portfolio-header">
                  {" "}
                  | SENIOR ANALYST{" "}
                </div>{" "}
              </div>
              <header className="Bottom-header-light-small">
                03/21 - Present || Dublin, Ireland
              </header>
              <header className="Bottom-header-light">WORK DETAILS:</header>
            <div className="Div-compartment">
              <ul className="ul-other">
                <li className="Bottom-header-light-small">
                <b>GRO API</b> - Spearheaded the design and implementation of a modern <b>RESTful API</b> using <b>C#</b> and <b>ASP.NET</b>, facilitating seamless integration across departments and external stakeholders, resulting in successful collaborations with the Department of Foreign Affairs and Student Universal Support Ireland.
                </li>
                <div className="Div-experience-header"></div>{" "}
                <li className="Bottom-header-light-small">
                <b>Identity Management Application</b> - Designed and oversaw the development of an in-house authorization server using <b>Duende IdentityServer</b> and <b>OAuth 2.0 + OpenID</b> protocols, ensuring secure access control for client applications.
                </li>
                <div className="Div-experience-header"></div>{" "}
                <li className="Bottom-header-light-small">
                <b>Online Registration Application</b> - Directing the development of a <b>.NET 8 Blazor Server</b> application to be featured on the MyWelfare homepage for online birth registration, coordinating efforts across multiple departments and integrating with various APIs using <b>Azure Hybrid Relay</b> and <b>Azure Express Route</b>.
                </li>
                <div className="Div-experience-header"></div>{" "}
                <li className="Bottom-header-light-small">
                <b>Pull Request Review</b> - Acted as primary QA, reviewing pull requests in Azure DevOps to uphold code quality, coverage, and maintainability standards for a team of three developers.
                </li>
                <div className="Div-experience-header"></div>{" "}
                <li className="Bottom-header-light-small">                
                <b>Scrum Master</b> - Led <b>Agile development</b> as <b>Scrum Master</b>, facilitating daily stand-up meetings to track progress, address issues, and maintain alignment with sprint goals. Managed sprint cycles, conducting detailed development estimations, generating <b>DevOps</b> work items, and delivering regular updates to clients, ensuring transparency and continuous improvement throughout the project lifecycle.
                </li>
                <div className="Div-experience-header"></div>{" "}
                <li className="Bottom-header-light-small">              
                <b>Deployments</b> - Conducted deployments for UAT and Live applications, configuring <b>IIS</b>, <b>Windows Services</b>, and <b>Azure App Services</b>, including certificate management and <b>SQL Server</b> table maintenance.
                </li>
              </ul>
            </div>
              <div className="Div-portfolio">
                <div className="Div-experience-header">OCUCO LTD</div>{" "}
                <div className="Div-portfolio-header">
                  {" "}
                  | PROFESSIONAL SERVICES{" "}
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
                Provided remote assistance to customers using TeamViewer for troubleshooting and support of our custom software.

                </li>
                <li className="Bottom-header-light-small">
                Utilised <b>SQL Server</b> to query and manage customer databases, ensuring data integrity and efficient operations.

                </li>
                <li className="Bottom-header-light-small">
                  Liaised with the development team to troubleshoot critical and
                  urgent issues
                </li>
                <li className="Bottom-header-light-small">
                Implemented application software upgrades across multiple Windows operating systems (<b>Windows XP, Windows 8, Windows Server 2016</b> and more), ensuring smooth transitions and careful post-upgrade monitoring.

                </li>
                <li className="Bottom-header-light-small">
                Logged customer ticket information in <b>Jira</b>, maintaining an organised workflow within our <b>Agile</b> Scrum framework.

                </li>
              </ul>
            </div>
            
            <hr className="Divider-display-condition"></hr>
          </div>
        </div>

        {/* other side */}

        <div className="Right-div">
          <div className="Div-compartment">
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
            <li className="Bottom-header-light-small">Object-Orientated Programming - C# | Java | Kotlin | Python</li>
            <li className="Bottom-header-light-small">Machine Learning - Python | RapidMiner </li>
            <li className="Bottom-header-light-small">Networking</li>
            <li className="Bottom-header-light-small">Databases - SQL Server | MongoDB</li>
            <li className="Bottom-header-light-small">Operating Systems</li>
            <li className="Bottom-header-light-small">Algorithms & Data Structures</li>
          </ul>

          
          <hr className="Divider"></hr>

          <div className="Portfolio-compartment">
            <div className="Final-compartment">
              {/* PORTFOLIO */}
              <div className="Div-compartment">
                <header className="Bottom-header">PORTFOLIO <Portfolio /></header>
              </div>
              <div className="Div-portfolio">
              
              
                <div className="Div-portfolio-header">
                  <a href="https://github.com/swizkhalifaa/College-Capstone-Project---Android-Application-Kotlin-" target="_blank" rel="noreferrer">
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
                  <a href="https://github.com/swizkhalifaa/Distributed-System-Project-C-" target="_blank" rel="noreferrer">
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
                  <a href="https://github.com/swizkhalifaa/WebScraperPython" target="_blank" rel="noreferrer">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
