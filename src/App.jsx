import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/HomePage/home";
import Competencies from "./pages/CompetenciesPage/competencies";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Contact from "./pages/ContactPage/contact";
import Projects from "./pages/ProjectsPage/projects";
import Loader from "./components/Loader/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!window.location.hash) {
      window.location.hash = "#/"
    }
  }, [])

 return (
    <Router>
      {isLoading ? (
        <Loader onFinish={() => setIsLoading(false)} />
      ) : (
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/competencies" element={<Competencies />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
      </Routes>
          <Footer />
        </div>
      )}
    </Router>
  )
}
export default App;