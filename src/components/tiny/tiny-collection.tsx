import {Check, Clock, Heart, Star, Users} from "lucide-react";
import {bestSellingCourses} from "@/@fake-db/courses";
import {Card, CardContent, CardFooter} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";

export const StudentCount = ({ showIcon }: { showIcon: boolean }) => {
    return (
        <div className="flex gap-1.5 items-center">
            {showIcon && <Users className="h-4 w-4 text-gray-400"/>}

            <div className="text-sm">
                <span className="text-gray-700 font-medium">265.7K </span>
                <span className="text-gray-500">students</span>
            </div>
        </div>
    );
};

export const Rating = ({ showCount }: { showCount: boolean }) => {
    return (
        <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400"/>
            <span className="font-medium">5.0</span>
            {showCount && <span className="text-gray-500">(357,914)</span>}
        </div>
    )
}


export const CourseCard = ({ course }: { course: typeof bestSellingCourses[0] }) => {
    return (
        <div className="relative group">
            <Card className="overflow-hidden h-full group-hover:shadow-[0_2px_6px_0px_#1D20260F]">
                <div className="aspect-[4/3] w-full overflow-hidden">
                    <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <CardContent className="p-4">
                    <div className="flex justify-between">
                        <div
                            className="bg-gray-100 inline-block text-[10px] px-2 py-1 text-gray-600 uppercase font-medium rounded mb-2">
                            {course.category}
                        </div>
                        <span className="font-bold text-etutor-primary">${course.price}</span>
                    </div>
                    <h3 className="text-sm font-medium line-clamp-2">
                        {course.title}
                    </h3>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                    <Rating showCount={false} />
                    <StudentCount showIcon={false}/>
                </CardFooter>
            </Card>

            <div className="w-[433px] opacity-0 -translate-y-[40%] hidden group-hover:block group-hover:-translate-y-1/2 group-hover:opacity-100 transition bg-white pt-6 shadow-lg absolute group-hover:z-20 top-1/2 left-full"
                style={{ boxShadow: '0px 4px 20px 0px #1D20261F' }}
            >
                <div className="px-6">
                    <div className="bg-blue-100 text-blue-600 inline-block text-xs px-2 py-1 uppercase font-medium rounded mb-2">
                        {course.category}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{course.title}</h3>
                    <div className="flex flex-col gap-5">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="size-12 shrink-0 rounded-full overflow-hidden">
                                    <img src={course.instructor.avatar} alt={course.instructor.name}
                                         className="w-full h-full object-cover"/>
                                </div>
                                <div className="flex flex-col text-sm">
                                    <span className="text-gray-500">Course By</span>
                                    <span className="text-gray-900">{course.instructor.name}</span>
                                </div>
                            </div>
                            <Rating showCount={true}/>
                        </div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex flex-col md:flex-row justify-between flex-1 text-sm text-gray-700">
                                <StudentCount showIcon={true}/>
                                <div className="flex items-center gap-1.5">
                                    <Clock className="h-4 w-4 text-gray-400"/>
                                    <span>Beginner</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Clock className="h-4 w-4 text-gray-400"/>
                                    <span>{course.duration} hour</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-1 mb-4 px-6">
                    <div className="text-2xl text-gray-900">${course.price.toFixed(2)}</div>
                    <div className="text-sm text-gray-500 line-through">${course.originalPrice.toFixed(2)}</div>
                    <div className="text-xs bg-etutor-primary-light text-etutor-primary px-2 py-1 rounded ml-1.5">50% OFF</div>
                    <Button
                        variant="outline"
                        size="icon"
                        className="ml-auto h-8 w-8"
                    >
                        <Heart className="h-4 w-4 text-etutor-primary" />
                    </Button>
                </div>


                <div className="py-5 border-y border-gray-100 px-6">
                    <h4 className="text-xs font-medium mb-2 text-gray-900">WHAT YOU'LL LEARN</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                        {course.learningPoints?.map((point, index) => (
                            <li key={index} className="flex gap-2">
                                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                                <span className="text-sm">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>


                <div className="px-6 pt-5 flex flex-col items-stretch gap-3 mb-10">
                    <Button>
                        Add To Cart
                    </Button>

                        <Link to={`/course-detail/${course.id}`}>
                            <Button variant="outline" className="w-full">
                                Course Detail
                            </Button>
                        </Link>
                </div>
            </div>
        </div>
    );
};
