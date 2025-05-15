
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CourseCategories from "@/components/CourseCategories";
import BestSellingCourses from "@/components/BestSellingCourses";
import FeaturedCourses from "@/components/FeaturedCourses";
import BecomeInstructor from "@/components/BecomeInstructor";
import TopInstructors from "@/components/TopInstructors";
import TrustedCompanies from "@/components/TrustedCompanies";
import CtaSection from "@/components/CtaSection";

const Index = () => {
  return (
      <>
          <Hero/>
          <CourseCategories/>
          <BestSellingCourses/>
          <FeaturedCourses/>
          <BecomeInstructor/>
          <TopInstructors title="Top instructor of the month" aboveTheSection={true} showBottomLine={true} />
          <TrustedCompanies BGColor="bg-white" />
          <CtaSection/>
      </>
  );
};

export default Index;
