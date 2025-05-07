
import { BookOpen, Briefcase, Calculator, Camera, Code, FilmIcon, Headphones, Heart, Layout, Layers, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";


type CategoryCardProps = {
  icon: React.ReactNode;
  title: string;
  courses: string;
  bgColor: string;
};

const CategoryCard = ({ icon, title, courses, bgColor }: CategoryCardProps) => {
  return (
    <div className={`p-5 rounded-lg transition-transform hover:scale-105 cursor-pointer`} style={{ background: bgColor }}>
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
      icon: <BookOpen size={18} className="text-indigo-600" />,
      title: "Legal",
      courses: "55,456 Courses",
      bgColor: "#EBEBFF",
    },
    {
      icon: <Briefcase size={18} className="text-green-600" />,
      title: "Business",
      courses: "15,653 Courses",
      bgColor: "#E1F7E3",
    },
    {
      icon: <Calculator size={18} className="text-amber-600" />,
      title: "Finance & Accounting",
      courses: "24,456 Courses",
      bgColor: "#FFF2E5",
    },
    {
      icon: <Code size={18} className="text-red-600" />,
      title: "IT & Software",
      courses: "35,675 Courses",
      bgColor: "#FFF0F0",
    },
    {
      icon: <Lightbulb size={18} className="text-white" />,
      title: "Personal Development",
      courses: "28,764 Courses",
      bgColor: "#ffffff",
    },
    {
      icon: <Layout size={18} className="text-gray-600" />,
      title: "Office Productivity",
      courses: "12,556 Courses",
      bgColor: "#F5F7FA",
    },
    {
      icon: <Layers size={18} className="text-blue-600" />,
      title: "Marketing",
      courses: "32,546 Courses",
      bgColor: "#EBEBFF",
    },
    {
      icon: <Camera size={18} className="text-gray-600" />,
      title: "Photography & Video",
      courses: "9,546 Courses",
      bgColor: "#F5F7FA",
    },
    {
      icon: <Heart size={18} className="text-yellow-600" />,
      title: "Lifestyle",
      courses: "16,742 Courses",
      bgColor: "#FFF2E5",
    },
    {
      icon: <Briefcase size={18} className="text-rose-600" />,
      title: "Design",
      courses: "13,265 Courses",
      bgColor: "#FFEEE8",
    },
    {
      icon: <Heart size={18} className="text-emerald-600" />,
      title: "Health & Fitness",
      courses: "15,784 Courses",
      bgColor: "#E1F7E3",
    },
    {
      icon: <Headphones size={18} className="text-yellow-600" />,
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
        <div className="flex gap-3 items-center text-sm mx-auto">
          <p>We have more category & subcategory.</p>
          <Link to="" className="plain-link">Browse All</Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCategories;
