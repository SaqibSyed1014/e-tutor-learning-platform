
import { Card, CardContent } from "@/components/ui/card";
import { topInstructors } from "@/@fake-db/instructors";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

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
      <CardContent className="p-4">
        <h3 className="font-medium">{instructor.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{instructor.role}</p>
        <div className="flex items-center justify-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{instructor.rating}</span>
        </div>
        <p className="text-xs text-gray-500 mt-1">{instructor.students.toLocaleString()} students</p>
      </CardContent>
    </Card>
  );
};

const TopInstructors = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Top instructor of the month</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {topInstructors.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">Thousands of students waiting for a instructor. Start teaching & earning now.</p>
          <Link to="/become-instructor" className="text-etutor-orange hover:text-etutor-orange/80 flex items-center gap-1 justify-center">
            Become Instructor →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopInstructors;
