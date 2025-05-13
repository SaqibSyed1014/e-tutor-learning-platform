
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {Bell, Heart, Cart, BrandLogo, MagnifyingGlass} from "@/assets/icons/common-icons.tsx";
import {Link, NavLink, useLocation} from "react-router-dom";
import {useState} from "react";
import DropdownMenuWrapper from "@/components/DropdownMenuWrapper.tsx"


const Navbar = () => {
  const location = useLocation();
  const [selectedLang, selectLang] = useState('eng');
  const [selectedCurrency, selectCurrency] = useState('usd');
  const [selectedBrowse, selectBrowse] = useState('');

  const languages = [
    {
      value: 'eng',
      label: 'English'
    },
    {
      value: 'germ',
      label: 'German'
    },
    {
      value: 'fre',
      label: 'French'
    }
  ];

  const currency = [
    {
      value: 'usd',
      label: 'USD'
    },
    {
      value: 'euro',
      label: 'Euro'
    },
    {
      value: 'pkr',
      label: 'PKR'
    }
  ];

  const browseOptions = [
    {
      value: 'cate',
      label: 'Categories'
    },
    {
      value: 'ins',
      label: 'Instructors'
    },
    {
      value: 'course',
      label: 'Course'
    }
  ];

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
            <DropdownMenuWrapper
                options={currency}
                selected={selectedCurrency}
                onChange={selectCurrency}
                size="sm"
                alignment="end"
                triggerClasses="text-gray-400 flex items-center gap-1.5"
                contentContentClasses="bg-etutor-darkblue"
            />
            <DropdownMenuWrapper
                options={languages}
                selected={selectedLang}
                onChange={selectLang}
                size="sm"
                alignment="end"
                triggerClasses="text-gray-400 flex items-center gap-1.5"
                contentContentClasses="bg-etutor-darkblue"
            />
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-white py-6 px-8" style={{ boxShadow: '0px -1px 0px 0px #E9EAF0 inset'}}>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-12">
            <Link to="/" className="flex items-center space-x-2">
              <BrandLogo />
            </Link>

            <div className="flex gap-4">
              <DropdownMenuWrapper
                  options={browseOptions}
                  selected={selectedBrowse}
                  onChange={selectBrowse}
                  defaultPlaceholder="Browse"
                  triggerClasses="text-sm text-gray-700 flex items-center gap-1.5 border border-gray-100 justify-between min-w-[200px] px-[18px] py-3"
                  contentContentClasses="min-w-[200px] bg-white border border-gray-100 !text-gray-900"
                  activeOptionClass="bg-gray-200"
              />

              <div className="relative hidden lg:block ">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black">
                  <MagnifyingGlass />
                </span>
                  <Input
                      type="text"
                      placeholder="What do you want to learn..."
                      className="pl-12 pr-4 py-2 w-full min-w-[424px] placeholder:text-gray-500 focus:ring-etutor-primary focus:border-etutor-primary outline-0"
                  />
              </div>
            </div>


          </div>

          <div className="flex items-center space-x-6 miscellenious-links">
            <button className="text-gray-900 hover:text-etutor-primary">
              <Bell />
            </button>
            <button className="text-gray-900 hover:text-etutor-primary">
              <Heart />
            </button>
            <Link to="/shopping-cart" className={`hover:text-primary-500 ${location.pathname === '/shopping-cart' ? 'text-primary-500' : 'text-gray-900'}`}>
              <Cart />
            </Link>
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
