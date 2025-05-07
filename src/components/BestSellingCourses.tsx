
import { bestSellingCourses } from "@/@fake-db/courses";
import { Link } from "react-router-dom";
import {CourseCard} from "@/components/tiny/tiny-collection.tsx";


const BestSellingCourses = () => {
  return (
    <div className="w-full bg-gray-50 pt-20 pb-80">
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
