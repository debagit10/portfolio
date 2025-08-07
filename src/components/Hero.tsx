import { Typography } from "@mui/material";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 text-white min-h-[80vh]">
      {/* Left Text Section */}
      <div className="flex flex-col gap-4 text-center md:text-left max-w-xl">
        <Typography variant="h4" className="!font-bold !text-gray-200">
          Hello, I'm <span className="text-silver-300">Josiah Elias</span>
        </Typography>
        <Typography
          variant="h2"
          className="!font-extrabold !text-4xl md:!text-5xl !leading-tight"
        >
          Software Developer
        </Typography>
        <Typography variant="h5" className="!text-gray-400 !font-medium">
          & Tech Content Creator
        </Typography>
      </div>

      {/* Image Section */}
      <div className="mt-10 md:mt-0 bg-white/10 backdrop-blur-md p-6 rounded-full border border-white/20 shadow-lg">
        <img
          src="/deba_image.png"
          alt="Hero"
          className="object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default Hero;
