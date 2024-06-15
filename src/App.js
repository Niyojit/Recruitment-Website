
import './App.css';
import Topbar from './components/topbar/Topbar'
import Home from './components/home/Home';
import Partners from './components/partners/Partners';
import Aboutus from './components/aboutus/Aboutus';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './components/signup/Signup';
import Login from './components/loginform/Login';
import Candidate from './components/candidateinfo/Candidate';
import Reviews from './components/reviews/Review';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>

      <Topbar />
        <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/candidate" element={<Candidate/>} />
          <Route path="/review" element={<Reviews/>} />

      </Routes>
      
        </div>
        <Footer/>
    </Router>
  );
}

export default App;
