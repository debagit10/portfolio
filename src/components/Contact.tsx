import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSendMail = () => {
    const email = "debacodes@gmail.com";
    const subject = encodeURIComponent("Contact from Portfolio");
    const body = encodeURIComponent(message);

    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

    window.open(mailtoLink, "_blank");
  };

  return (
    <section
      id="contact"
      className="max-w-5xl md:mx-auto mx-[.5rem] my-16 px-6 py-12 rounded-xl backdrop-blur-md shadow-md border border-white/20 text-white"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Have a project idea, collaboration, or just want to say hi? Let’s
          connect!
        </p>
      </div>

      <form className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col col-span-1">
          <label htmlFor="name" className="text-sm text-gray-400 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Enter your name"
          />
        </div>

        <div className="flex flex-col col-span-1">
          <label htmlFor="email" className="text-sm text-gray-400 mb-1">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="flex flex-col col-span-full">
          <label htmlFor="message" className="text-sm text-gray-400 mb-1">
            Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="message"
            rows={5}
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Type your message here..."
          />
        </div>

        <div className="col-span-full text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition duration-200"
            onClick={handleSendMail}
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
