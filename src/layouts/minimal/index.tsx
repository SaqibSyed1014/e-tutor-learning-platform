
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
import {Link, Outlet} from "react-router-dom";
import {Bell, BrandLogo, Cart, Heart, MagnifyingGlass} from "@/assets/icons/common-icons.tsx";
import DropdownMenuWrapper from "@/components/DropdownMenuWrapper.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import { useMatches } from 'react-router-dom';
import {SocialMediaLinks} from "@/components/tiny/tiny-collection.tsx";

const Index = () => {
    const matches = useMatches();
    console.log('mat ', matches)
    const slot = matches
        .filter(match => match.handle?.slot)[0].handle?.slot;

    const renderedElements = () => {
        switch (slot) {
            case 'auth':
                return (
                    <div className="flex items-center gap-4">
                        <Link to="/sign-in">Don’t have account?</Link>
                        <Link to="/sign-up">
                            <Button variant="outline">Create Account</Button>
                        </Link>
                    </div>
                );
            case 'comingSoon':
                return (
                    <SocialMediaLinks inverted={true} />
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <div className="bg-white py-6 px-8" style={{ boxShadow: '0px -1px 0px 0px #E9EAF0 inset'}}>
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-12">
                        <Link to="/" className="flex items-center space-x-2">
                            <BrandLogo />
                        </Link>





                    </div>

                    {renderedElements()}
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default Index;
