import { useState } from 'react';
import useTheme from './useThem.jsx';

const CustomNav = () => {
  const { dark, toggleTheme } = useTheme();
  const [activeLink, setActiveLink] = useState('home');

  const linkClass = (link) => `nav-link ${activeLink === link ? 'active-link' : ''}`;
  const themeIconClass = dark ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill';

  const handleNavClick = (link) => {
    setActiveLink(link);
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg sticky-top custom-navbar ${dark ? 'navbar-dark' : 'navbar-light'}`}>
      <div className="container">
        <a className={`navbar-brand fw-bold ${dark ? 'text-white' : 'text-dark'}`} href="#home">
          Abdul Majeed
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <a className={linkClass('home')} href="#home" onClick={() => handleNavClick('home')}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={linkClass('about')} href="#about" onClick={() => handleNavClick('about')}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className={linkClass('skills')} href="#skills" onClick={() => handleNavClick('skills')}>
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className={linkClass('projects')} href="#projects" onClick={() => handleNavClick('projects')}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className={linkClass('contact')} href="#contact" onClick={() => handleNavClick('contact')}>
                Contact
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto align-items-center gap-2">
            <li className="nav-item">
              <a className="nav-link social-link" href="https://www.linkedin.com/in/abdul-majeed-568606178" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin social-icon"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link social-link" href="https://github.com/Abdulmajeed6107" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github social-icon"></i>
              </a>
            </li>
           
            <li className="nav-item">
              <button type="button" className="btn theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle theme">
                <i className={themeIconClass}></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CustomNav;
