import { Divider, Typography } from "@mui/material";
import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const components = [
  { name: "About me", component: About },
  { name: "Tech Stack & Tools ", component: Skills },
  { name: "My Projects", component: Projects },
  { name: "Contact Me", component: Contact },
];

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      {components.map((Component, index) => (
        <div>
          <Divider
            sx={{
              mt: 4,
              mx: 4,

              fontWeight: "bold",
              color: "#888",
              "&::before, &::after": {
                borderColor: "#ffffff33",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "18px",
                  sm: "32px",
                  md: "48px",
                },
                fontWeight: "bold",
              }}
              gutterBottom
            >
              {Component.name}
            </Typography>
          </Divider>
          <Component.component key={index} />
        </div>
      ))}

      <Footer />
    </div>
  );
};

export default App;
