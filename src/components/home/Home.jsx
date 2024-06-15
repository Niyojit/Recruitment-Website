import React from 'react';
import "./home.css";
import Home2 from './Home2';
import Partners from '../partners/Partners';
import Aboutus from '../aboutus/Aboutus';
// import Footer from '../footer/Footer';
import Reviews from '../reviews/Review';

export default function Home() {
  return (


    
    <div className="Home">

     <Home2/>
     <Partners/>
     <Reviews/>
      <Aboutus/>
      
    </div>
    
  );
}
