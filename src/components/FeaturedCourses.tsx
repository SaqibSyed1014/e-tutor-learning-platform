
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import { featuredCourses } from "@/@fake-db/courses";
import { Star, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import {Rating, StudentCount} from "@/components/tiny/tiny-collection.tsx";
import RecentCourses from "@/components/RecentCourses.tsx";

const FeaturedCourseCard = ({ course }: { course: typeof featuredCourses[0] }) => {
  return (
    <Card className="overflow-hidden flex flex-col md:flex-row border-0 hover:shadow-[0_2px_6px_0px_#1D20260F] transition">
      <div className="w-full md:w-[220px] md:h-[188px] shrink-0">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col border border-gray-100">
        <CardContent className="flex-1 p-4 md:p-5">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <div
                  className="bg-gray-100 inline-block text-xs px-2 py-1 text-gray-600 uppercase font-medium rounded">
                {course.category}
              </div>
              <div className="flex items-center gap-1">
                <span className="text-lg text-gray-900">$14.00</span>
                <span className="text-gray-400" style={{textDecoration: 'line-through'}}>$26.00</span>
              </div>
            </div>
            <h3 className="text-base md:text-lg line-clamp-1 font-medium">
              {course.title}
            </h3>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-3">
              <div className="size-7 shrink-0 rounded-full overflow-hidden">
                <img src={course.instructor.avatar} alt={course.instructor.name}
                     className="w-full h-full object-cover"/>
              </div>
              <span className="text-gray-700">{course.instructor.name}</span>
            </div>
            <Rating showCount={true} />
          </div>
        </div>
      </CardContent>
        <CardFooter>
          <div className="flex flex-col md:flex-row justify-between flex-1 text-sm text-gray-700">
            <StudentCount showIcon={true} />
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-gray-400"/>
              <span>Beginner</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-gray-400"/>
              <span>{course.duration} hour</span>
            </div>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
};

const FeaturedCourses = () => {
  return (
    <section className="py-20 relative -top-[350px]">
      <div className="bg-white border border-gray-100 p-20 mx-auto w-fit">
        <div className="container m-0">
          <div className="section-layout">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <h2 className="section-heading">Our feature courses</h2>
              <p className="text-sm w-full max-w-[424px]">
                Vestibulum sed dolor sed diam mollis maximus vel nec dolor.
                Donec varius purus et eleifend porta.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredCourses.map((course) => (
                  <Link key={course.id} to={`/courses/${course.id}`}>
                    <FeaturedCourseCard course={course}/>
                  </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <RecentCourses />
    </section>
  );
};

export default FeaturedCourses;
