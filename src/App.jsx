import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home';
import Competencies from './pages/competencies';


function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competencies" element={<Competencies />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
