import React from 'react';
import './topbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Topbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="Heading" href="/">Digital Recruitment</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="topItemtext nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="topItemtext nav-link" href="#services">Clients</a>
            </li>
            <li className="nav-item">
              <a className="topItemtext nav-link" href="#reviews">Reviews</a>
            </li>
            <li className="nav-item">
              <a className="topItemtext nav-link" href="#Aboutus">About us</a>
            </li>
            <li className="nav-item">
              <a className="topItemtext nav-link" href="#footer">Contact us</a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="button-29" onClick={() => window.location.href = '/signup'}>
                Login/Register
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
