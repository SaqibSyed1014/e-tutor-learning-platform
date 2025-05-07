
import { Button } from "@/components/ui/button";
import statsData from "@/@fake-db/stats";

const CtaSection = () => {
  return (
    <div className="w-full bg-etutor-darkblue text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start learning with 67.1k students around the world.
          </h2>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button className="bg-etutor-orange hover:bg-etutor-orange/90 text-white">
              Join The Family
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-etutor-darkblue">
              Browse All Courses
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-3xl mx-auto">
          {statsData.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-gray-300">{stat.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
