import {
  SiReact,
  //SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  //SiJsonwebtokens,
  SiGithub,
  //SiVercel,
  SiPostman,
  SiFigma,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const frontendSkills = [
  { name: "React.js", icon: <SiReact /> },
  //   { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Material UI", icon: <SiMui /> },
  { name: "TypeScript", icon: <SiTypescript /> },
];

const backendSkills = [
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  //  { name: "JWT Auth", icon: <SiJsonwebtokens /> },
];

const toolSkills = [
  { name: "Git & GitHub", icon: <SiGithub /> },
  { name: "VS Code", icon: <VscVscode /> },
  // { name: "Vercel", icon: <SiVercel /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Figma (basic)", icon: <SiFigma /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="max-w-5xl lg:mx-auto mx-[.5rem] my-8 px-6 py-12 rounded-xl  backdrop-blur-md shadow-md border border-white/20 text-white"
    >
      <div className="grid md:grid-cols-3 gap-8 text-gray-300">
        {/* Frontend */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Frontend</h3>
          <ul className="space-y-2">
            {frontendSkills.map((skill) => (
              <li key={skill.name} className="flex items-center gap-2">
                {skill.icon} {skill.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Backend */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Backend</h3>
          <ul className="space-y-2">
            {backendSkills.map((skill) => (
              <li key={skill.name} className="flex items-center gap-2">
                {skill.icon} {skill.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Tools & Others
          </h3>
          <ul className="space-y-2">
            {toolSkills.map((skill) => (
              <li key={skill.name} className="flex items-center gap-2">
                {skill.icon} {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
