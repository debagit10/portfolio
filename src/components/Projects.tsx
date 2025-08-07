import Slider from "react-slick";
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
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: false,
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
    <section id="projects" className="w-full px-4 py-12 text-white">
      <div className="text-center mb-8">
        <p className="text-gray-400 max-w-xl mx-auto">
          A few of the web and mobile backend projects I’ve worked on recently.
        </p>
      </div>

      <div className="w-full max-w-6xl md:mx-auto mx-[.5rem]">
        <Slider {...settings}>
          {projects.map((project, idx) => (
            <div key={idx} className="px-2">
              <div className="rounded-xl bg-white/5 p-4 border border-white/10 shadow-lg h-full flex flex-col max-w-md md:mx-auto mx-[.5rem]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg w-full h-48 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold mb-1 text-white">
                  {project.title}
                </h3>
                <p className="italic text-sm text-gray-400 mb-1">
                  {project.type} Project
                </p>
                <p className="text-sm text-gray-300 mb-3">
                  {project.description}
                </p>

                <div className="mt-auto flex gap-2 flex-wrap">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 border border-gray-300 text-sm rounded-md hover:bg-white/10 transition"
                    >
                      Live Site
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 border border-gray-300 text-sm rounded-md hover:bg-white/10 transition"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
