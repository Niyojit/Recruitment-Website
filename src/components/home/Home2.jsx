import React from 'react';
import "./home.css";


export default function Home2() {
  return (
    <div className="Home">
      
      <div className="homeWrapper">
        <div className="homeWrapperLeft">
          <span className="homeWrapperLeftContent">We help you <span className="homeWrapperLeftContenttxt">Build</span> your Digital teams</span>
          <div className="homeWrapperLeftContentbtns">
            <button className="homeWrapperLeftbtn1" onClick={() => window.location.href = '/signup'} >Start Hiring</button>
            <button className="homeWrapperLeftbtn1" onClick={() => window.location.href = '#Aboutus'}>Get in touch</button>
          </div>
        </div>
        <div className="homeWrapperRight">
        <img src="assests/9.png" alt="" className="homeWrapperRightimg"/>
       </div>
      </div>
    </div>
    
  );
}