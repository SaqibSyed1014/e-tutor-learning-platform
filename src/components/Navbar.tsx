
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Heart, ShoppingCart, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full">
      {/* Top navbar */}
      <div className="top-bar">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 text-sm text-gray-500 font-medium">
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/become-instructor">Become an Instructor</Link>
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
              <div className="bg-etutor-primary p-1 rounded">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" fill="white"/>
                  <path d="M15 8H9V16H11V14H15V8ZM11 10H13V12H11V10Z" fill="#FF6B38"/>
                </svg>
              </div>
              <span className="font-bold text-xl text-etutor-darkblue">E-tutor</span>
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
              <Bell size={20} />
            </button>
            <button className="text-gray-600 hover:text-etutor-primary">
              <Heart size={20} />
            </button>
            <button className="text-gray-600 hover:text-etutor-primary">
              <ShoppingCart size={20} />
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
