import {Check, Clock, Star, Users} from "lucide-react";
import {bestSellingCourses, CourseCategory} from "src/@fake-db/collections";
import {Card, CardContent, CardFooter} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";
import {Heart} from "@/assets/icons/common-icons.tsx"
import {useEffect, useRef, useState} from "react";

export const StudentCount = ({ count, showIcon }: { count: string | number; showIcon: boolean }) => {
    return (
        <div className="flex gap-1.5 items-center">
            {showIcon && <Users className="h-4 w-4 text-gray-400"/>}

            <div className="text-sm">
                <span className="text-gray-700 font-medium">{count ?? '265.7K'}</span>
                <span className="text-gray-500"> students</span>
            </div>
        </div>
    );
};

export const CategoryBadge: React.FC<{ category: CourseCategory }> = ({ category }) => {
    const colorVariants = {
        primary: "bg-primary-100 text-primary-700",
        secondary: "bg-secondary-100 text-secondary-700",
        warning: "bg-warning-100 text-primary-700",
        success: "bg-success-100 text-success-700",
        error: "bg-error-100 text-error-700",
        white: "bg-white",
        gray: "bg-gray-100 text-gray-700",
    };
  return (
      <div
          className={`inline-block text-[10px] px-2 py-1 uppercase font-medium rounded mb-2 ${colorVariants[category.color]}`}>
          {category.title}
      </div>
  )
}

export const Rating = ({ rating, showCount }: { rating?: number; showCount: boolean }) => {
    return (
        <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10.3446 14.901L14.2849 17.3974C14.7886 17.7165 15.4139 17.2419 15.2644 16.654L14.126 12.1756C14.0939 12.0509 14.0977 11.9197 14.137 11.797C14.1762 11.6743 14.2492 11.5652 14.3477 11.4822L17.8811 8.54132C18.3453 8.1549 18.1057 7.38439 17.5092 7.34567L12.8949 7.0462C12.7706 7.03732 12.6514 6.99332 12.5511 6.91931C12.4509 6.84531 12.3737 6.74435 12.3286 6.62819L10.6076 2.29436C10.5609 2.17106 10.4777 2.06492 10.3692 1.99002C10.2606 1.91511 10.1319 1.875 10 1.875C9.86813 1.875 9.73938 1.91511 9.63085 1.99002C9.52232 2.06492 9.43914 2.17106 9.39236 2.29436L7.6714 6.62819C7.62631 6.74435 7.54914 6.84531 7.4489 6.91931C7.34865 6.99332 7.22944 7.03732 7.10515 7.0462L2.49078 7.34567C1.89429 7.38439 1.65466 8.1549 2.11894 8.54132L5.65232 11.4822C5.75079 11.5652 5.82383 11.6743 5.86305 11.797C5.90226 11.9197 5.90606 12.0509 5.874 12.1756L4.81824 16.3288C4.63889 17.0343 5.38929 17.6038 5.99369 17.2209L9.65539 14.901C9.75837 14.8354 9.87792 14.8006 10 14.8006C10.1221 14.8006 10.2416 14.8354 10.3446 14.901Z" fill="#FD8E1F"/>
            </svg>
            <span className="font-medium text-gray-700 text-sm">{ rating && '5.0'}</span>
            {showCount && <span className="text-gray-500">(357,914)</span>}
        </div>
    )
}


export const CourseCard = ({ course }: { course: typeof bestSellingCourses[0] }) => {
    const popupRef = useRef<HTMLDivElement>(null);
    const [positionLeft, setPositionLeft] = useState(false);

    useEffect(() => {
        const checkPosition = () => {
            if (!popupRef.current) return;
            const rect = popupRef.current.getBoundingClientRect();
            const willOverflowRight = rect.left + rect.width > window.innerWidth;
            setPositionLeft(willOverflowRight);
        };

        // Run once after mount
        checkPosition();

        // Optional: Recheck on resize
        window.addEventListener("resize", checkPosition);
        return () => window.removeEventListener("resize", checkPosition);
    }, []);

    return (
        <div className="relative group text-primary-100">
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
                        <CategoryBadge category={course.category} />
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

            {/*Popup*/}
            <div
                ref={popupRef}
                className={`w-[433px] invisible group-hover:visible group-hover:opacity-100 transition bg-white pt-6 shadow-lg absolute z-20 top-1/2 -translate-y-1/2 ${
                    positionLeft ? "right-full" : "left-full"
                }`}
                style={{ boxShadow: "0px 4px 20px 0px #1D20261F" }}
            >
                <div className="px-6">
                    <CategoryBadge category={course.category} />

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
                        className="ml-auto h-8 w-8 group"
                    >
                        <Heart className="h-4 w-4 text-etutor-primary group-hover:text-white transition" />
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
