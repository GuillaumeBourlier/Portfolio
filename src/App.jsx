import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useContext, Suspense, lazy } from "react";
import { ThemeProvider, ThemeContext } from "./components/Theme/ThemeContext";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";

const Home = lazy(() => import("./pages/HomePage/home"));
const Competencies = lazy(() =>
  import("./pages/CompetenciesPage/competencies")
);
const Projects = lazy(() => import("./pages/ProjectsPage/projects"));
const Contact = lazy(() => import("./pages/ContactPage/contact"));
const ErrorPage = lazy(() => import("./pages/ErrorPage/ErrorPage"));

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
        <Router>
          <div className={`app ${theme}`}>
            <Navbar />
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/competencies" element={<Competencies />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </Suspense>
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
