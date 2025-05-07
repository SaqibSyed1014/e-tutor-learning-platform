
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="w-full bg-gradient-to-r from-white to-gray-100">
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-etutor-darkblue mb-4">
            Learn with expert <br /> anytime anywhere
          </h1>
          <p className="text-gray-600 mb-8 max-w-md">
            Our mission is to help people to find the best course
            online and learn with expert anytime, anywhere.
          </p>
          <Button className="bg-etutor-orange hover:bg-etutor-orange/90 text-white px-6 py-5">
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
