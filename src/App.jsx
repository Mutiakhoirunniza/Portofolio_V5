import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, Suspense } from "react";
import PropTypes from "prop-types";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./components/Layout/Navbar";
import Portofolio from "./Pages/Portofolio";
import ContactPage from "./Pages/Contact";
import ProjectDetails from "./components/Portfolio/ProjectDetail";
import WelcomeScreen from "./Pages/WelcomeScreen";
import { AnimatePresence } from 'framer-motion';
import NotFoundPage from "./Pages/404";
import ScrollProgress from "./components/Common/ScrollProgress";
import CustomCursor from "./components/Common/CustomCursor";
import LiveClock from "./components/Common/LiveClock";

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <Suspense fallback={null}>
            <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
          </Suspense>
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <CustomCursor />
          <ScrollProgress />
          <LiveClock />
          <Navbar />

          <Home />
          <About />
          <Portofolio />
          <ContactPage />
          <footer>
            <center>
              <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
              <span className="block text-sm pb-4 text-gray-500 text-center">
                © 2025{" "}
                <a href="/" className="hover:underline hover:text-indigo-400">
                  Mutia Khoirunniza™
                </a>
                . All Rights Reserved.
              </span>
            </center>
          </footer>
        </>
      )}
    </>
  );
};

LandingPage.propTypes = {
  showWelcome: PropTypes.bool.isRequired,
  setShowWelcome: PropTypes.func.isRequired,
};

const ProjectPageLayout = () => (
  <>
    <ProjectDetails />
    <footer>
      <center>
        <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
        <span className="block text-sm pb-4 text-gray-500 text-center">
          © 2025{" "}
          <a href="/" className="hover:underline hover:text-indigo-400">
            Mutia Khoirunniza™
          </a>
          . All Rights Reserved.
        </span>
      </center>
    </footer>
  </>
);

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />} />
          <Route path="/project/:id" element={<ProjectPageLayout />} />
          <Route path="*" element={<NotFoundPage />} /> {/* Ini route 404 */}
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;