
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { recentlyAddedCourses, getSingleCourse } from "@/@fake-db/collections/index.ts";
import { Star, Users, Clock, Heart, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {CategoryBadge, CourseCard} from "@/components/tiny/tiny-collection.tsx";
import {ArrowRight} from "@/assets/icons/common-icons.tsx";

const RecentCourseCard = ({ course }: { course: typeof recentlyAddedCourses[0] }) => {
  return (
    <Card className="overflow-hidden h-full">
      <div className="aspect-video w-full overflow-hidden relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <CategoryBadge category={course.category} />
        <div className="absolute bottom-2 right-2 bg-etutor-primary text-white text-xs px-2 py-1 font-medium rounded">
          ${course.price}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-sm font-medium line-clamp-2 h-10 mb-1">
          {course.title}
        </h3>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{course.rating}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Users className="h-3 w-3" />
            <span>{course.students.toLocaleString()} students</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// const CourseDetail = ({ courseId }: { courseId: string }) => {
//   const course = getSingleCourse(courseId);
//
//   if (!course) return null;
//
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg">
//       <div className="mb-4">
//         <div className="bg-blue-100 text-blue-600 inline-block text-xs px-2 py-1 uppercase font-medium rounded mb-2">
//           {course.category}
//         </div>
//         <h3 className="text-xl font-bold mb-1">
//           {course.title}
//         </h3>
//         <div className="flex items-center gap-2 mb-2">
//           <span className="text-sm">Course By</span>
//           <div className="flex items-center gap-1">
//             <div className="h-5 w-5 rounded-full overflow-hidden">
//               <img src={course.instructor.avatar} alt={course.instructor.name} className="w-full h-full object-cover" />
//             </div>
//             <span className="text-sm font-medium">{course.instructor.name}</span>
//           </div>
//         </div>
//         <div className="flex items-center gap-3 mb-4">
//           <div className="flex items-center gap-1">
//             <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
//             <span className="text-sm font-medium">{course.rating}</span>
//             <span className="text-xs text-gray-500">({course.reviewCount.toLocaleString()})</span>
//           </div>
//           <div className="flex items-center gap-1">
//             <Users className="h-4 w-4 text-gray-400" />
//             <span className="text-xs text-gray-600">{course.students.toLocaleString()} students</span>
//           </div>
//           <div className="flex items-center gap-1">
//             <Clock className="h-4 w-4 text-gray-400" />
//             <span className="text-xs text-gray-600">{course.duration} hour</span>
//           </div>
//           <span className="text-xs bg-gray-100 px-2 py-1 rounded">{course.level}</span>
//         </div>
//       </div>
//
//       <div className="mb-8">
//         <h4 className="text-sm font-semibold mb-3">WHAT YOU'LL LEARN</h4>
//         <ul className="space-y-2">
//           {course.learningPoints?.map((point, index) => (
//             <li key={index} className="flex gap-2">
//               <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
//               <span className="text-sm">{point}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//
//       <div className="flex items-center gap-2 mb-4">
//         <div className="text-lg font-bold">${course.price.toFixed(2)}</div>
//         <div className="text-sm text-gray-500 line-through">${course.originalPrice.toFixed(2)}</div>
//         {course.discount && (
//           <div className="text-xs bg-red-100 text-red-500 px-2 py-1 rounded">{course.discount}% OFF</div>
//         )}
//         <Button
//           variant="outline"
//           size="icon"
//           className="ml-auto h-8 w-8 border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-500"
//         >
//           <Heart className="h-4 w-4" />
//         </Button>
//       </div>
//
//       <Button className="w-full bg-etutor-primary hover:bg-etutor-primary/90 text-white mb-4">
//         Add To Cart
//       </Button>
//
//       <Link to={`/course-detail/${course.id}`}>
//         <Button variant="outline" className="w-full border-gray-200 hover:bg-gray-50">
//           Course Detail
//         </Button>
//       </Link>
//     </div>
//   );
// };

const RecentCourses = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container">
        <div className="section-layout">
            <h2 className="section-heading">Recently added courses</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {recentlyAddedCourses.slice(0, 4).map((course) => (
                  <div
                      key={course.id}
                      className="cursor-pointer"
                  >
                    <CourseCard course={course} />
                  </div>
              ))}
          </div>

          <Button to="/courses" variant="outline" className="mx-auto">
            Browse All Course <ArrowRight classes="scale-150 ml-1" />
          </Button>
        </div>

      </div>
    </section>
  );
};

export default RecentCourses;
