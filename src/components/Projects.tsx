import Slider from "react-slick";
import { Button, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "Web Portfolio",
    type: "Web",
    description:
      "A personal portfolio built with React, Tailwind CSS, and deployed on Vercel.",
    image: "https://source.unsplash.com/random/800x400?portfolio",
    liveLink: "https://your-portfolio.vercel.app",
    github: "https://github.com/yourusername/portfolio",
  },
  {
    title: "E-Commerce Admin API",
    type: "Mobile (Backend)",
    description:
      "A backend API built with Node.js, Express, and PostgreSQL for managing store data.",
    image: "https://source.unsplash.com/random/800x400?ecommerce",
    liveLink: "",
    github: "https://github.com/yourusername/ecommerce-api",
  },
  {
    title: "Short Links Manager",
    type: "Web",
    description:
      "A URL shortener with analytics and user auth. Built with MERN stack.",
    image: "https://source.unsplash.com/random/800x400?shortener",
    liveLink: "https://shortlinks.io",
    github: "https://github.com/yourusername/shortlinks",
  },
  {
    title: "Payment Integration API",
    type: "Mobile (Backend)",
    description:
      "Built a secure API for handling NFC-based payments, with audit logs and OTP auth.",
    image: "https://source.unsplash.com/random/800x400?payments",
    liveLink: "",
    github: "https://github.com/yourusername/payment-api",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-6xl md:mx-auto mx-[.5rem] px-4 py-12 text-white"
    >
      <div className="text-center mb-8">
        <Typography variant="h5" className="text-white mb-2">
          My Projects
        </Typography>
        <p className="text-gray-400 max-w-xl mx-auto">
          A few of the web and mobile backend projects I’ve worked on recently.
        </p>
      </div>

      <Slider {...settings}>
        {projects.map((project, idx) => (
          <div key={idx} className="p-4">
            <div className="rounded-xl bg-white/5 p-4 border border-white/10 shadow-lg h-full flex flex-col">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
              <Typography variant="h6" className="text-white mb-1">
                {project.title}
              </Typography>
              <p className="italic text-sm text-gray-400 mb-1">
                {project.type} Project
              </p>
              <p className="text-sm text-gray-300 mb-3">
                {project.description}
              </p>
              <div className="mt-auto flex gap-2">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        color: "#d1d5db",
                        borderColor: "#d1d5db",
                        textTransform: "none",
                      }}
                    >
                      Live Site
                    </Button>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        color: "#d1d5db",
                        borderColor: "#d1d5db",
                        textTransform: "none",
                      }}
                    >
                      GitHub
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Projects;
