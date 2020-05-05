import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './group_page.scss';

const GroupPage = () => {

  return (
    <div className="group-page-container">
      <div className="gp-header-container">
        <h1 className="gp-header">The Squad</h1>
        <span>
          <HashLink
            className="title-link"
            scroll={el =>
              el.scrollIntoView({ behavior: "smooth", block: "end" })
            }
            to="/group/#nathan"
          >
            Nathan Mendes
          </HashLink>
          <HashLink
            className="title-link"
            scroll={el =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            to="/group/#dilan"
          >
            Dilan Balci
          </HashLink>
          <HashLink
            className="title-link"
            scroll={el =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            to="/group/#terry"
          >
            Terry Chow
          </HashLink>
          <HashLink
            className="title-link"
            scroll={el =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            to="/group/#hyolim"
          >
            Hyo Lim Jeong
          </HashLink>
        </span>
      </div>
      <div id="nathan" className="profile-container">
        <img className="profile-pic" src="./images/nathan-mendes.jpeg" alt="" />
        <div className="profile-info">
          <h2 className="name">Nathan Mendes</h2>
          <h3 className="tagline">Frontend Developer</h3>
          <div className="social-links">
            <a
              className="social-link"
              target="_blank"
              href="https://www.linkedin.com/in/mendesnathanj/"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="social-link"
              target="_blank"
              href="https://angel.co/u/nathanmendes"
            >
              <i className="fab fa-angellist"></i>
            </a>
          </div>
        </div>
      </div>

      <div id="dilan" className="profile-container">
        <img className="profile-pic" src="./images/dilan-balci.jpeg" alt="" />
        <div className="profile-info">
          <h2 className="name">Dilan Balci</h2>
          <h3 className="tagline">Backend Developer</h3>
          <div className="social-links">
            <a
              className="social-link"
              target="_blank"
              href="https://www.linkedin.com/in/dilan-balci/"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="social-link"
              target="_blank"
              href="https://angel.co/u/dilan-balci"
            >
              <i className="fab fa-angellist"></i>
            </a>
          </div>
        </div>
      </div>

      <div id="terry" className="profile-container">
        <img className="profile-pic" src="./images/terry-chow.jpeg" alt="" />
        <div className="profile-info">
          <h2 className="name">Terry Chow</h2>
          <h3 className="tagline">Frontend Developer</h3>
          <div className="social-links">
            <a
              className="social-link"
              target="_blank"
              href="http://linkedin.com/in/terry-chow-5860b265"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="social-link"
              target="_blank"
              href="https://angel.co/terry-h-chow"
            >
              <i className="fab fa-angellist"></i>
            </a>
          </div>
        </div>
      </div>

      <div id="hyolim" className="profile-container">
        <img className="profile-pic" src="./images/hyolim-jeong.jpeg" alt="" />
        <div className="profile-info">
          <h2 className="name">Hyo Lym Jeong</h2>
          <h3 className="tagline">Backend Developer</h3>
          <div className="social-links">
            <a
              className="social-link"
              target="_blank"
              href="https://www.linkedin.com/in/hyolim-jeong/"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="social-link"
              target="_blank"
              href="https://angel.co/u/hyo-lim-jeong"
            >
              <i className="fab fa-angellist"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};



export default GroupPage;
