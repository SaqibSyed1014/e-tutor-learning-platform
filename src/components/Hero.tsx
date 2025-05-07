
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="w-full bg-gradient-to-r from-white to-gray-100" style={{ background: 'linear-gradient(180deg, rgba(240, 242, 245, 0) 0.02%, #F0F2F5 220.8%)' }}>
      <div className="container px-4 py-12 flex flex-col gap-20 lg:flex-row items-center">
        <div className="flex flex-col items-start gap-10 w-full max-w-[648px] mb-10 lg:mb-0">
          <h1 className="text-5xl md:text-7xl font-bold text-etutor-darkblue">
            Learn with expert <br /> anytime anywhere
          </h1>
          <p className="text-2xl">
            Our mission is to help people to find the best course
            online and learn with expert anytime, anywhere.
          </p>
          <Button variant="default">
            Create Account
          </Button>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src="/lovable-uploads/fef10bbb-920a-4d26-b178-a7cd0bf53cf8.png"
            alt="Students learning"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
