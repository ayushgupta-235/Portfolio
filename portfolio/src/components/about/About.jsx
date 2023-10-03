import "./about.scss"
import React from 'react'
import { School,DashboardCustomize,SportsTennis } from "@mui/icons-material"

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-section">
        <details>
          <summary>
            <School fontSize="large"/>
            <h2>Education</h2>
          </summary>
          <p>I secured 95% in class 10 and 92.8% in class 12 from Morning Star,Orai.<br/>I am currently pursuing Integrated Master of Technology in Mathematics and Computing</p>
        </details>
      </div>
      <div className="about-section">
        <details>
          <summary>
            <DashboardCustomize fontSize="large"/>
            <h2>My Skills</h2>
          </summary>
          <p>I am passionate about Blockchain.I am a full stack developer.I have a good command in HTML,CSS,JavaScript,React,C++,python.<br/>I am also the part of CyberLabs,official programming club of IIT ISM Dhanbad.</p>
        </details>
      </div>
      <div className="about-section">
        <details>
          <summary>
            <SportsTennis/>
            <h2>Extra Curricular Activity</h2>
          </summary>
          <p>I have a great passion for drawing.I also play sports like Badminton.I like to read thriller books.I am deeply interested in economics related things.</p>
        </details>
      </div>
    </div>
  )
}

export default About
