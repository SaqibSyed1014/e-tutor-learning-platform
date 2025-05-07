
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BecomeInstructor = () => {
  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-etutor-orange text-white p-8 md:p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Become an instructor</h2>
            <p className="mb-8">
              Instructors from around the world teach millions 
              of students on Udemy. We provide the tools 
              and skills to teach what you love.
            </p>
            <Button 
              variant="outline" 
              className="text-white border-white hover:bg-white hover:text-etutor-orange"
            >
              Start Teaching <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Your teaching & earning steps</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-blue-100 text-blue-600 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-medium">Apply to become instructor</h3>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-blue-100 text-blue-600 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-medium">Build & edit your profile</h3>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-blue-100 text-blue-600 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-medium">Create your new course</h3>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-green-100 text-green-600 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-medium">Start teaching & earning</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeInstructor;
