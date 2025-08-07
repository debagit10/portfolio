import { Tooltip } from "@mui/material";
import {
  FaLinkedin,
  FaGithub,
  FaTiktok,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import { IoMdMail } from "react-icons/io";

const Footer = () => {
  const socials = [
    {
      name: "Email",
      icon: <IoMdMail className="md:w-[2rem] md:h-[2rem]" />,
      url: "mailto:debacodes@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="md:w-[2rem] md:h-[2rem]" />,
      url: "https://www.linkedin.com/in/josiah-elias-84ba8b234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="md:w-[2rem] md:h-[2rem]" />,
      url: "https://github.com/debagit10",
    },
    {
      name: "TikTok",
      icon: <FaTiktok className="md:w-[2rem] md:h-[2rem]" />,
      url: "https://www.tiktok.com/@debacodes?_t=ZS-8ygr89jYaUU&_r=1",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="md:w-[2rem] md:h-[2rem]" />,
      url: "https://www.instagram.com/debacodes?igsh=cTAxMmNjeGI5emQ4",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="md:w-[2rem] md:h-[2rem]" />,
      url: "https://x.com/debacodes?t=MI2emHflMYVmIM00Bc4j6g&s=09",
    },
  ];

  return (
    <footer className="mt-20 px-6 py-8 bg-white/10 backdrop-blur-md border-t border-white/20 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        {/* Branding */}
        <div>
          <h2 className="text-xl font-semibold">Josiah Elias</h2>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Socials */}

        <ul className="flex space-x-6 items-center text-xl">
          {socials.map((social) => (
            <li key={social.name} className="hover:text-gray-300 transition">
              <Tooltip title={social.name} placement="top">
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  {social.icon}
                </a>
              </Tooltip>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
