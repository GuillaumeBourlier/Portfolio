import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/HomePage/home";
import Competencies from "./pages/CompetenciesPage/competencies";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Contact from "./pages/ContactPage/contact";

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
          <Route path="/competencies" element={<Competencies />} errorElement={<ErrorPage />} />
           <Route path="/contact" element={<Contact />} errorElement={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;