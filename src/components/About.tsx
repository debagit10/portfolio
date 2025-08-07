const About = () => {
  return (
    <section
      id="about"
      className="max-w-5xl mx-[.5rem] md:mx-auto my-8 px-6 py-12 rounded-xl  backdrop-blur-md shadow-md border border-white/20 text-white"
    >
      <div className="text-center mb-8">
        <p className="text-gray-300 max-w-2xl mx-auto">
          I’m Josiah Elias — a passionate software developer and tech content
          creator. I specialize in building sleek, user-friendly interfaces and
          modern backend systems. Whether it’s turning a concept into code or
          breaking down complex tech into easy-to-understand content, I love
          bringing ideas to life through technology.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 text-gray-300">
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">What I Do</h3>
          <ul className="list-disc list-inside">
            <li>Frontend development with React & Tailwind</li>
            <li>Backend development with Node.js & PostgreSQL</li>
            <li>API design & integration</li>
            <li>Tech content creation on TikTok & Instagram</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Values & Goals
          </h3>
          <ul className="list-disc list-inside">
            <li>Building accessible and scalable products</li>
            <li>Creating tech content that educates and inspires</li>
            <li>Staying up-to-date with the latest technologies</li>
            <li>Collaborating with like-minded innovators</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
