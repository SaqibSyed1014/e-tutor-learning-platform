

import { recentlyAddedCourses } from "@/@fake-db/collections/index.ts";

import { Button } from "@/components/ui/button";
import {CourseCard} from "@/components/CourseCard.tsx";
import {ArrowRight} from "@/assets/icons/common-icons.tsx";

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
