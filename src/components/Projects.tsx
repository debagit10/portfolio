import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "Plasticonn",
    type: "Web Application",
    description:
      "Developed a full platform for plastic collection management. A public website for drop-off centers and volunteers.",
    images: [
      "https://res.cloudinary.com/debacodes/image/upload/v1754693655/portfolio/plasticonn_ug2c7c.png",
    ],
    liveLink: "https://plasticonn.vercel.app",
    github: "https://github.com/debagit10/plasticonn",
  },
  {
    title: "Smart Farm",
    type: "Web Application",
    description:
      "Built a smart agriculture platform to monitor crops, track soil data, and provide real-time analytics to farmers.",
    images: [
      "https://res.cloudinary.com/debacodes/image/upload/v1754693749/portfolio/smartfarm_mxcync.png",
    ],
    liveLink: "https://smart-farm-lovat.vercel.app",
    github: "https://github.com/debagit10/smart-farm",
  },
  {
    title: "Tentyl",
    type: "Web Application",
    description:
      "Created a platform for simplified event management and ticketing, featuring real-time updates and mobile-friendly interfaces.",
    images: [
      "https://res.cloudinary.com/debacodes/image/upload/v1754693738/portfolio/tentyl_nm8l0p.png",
    ],
    liveLink: "https://tentyl.vercel.app/",
  },
  {
    title: "Encore AI",
    type: "Web + Admin Dashboard",
    description:
      "Built both the public-facing AI website directory and the admin dashboard. The website delivers AI-driven tools to users, while the dashboard allows managing models, users, and analytics.",
    images: [
      "https://res.cloudinary.com/debacodes/image/upload/v1754693699/portfolio/encore_l8mx8i.png",
      "https://res.cloudinary.com/debacodes/image/upload/v1754693700/portfolio/encore_dashboard_cnpzeb.png",
    ],
    liveLink: "https://encoreaitools.com",
  },
  {
    title: "MoneySmith",
    type: "Mobile Backend + Website",
    description:
      "All-in-one platform to store and manage credit/debit cards, enabling secure NFC-based transactions.",
    images: [
      "https://res.cloudinary.com/debacodes/image/upload/v1754693719/portfolio/moneysmith_tulrfj.png",
    ],
    liveLink: "https://www.moneysmithng.com/",
  },
  {
    title: "Midhill Cash Flow",
    type: "Mobile Backend + Admin Dashboard",
    description:
      "Developed backend APIs for managing financial records and transactions, and built a secure, responsive admin dashboard for cash flow monitoring and reporting.",
    images: [
      "https://res.cloudinary.com/debacodes/image/upload/v1754694313/portfolio/midhill_dashboard_ggx9fk.png",
    ],
  },
];

const outerSettings = {
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

const innerSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const Projects = () => {
  return (
    <section id="projects" className="w-full px-4 py-12 text-white">
      <div className="text-center mb-8">
        <p className="text-gray-400 max-w-xl mx-auto">
          A few of the web, mobile, and backend projects I’ve worked on
          recently.
        </p>
      </div>

      <div className="w-full max-w-6xl md:mx-auto mx-[.5rem]">
        <Slider {...outerSettings}>
          {projects.map((project, idx) => (
            <div key={idx} className="px-2">
              <div className="rounded-xl bg-white/5 p-4 border border-white/10 shadow-lg h-full flex flex-col max-w-md md:mx-auto mx-[.5rem]">
                {/* Inner image slider */}
                <Slider {...innerSettings}>
                  {project.images.map((img, i) => (
                    <div key={i}>
                      <img
                        src={img}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="rounded-lg w-full h-48 object-fit mb-4"
                      />
                    </div>
                  ))}
                </Slider>

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
