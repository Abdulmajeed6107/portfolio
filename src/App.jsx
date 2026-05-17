import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import './App.css'
import 'animate.css';
import CustomNav from './components/navbar'
import { useInView } from "react-intersection-observer";
import Contact from './pages/Contact.jsx'



function App() {
  const [count, setCount] = useState(0)


  const liveProject = [{ title: "Project 1", demoUrl: "https://second-react-app-1abb7.web.app/", images: "/images/cloud.PNG", description: "A responsive MERN stack web application with modern UI." },
  { title: "Project 2", demoUrl: "https://first-react-app-4cab7.web.app/", images: "/images/food.PNG", description: "A responsive web application with modern UI using HTML, CSS, and JavaScript.", },
  { title: "Project 3", demoUrl: "https://rd-react-galaxy.web.app", images: "/images/portfolio ss.PNG", description: "A responsive MERN stack web application with modern UI.", }];

  const { ref, inView } = useInView({
    threshold: 0.3, // when 30% visible
  });
  const { ref: skillsRef, inView: skillsInView } = useInView({
    threshold: 0.1, // trigger earlier for skills
    triggerOnce: true, // Only animate once
  });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    let timer;

    if (inView) {
      setAnimate(false); // Reset animation state when the element is in view
      setTimeout(() => {
        setAnimate(true); // Trigger animation after a short delay
      }, 100); // Adjust the delay as needed
      return () => clearTimeout(timer);
    }
  }, [inView]);

  // on button click animation trigger
  const handleButtonClick = () => {
    setAnimate(false); // Reset animation state

    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); // Scroll to contact section 

    setTimeout(() => {
      setAnimate(true); // Trigger animation after a short delay

    }, 100); // Adjust the delay as needed
  };


  return (
    <>
      <CustomNav />
      <section id="home" className="hero-section d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center text-white">
              <div className="hero-glass animate__animated animate__fadeInUp">
                <h1 className="display-3 fw-bold mb-3">
                  Hi, I'm <span className="text-gradient">Abdul Majeed</span>
                </h1>
                <h3 className="mb-4 fw-light text-white-50">MERN Stack Web Developer</h3>
                <p className="lead mb-5 px-md-4">
                  I build responsive and modern web applications using MongoDB,
                  Express.js, React.js and Node.js. Turning ideas into elegant digital solutions.
                </p>

                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <a href="#projects" className="btn btn-primary btn-lg custom-btn">
                    View Projects
                  </a>

                  <button onClick={handleButtonClick} className="btn btn-outline-light btn-lg custom-btn">
                    Contact Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        {/* About */}

        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4">
              <img
                src="/images/portfolio.png"
                alt="profile"
                className="img-fluid rounded shadow"
              />
            </div>

            <div className="col-md-6">
              <h2 className="fw-bold mb-4" id="about">
                About Me
              </h2>

              <p>
                I am a passionate MERN Stack Developer who enjoys creating
                user-friendly and responsive web applications.
              </p>

              <p>
                I have experience working with React, Bootstrap, MongoDB,
                Express.js, and Node.js.
              </p>

              <p>
                My goal is to build modern websites and improve my skills every
                day.
              </p>

              <a href="/cv.pdf" download className="btn btn-dark mt-3">
                Download CV
              </a>
            </div>
          </div>
        </div>


        {/* Skills */}
        {/* < id="skills" className="py-5 bg-light"> */}
        <div className="container text-center" ref={skillsRef}>
          <h2 className="fw-bold mb-5" id="skills">
            My Skills
          </h2>
          <div className="row g-4">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React.js",
              "Bootstrap",
              "React Bootstrap",
              "Node.js",
              "Express.js",
              "MongoDB",
              "MySQL",
            ].map((skill, index) => (
              <div className="col-md-3 col-sm-6" key={index}>
                <div
                  className={`card border-0 shadow-sm skill-card p-4 h-100 ${skillsInView ? 'animate__animated animate__backInDown' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <h4>{skill}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
      {/* Projects */}
      <section id="projects" className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Projects</h2>

          <div className="row g-4">
            {liveProject.map((project) => (
              <div className="col-md-4" key={project.title}>
                <div className="card border-0 shadow h-100">
                  <img
                    src={project.images}
                    className="card-img-top"
                    alt="project"
                  />

                  <div className="card-body">
                    <h4 className="card-title"> </h4>
                    <p className="card-text">
                      {project.description}
                    </p>
                    <a href={project.demoUrl} className="btn btn-primary me-2" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                    <a href={project.githubUrl} className='btn btn-dark' target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact */}
      <section id="contact" className="py-5" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <h2 ref={ref} className={`fw-bold text-center mb-5 display-5 animate__animated animate__slow ${inView ? 'animate__fadeInUp' : 'opacity-0'}`}>Let's Talk About Your Project</h2>

          <div className="row justify-content-center g-4">
            <div className="col-md-6">
              <Contact />
            </div>

            <div className="col-md-4 d-flex flex-column justify-content-center">
              <div className="p-4 rounded border border-secondary shadow-sm animate__animated animate__fadeInUp card" style={{ backgroundColor: 'var(--card)' }}>
                <h3 className="mb-4 fw-bold">Get In Touch</h3>

                <div className="d-flex align-items-center mb-4">
                  <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "50px", height: "50px", minWidth: "50px" }}>
                    <i className="bi bi-envelope-fill fs-4 text-white"></i>
                  </div>
                  <div className="text-break">
                    <p className="mb-0 text-muted small text-uppercase fw-bold">Email</p>
                    <a href="mailto:majeedzr7741@gmail.com" className="text-decoration-none fs-6" style={{ color: 'var(--text)' }}>
                      majeedzr7741@gmail.com
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "50px", height: "50px", minWidth: "50px" }}>
                    <i className="bi bi-linkedin fs-4 text-white"></i>
                  </div>
                  <div className="text-break">
                    <p className="mb-0 text-muted small text-uppercase fw-bold">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/abdul-majeed-568606178" target="_blank" rel="noopener noreferrer" className="text-decoration-none fs-6" style={{ color: 'var(--text)' }}>
                      Abdul Majeed
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "50px", height: "50px", minWidth: "50px" }}>
                    <i className="bi bi-telephone-fill fs-4 text-white"></i>
                  </div>
                  <div className="text-break">
                    <p className="mb-0 text-muted small text-uppercase fw-bold">Phone</p>
                    <a href="tel:+923143415032" className="text-decoration-none fs-6" style={{ color: 'var(--text)' }}>
                      +92 314 3415032
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div className="bg-success rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "50px", height: "50px", minWidth: "50px" }}>
                    <i className="bi bi-whatsapp fs-4 text-white"></i>
                  </div>
                  <div className="text-break">
                    <p className="mb-0 text-muted small text-uppercase fw-bold">WhatsApp</p>
                    <a href="https://wa.me/923143415032" target="_blank" rel="noopener noreferrer" className="text-decoration-none fs-6" style={{ color: 'var(--text)' }}>
                      +92 314 3415032
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="text-center py-3" style={{ backgroundColor: 'var(--surface-strong)', color: 'var(--text)' }}>
        <p className="mb-0">
          © 2026 Abdul Majeed | MERN Stack Developer
        </p>
      </footer>

    </>
  )

}

export default App
