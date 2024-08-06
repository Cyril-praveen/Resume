import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
import Skills1 from "./components/Skills1/index.js";
import Achievement from "./components/Achievement/index.js";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
    343.07deg,
    rgb(23 92 230 / 7%) 5.71%,
    #0b1e30f7 64.83%
  );
  width: 100%;
`;
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [archievementOpenModal, setArchievementOpenModal] = useState({
    state: false,
    project: null,
  });
  console.log(openModal);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Skills1 />
            <Experience />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Achievement
              openModal={archievementOpenModal}
              setOpenModal={setArchievementOpenModal}
            />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
          {archievementOpenModal.state && (
            <ProjectDetails
              openModal={archievementOpenModal}
              setOpenModal={setArchievementOpenModal}
            />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
