
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CourseCategories from "@/components/CourseCategories";
import BestSellingCourses from "@/components/BestSellingCourses";
import FeaturedCourses from "@/components/FeaturedCourses";
import RecentCourses from "@/components/RecentCourses";
import BecomeInstructor from "@/components/BecomeInstructor";
import TopInstructors from "@/components/TopInstructors";
import TrustedCompanies from "@/components/TrustedCompanies";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CourseCategories />
      <BestSellingCourses />
      <FeaturedCourses />
      <RecentCourses />
      <BecomeInstructor />
      <TopInstructors />
      <TrustedCompanies />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
