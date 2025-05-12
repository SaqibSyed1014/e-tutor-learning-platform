
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import { topInstructors } from "@/@fake-db/instructors";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import {Rating, StudentCount} from "@/components/tiny/tiny-collection.tsx";
import {ArrowRight} from "@/assets/icons/common-icons.tsx";

const InstructorCard = ({ instructor }: { instructor: typeof topInstructors[0] }) => {
  return (
    <Card className="overflow-hidden text-center">
      <div className="aspect-square w-full overflow-hidden bg-yellow-500">
        <img
          src={instructor.avatar}
          alt={instructor.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="flex flex-col gap-1 p-4">
        <p className="text-base font-medium text-gray-900">{instructor.name}</p>
        <p className="text-sm text-gray-500">{instructor.role}</p>
      </CardContent>
        <CardFooter className="flex items-center justify-between">
            <Rating rating={instructor.rating} showCount={false} />
            <StudentCount count={instructor.students} showIcon={false}/>
        </CardFooter>
    </Card>
  );
};

const TopInstructors = () => {
  return (
    <div className="py-20 relative -top-[320px] mb-[-320px]">
        <div className="bg-white border border-gray-100 p-20 mx-auto w-fit">
          <div className="container m-0">
              <div className="section-layout">
                  <h2 className="section-heading">Top instructor of the month</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                      {topInstructors.map((instructor) => (
                          <InstructorCard key={instructor.id} instructor={instructor}/>
                      ))}
                  </div>
                  <div className="flex gap-2 items-center mx-auto">
                      <p>Thousands of students waiting for a instructor. Start teaching &
                          earning now.</p>
                      <Link to="/become-instructor" className="plain-link">
                          Become Instructor <ArrowRight />
                      </Link>
                  </div>
              </div>
          </div>
        </div>
    </div>
  );
};

export default TopInstructors;
