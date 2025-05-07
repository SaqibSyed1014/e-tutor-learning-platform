
import { BookOpen, Briefcase, Calculator, Camera, Code, FilmIcon, Headphones, Heart, Layout, Layers, Lightbulb } from "lucide-react";

type CategoryCardProps = {
  icon: React.ReactNode;
  title: string;
  courses: string;
  bgColor: string;
};

const CategoryCard = ({ icon, title, courses, bgColor }: CategoryCardProps) => {
  return (
    <div className={`${bgColor} p-5 rounded-lg transition-transform hover:scale-105 cursor-pointer`}>
      <div className="flex items-start space-x-3">
        <div className="mt-1">{icon}</div>
        <div>
          <h3 className="font-medium text-etutor-darkblue">{title}</h3>
          <p className="text-sm text-gray-500">{courses}</p>
        </div>
      </div>
    </div>
  );
};

const CourseCategories = () => {
  const categories = [
    {
      icon: <BookOpen size={18} className="text-indigo-600" />,
      title: "Legal",
      courses: "55,456 Courses",
      bgColor: "bg-indigo-50",
    },
    {
      icon: <Briefcase size={18} className="text-green-600" />,
      title: "Business",
      courses: "15,653 Courses",
      bgColor: "bg-green-50",
    },
    {
      icon: <Calculator size={18} className="text-amber-600" />,
      title: "Finance & Accounting",
      courses: "24,456 Courses",
      bgColor: "bg-amber-50",
    },
    {
      icon: <Code size={18} className="text-red-600" />,
      title: "IT & Software",
      courses: "35,675 Courses",
      bgColor: "bg-red-50",
    },
    {
      icon: <Lightbulb size={18} className="text-etutor-orange" />,
      title: "Personal Development",
      courses: "28,764 Courses",
      bgColor: "bg-orange-50",
    },
    {
      icon: <Layout size={18} className="text-gray-600" />,
      title: "Office Productivity",
      courses: "12,556 Courses",
      bgColor: "bg-gray-50",
    },
    {
      icon: <Layers size={18} className="text-blue-600" />,
      title: "Marketing",
      courses: "32,546 Courses",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Camera size={18} className="text-gray-600" />,
      title: "Photography & Video",
      courses: "9,546 Courses",
      bgColor: "bg-gray-50",
    },
    {
      icon: <Heart size={18} className="text-yellow-600" />,
      title: "Lifestyle",
      courses: "16,742 Courses",
      bgColor: "bg-yellow-50",
    },
    {
      icon: <Briefcase size={18} className="text-rose-600" />,
      title: "Design",
      courses: "13,265 Courses",
      bgColor: "bg-rose-50",
    },
    {
      icon: <Heart size={18} className="text-emerald-600" />,
      title: "Health & Fitness",
      courses: "15,784 Courses",
      bgColor: "bg-emerald-50",
    },
    {
      icon: <Headphones size={18} className="text-yellow-600" />,
      title: "Music",
      courses: "8,532 Courses",
      bgColor: "bg-yellow-50",
    },
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Browse top category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            icon={category.icon}
            title={category.title}
            courses={category.courses}
            bgColor={category.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseCategories;
