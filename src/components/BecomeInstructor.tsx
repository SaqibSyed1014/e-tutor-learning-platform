
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BecomeInstructor = () => {
  return (
    <div className="w-full bg-gray-50 pt-20 pb-80">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 md:p-10" style={{ background: 'linear-gradient(90deg, #CC522B 0%, #FF6636 100%)' }}>
            <h2 className="text-3xl font-bold mb-3 text-white">Become an instructor</h2>
            <p className="mb-6 text-white w-full max-w-[321px]">
              Instructors from around the world teach millions
              of students on Udemy. We provide the tools
              and skills to teach what you love.
            </p>
            <Button
              variant="outlineInvert"
            >
              Start Teaching <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="bg-white p-10 md:p-10">
            <h2 className="text-3xl font-bold mb-6">Your teaching & earning steps</h2>

            <div className="grid grid-cols-2 gap-5 text-base">
              <div className="flex items-center gap-4">
                <div className="bg-secondary-100 text-secondary-500 font-semibold text-2xl size-[52px] rounded-full flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="">Apply to become instructor</h3>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-secondary-100 text-secondary-500 font-semibold text-2xl size-[52px] rounded-full flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="">Build & edit your profile</h3>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-error-100 text-primary-500 font-semibold text-2xl size-[52px] rounded-full flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="">Create your new course</h3>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-success-100 text-success-500 font-semibold text-2xl size-[52px] rounded-full flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="">Start teaching & earning</h3>
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
