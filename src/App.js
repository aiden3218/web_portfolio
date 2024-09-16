import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Aiden Thero</h1>
      </header>
      <header className="about-headers">
        <h2>about</h2>
        <pre>{'3rd year computer systems engineering student at Carleton university. Interested in the Rapidly \nchanging tech industry with experience in Data analytics and software development'}
        </pre>
      </header>
      <div className="experience-headers">
        <h2>Work Experince</h2>
        <header classname="SSC">
          <h2>Data Analyst - Shared Services Canada</h2>
          <pre>{ '• Developed Excel VBA spreadsheet parsers to automate the extraction of transaction data to automate\nprocessing time by 90%\n•  Resolved Discrepancies across multiple databases to meet data integrity\n•  Coordinated periodic meetings with 10+ vendors to address concerns and ensure client standards\n are met'}
          </pre>
        </header>
        <header classname="GCOC">
        <h2> Vehicle Technician - Great Canadian Oil Change</h2>
          <pre>{ '• Applied automotive and mechanical knowledge to ensure rigorous safety standards for customers \n• Led a team to perform oil changes quickly and efficiently to ensure quality and time management\nworking on over 50 cars a day \n• Communicated key information to customers about vehicles allowing worrying customers to feel safe\nabout their vehicle\'s maintenance'}
          </pre>
        </header> 
      </div>

      <div className="volunteer-experience">
        <h2>Volunteer Experience</h2>
        <header classname="kitchen-staff">
          <h2>Camp Opemikon Kitchen staff - Scouts Canada</h2>
          <pre>{ '•	Worked in a fast-paced industrial kitchen making meals for over 300 camp attendees.\n•	Adapted to dynamically changing situations to ensure a smooth operation.'}
          </pre>
        </header>
        <header classname="assistant-instructor">
        <h2>Assistant Swim Instructor - City of Ottawa</h2>
          <pre>{ '• Supervised groups of 8 children while keeping parents informed, gaining their trust and confidence.'}
          </pre>
        </header> 
      </div>
      <div className="projects">
        <h2>Projects</h2>
        <header classname="Data Management">
          <h2>Data Management Project - Python</h2>
          <pre>{ '•	Led unit testing and managed a team of 4 students to design and develop a data management\nsystem.\n•	Efficiently and effectively created an advanced management system in python that accurately\ntracks, displays, and sorts large libraries of data'}
          </pre>
        </header>
        <header classname="website">
        <h2>Personal Local Website - JavaScript, HTML/CSS </h2>
          <pre>{ '•	Designed a website using React with JavaScript and CSS/HTML5 to create an interactive\ninterface.'}
          </pre>
        </header> 
        <header classname="game">
        <h2>Texas Hold 'em Poker Game - Java</h2>
          <pre>{ '•	Implemented core game mechanics using a sorting algorithm to dictate the most valuable hand.'}
          </pre>
        </header> 
      </div>

      <header classname="links">
        <a HREF="http://www.linkedin.com/in/aiden-thero-a392212a9" target="_blank">
          {'Linkedin\n'}
        </a>  
        <a HREF="https://github.com/aiden3218" target="_blank">
          {'Github'}
        </a>
      </header>
    </div>
  );
}

export default App;
