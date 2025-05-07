
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { bestSellingCourses } from "@/@fake-db/courses";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }: { course: typeof bestSellingCourses[0] }) => {
  return (
    <Card className="overflow-hidden h-full">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <div className="bg-gray-100 inline-block text-xs px-2 py-1 text-gray-600 uppercase font-medium rounded mb-2">
          {course.category}
        </div>
        <h3 className="text-sm font-medium line-clamp-2 h-10 mb-1">
          {course.title}
        </h3>
      </CardContent>
      <CardFooter className="flex items-center gap-2 p-4 pt-0">
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{course.rating}</span>
        </div>
        <span className="text-xs text-gray-500">{course.students.toLocaleString()} students</span>
        <div className="ml-auto">
          <span className="font-bold text-sm text-etutor-orange">${course.price}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

const BestSellingCourses = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Best selling courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {bestSellingCourses.slice(0, 10).map((course) => (
            <Link key={course.id} to={`/courses/${course.id}`}>
              <CourseCard course={course} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellingCourses;
