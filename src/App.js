import "./App.css";
import profile from "./assets/profile.jpeg";

function App() {
  return (
    <div className="app">

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <h1>Sushmitha Manchineella</h1>
          <h3>Full Stack Java Developer | Microservices | AI Integration</h3>
          <p>
            Full Stack Java Developer with 4+ years of experience building scalable
            enterprise applications using Java, Spring Boot, Microservices, and React.
            Currently working at Verizon on AI-driven cloud-native systems.
          </p>
          <a href="#contact" className="cta-btn">Hire Me</a>
        </div>

        <div className="hero-right">
          <img src={profile} alt="Sushmitha" />
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills">
        <h2>Core Skills</h2>
        <div className="skill-tags">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>React</span>
          <span>Docker</span>
          <span>Kubernetes</span>
          <span>AI / LLM Integration</span>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="experience">
        <h2>Professional Experience</h2>

        <div className="exp-card">
          <h3>Full Stack Java Developer</h3>
          <p className="org">Verizon · New Jersey, USA</p>
          <span className="date">Aug 2023 – Present</span>
          <ul>
            <li>Developed RESTful APIs using Java 8, Spring Boot, Microservices</li>
            <li>Built reactive microservices using Spring WebFlux</li>
            <li>Led AI integration using LLMs & RAG pipelines</li>
            <li>Integrated Java services with Python AI systems</li>
            <li>Improved API performance by 25–30%</li>
            <li>Dockerized services & automated CI/CD with Jenkins</li>
          </ul>
        </div>

        <div className="exp-card">
          <h3>Graduate Assistant</h3>
          <p className="org">University of Bridgeport · Connecticut, USA</p>
          <span className="date">May 2022 – Apr 2023</span>
          <ul>
            <li>Built web applications using Java, HTML, CSS, JavaScript</li>
            <li>Improved service response time by ~25%</li>
            <li>Worked with Flask & Blazor projects</li>
            <li>Designed Cassandra schemas</li>
            <li>Automated AWS resources using AWS SAM</li>
          </ul>
        </div>

        <div className="exp-card">
          <h3>Associate Professional Software Engineer</h3>
          <p className="org">DXC Technology · Bangalore, India</p>
          <span className="date">Jul 2020 – Dec 2021</span>
          <ul>
            <li>Developed Spring Boot microservices & REST APIs</li>
            <li>Created Spring Batch jobs</li>
            <li>Built Jenkins CI/CD pipelines (40% faster deployments)</li>
            <li>Monitored apps using Grafana & SonarQube</li>
            <li>Handled on-call production support</li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects">
        <h2>Real Projects</h2>

        <div className="project-grid">

          <div className="project-card">
            <h3>POS Assisted Application</h3>
            <p className="client">Client: Verizon</p>
            <p>AI-powered POS support system using RAG & LLMs.</p>
            <span>Java · Spring Boot · WebFlux · LLM · Docker · Kubernetes</span>
          </div>

          <div className="project-card">
            <h3>ACSS – Field Ops</h3>
            <p className="client">Client: Verizon</p>
            <p>Mission-critical customer support platform.</p>
            <span>Java · J2EE · SQL Server · REST APIs</span>
          </div>

          <div className="project-card">
            <h3>Voice of Customer Platform</h3>
            <p className="client">Client: Verizon</p>
            <p>Customer issue monitoring & analytics dashboard.</p>
            <span>Spring Boot · REST · UI Dashboards</span>
          </div>

          <div className="project-card">
            <h3>MetaVance</h3>
            <p className="client">Client: Delta Dental</p>
            <p>Healthcare managed care platform.</p>
            <span>Java · Microservices · Healthcare</span>
          </div>

          <div className="project-card">
            <h3>Web Application</h3>
            <p className="client">Client: Budweiser</p>
            <p>E-commerce ordering with real-time inventory.</p>
            <span>Angular · JavaScript · REST APIs</span>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:sushmithamanchineella14@gmail.com">sushmithamanchineella14@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/sushmitha-manchineella-548b6018b/" target="_blank" rel="noopener noreferrer">linkedin.com/in/sushmithamanchineella</a></p>
        <p>GitHub: <a href="https://github.com/SushmithaManchineella/portfolio" target="_blank" rel="noopener noreferrer">github.com/SushmithaManchineella/portfolio</a></p>
      </section>


    </div>
  );
}

export default App;
