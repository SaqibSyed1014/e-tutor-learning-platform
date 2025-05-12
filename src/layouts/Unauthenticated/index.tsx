
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
import {Outlet} from "react-router-dom";

const Index = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Index;
