
import { Link } from "react-router-dom";
import {
  Processor,
  Handshake,
  CreditCard,
  ChartBarHorizontal,
  BugDroid,
  Receipt,
  MegaPhoneSpeaker,
  Camera,
  PenNib,
  FirstAidKit,
  Headphones,
  Package
} from "@/assets/icons/icons.tsx";
import { ArrowRight } from "@/assets/icons/common-icons.tsx";
import { topCourses } from "@/@fake-db/courses";


type CategoryCardProps = {
  icon: React.ReactNode;
  title: string;
  courses: string;
  bgColor: string;
};

const CategoryCard = ({ icon, title, courses, bgColor }: CategoryCardProps) => {
  const colorVariants = {
    primary: "bg-primary-100",
    secondary: "bg-secondary-100",
    warning: "bg-warning-100",
    success: "bg-success-100",
    error: "bg-error-100",
    white: "bg-white",
    gray: "bg-gray-50",
  };
  return (
    <div className={`p-5 rounded-lg cursor-pointer transition hover:shadow-[0_12px_32px_0px_rgba(29,32,38,0.1)] ${colorVariants[bgColor]}`}>
      <div className="flex items-center space-x-5">
        <div className="flex justify-center items-center size-16" style={{ background: (title == 'Personal Development' ? '#FF6636' : '#fff') }}>
          <div className="mt-1">{icon}</div>
        </div>
        <div>
          <h3 className="text-base font-medium text-etutor-darkblue">{title}</h3>
          <p className="text-sm text-gray-600">{courses}</p>
        </div>
      </div>
    </div>
  );
};

const CourseCategories = () => {
  const categories = [
    {
      icon: <Processor />,
      title: "Legal",
      courses: "55,456 Courses",
      bgColor: "#EBEBFF",
    },
    {
      icon: <Handshake />,
      title: "Business",
      courses: "15,653 Courses",
      bgColor: "#E1F7E3",
    },
    {
      icon: <CreditCard />,
      title: "Finance & Accounting",
      courses: "24,456 Courses",
      bgColor: "#FFF2E5",
    },
    {
      icon: <ChartBarHorizontal />,
      title: "IT & Software",
      courses: "35,675 Courses",
      bgColor: "#FFF0F0",
    },
    {
      icon: <BugDroid />,
      title: "Personal Development",
      courses: "28,764 Courses",
      bgColor: "#ffffff",
    },
    {
      icon: <Receipt />,
      title: "Office Productivity",
      courses: "12,556 Courses",
      bgColor: "#F5F7FA",
    },
    {
      icon: <MegaPhoneSpeaker />,
      title: "Marketing",
      courses: "32,546 Courses",
      bgColor: "#EBEBFF",
    },
    {
      icon: <Camera />,
      title: "Photography & Video",
      courses: "9,546 Courses",
      bgColor: "#F5F7FA",
    },
    {
      icon: <Package />,
      title: "Lifestyle",
      courses: "16,742 Courses",
      bgColor: "#FFF2E5",
    },
    {
      icon: <PenNib />,
      title: "Design",
      courses: "13,265 Courses",
      bgColor: "#FFEEE8",
    },
    {
      icon: <FirstAidKit />,
      title: "Health & Fitness",
      courses: "15,784 Courses",
      bgColor: "#E1F7E3",
    },
    {
      icon: <Headphones />,
      title: "Music",
      courses: "8,532 Courses",
      bgColor: "#FFF2E5",
    },
  ];

  return (
    <div className="container py-20">
      <div className="section-layout">
        <h2 className="section-heading">Browse top category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topCourses.map((category, index) => (
              <CategoryCard
                  key={index}
                  icon={category.icon}
                  title={category.title}
                  courses={category.courses}
                  bgColor={category.color}
              />
          ))}
        </div>
        <div className="flex gap-3 items-center text-sm mx-auto">
          <p>We have more category & subcategory.</p>
          <Link to="" className="plain-link">
            Browse All <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCategories;
