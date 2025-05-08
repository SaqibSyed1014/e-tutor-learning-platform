
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {Bell, Heart, Cart, BrandLogo} from "@/assets/icons/common-icons.tsx";
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full">
      {/* Top navbar */}
      <div className="top-bar">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 text-sm text-gray-500 font-medium">
            <NavLink to="/" exact activeClassName="active" >Home</NavLink>
            <NavLink to="/courses" activeClassName="active">Courses</NavLink>
            <NavLink to="/about" activeClassName="active">About</NavLink>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            <NavLink to="/become-instructor" activeClassName="active">Become an Instructor</NavLink>
          </div>
          <div className="flex space-x-6 text-sm">
            <Link to="/login">Login</Link>
            <span>|</span>
            <Link to="/signup">Signup</Link>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-white py-6 px-8" style={{ boxShadow: '0px -1px 0px 0px #E9EAF0 inset'}}>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-2">
              <BrandLogo />
            </Link>

            <div className="relative hidden lg:block w-64">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search size={18} />
              </span>
              <Input
                type="text"
                placeholder="What do you want to learn..."
                className="pl-10 pr-4 py-2 rounded-md border border-gray-300 w-full focus:ring-etutor-primary focus:border-etutor-primary"
              />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button className="text-gray-600 hover:text-etutor-primary">
              <Bell />
            </button>
            <button className="text-gray-600 hover:text-etutor-primary">
              <Heart />
            </button>
            <button className="text-gray-600 hover:text-etutor-primary">
              <Cart />
            </button>
            <div className="space-x-3">
              <Button
                variant="outline"
                className=""
            >
              Create Account
            </Button>
              <Button>
                Sign in
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
