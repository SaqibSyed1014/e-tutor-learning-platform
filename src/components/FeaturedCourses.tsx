
import { Card, CardContent } from "@/components/ui/card";
import { featuredCourses } from "@/@fake-db/courses";
import { Star, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedCourseCard = ({ course }: { course: typeof featuredCourses[0] }) => {
  return (
    <Card className="overflow-hidden flex flex-col md:flex-row border-0 shadow-none">
      <div className="w-full md:w-1/3 aspect-video md:aspect-square overflow-hidden rounded-lg">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="flex-1 p-4 md:p-6">
        <div className="bg-gray-100 inline-block text-xs px-2 py-1 text-gray-600 uppercase font-medium rounded mb-2">
          {course.category}
        </div>
        <h3 className="text-base md:text-lg font-medium mb-2 hover:text-etutor-orange transition-colors">
          {course.title}
        </h3>
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center gap-1">
            <div className="h-6 w-6 rounded-full overflow-hidden">
              <img src={course.instructor.avatar} alt={course.instructor.name} className="w-full h-full object-cover" />
            </div>
            <span className="text-sm text-gray-600">{course.instructor.name}</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-6">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{course.rating.toFixed(1)}</span>
            <span className="text-xs text-gray-500">({course.reviewCount.toLocaleString()})</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">{course.students.toLocaleString()} students</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">{course.duration} hour</span>
          </div>
          <div className="flex items-center gap-1 ml-auto">
            <span className="text-sm text-gray-500 line-through">${course.originalPrice.toFixed(2)}</span>
            <span className="font-bold text-xl text-etutor-darkblue">${course.price.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const FeaturedCourses = () => {
  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Our feature courses</h2>
            <p className="text-gray-500 max-w-xl">
              Vestibulum sed dolor sed diam mollis maximus vel nec dolor.
              Donec varius purus et eleifend porta.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredCourses.map((course) => (
            <Link key={course.id} to={`/courses/${course.id}`}>
              <FeaturedCourseCard course={course} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
