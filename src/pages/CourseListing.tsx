import {coursesData} from "@/@fake-db/courses/index.tsx"
import {CourseCard} from "@/components/CourseCard.tsx";

const CourseListing = () => {
    return (
        <section className="py-10">
            <div className="container">

                <div className="grid grid-cols-4 gap-6">
                    {coursesData.map((course) => {
                        return <CourseCard course={course} />
                    })}
                </div>
            </div>

        </section>
    )
}

export default CourseListing;
