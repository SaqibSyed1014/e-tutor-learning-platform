

import {Link, Outlet} from "react-router-dom";
import {BrandLogo} from "@/assets/icons/common-icons.tsx";
import {Button} from "@/components/ui/button.tsx";
import { useMatches, useLocation } from 'react-router-dom';
import {SocialMediaLinks} from "@/components/tiny/tiny-collection.tsx";

const Index = () => {
    const matches = useMatches();
    const location = useLocation();
    const slot = matches
        .filter(match => match.handle?.slot)[0].handle?.slot;

    const renderedElements = () => {
        switch (slot) {
            case 'auth':
                return (
                    <div className="flex items-center gap-4">
                        {location.pathname === '/sign-up' ? 'Already have an account?' : 'Don’t have account?'}
                        {location.pathname === '/sign-up' ?
                            <Link to="/sign-in">
                                <Button variant="outline">Sign In</Button>
                            </Link>
                            :
                            <Link to="/sign-up">
                                <Button variant="outline">Create Account</Button>
                            </Link>
                        }

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
