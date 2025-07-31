import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useContext } from "react";
import { ThemeProvider, ThemeContext } from "./components/Theme/ThemeContext";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/HomePage/home";
import Competencies from "./pages/CompetenciesPage/competencies";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Contact from "./pages/ContactPage/contact";
import Projects from "./pages/ProjectsPage/projects";
import Loader from "./components/Loader/Loader";

function AppContent() {
  const { theme } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaderFinish = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <Loader onFinish={handleLoaderFinish} />
      ) : (
        <Router basename="/Portfolio">
          <div className={`app ${theme}`}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route index element={<Home />} /> */}
              <Route path="/competencies" element={<Competencies />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      )}
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
