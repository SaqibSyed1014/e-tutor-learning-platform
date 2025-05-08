
import { Link } from "react-router-dom";
import {ArrowRight, BrandLogo} from "@/assets/icons/common-icons.tsx";
import {Facebook, Instagram, Linkedin, Twitter, Youtube} from "@/assets/icons/icons.tsx";
import {Button} from "@/components/ui/button.tsx";
import {DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuLabel} from "@/components/ui/dropdown-menu.tsx";
import {useState} from "react";

const Footer = () => {
  const socialLinks = [
    {
      name: '',
      icon: <Facebook />,
      link: ''
    },
    {
      name: '',
      icon: <Instagram />,
      link: ''
    },
    {
      name: '',
      icon: <Linkedin />,
      link: ''
    },
    {
      name: '',
      icon: <Twitter />,
      link: ''
    },
    {
      name: '',
      icon: <Youtube />,
      link: ''
    }
  ]
  const [openDropdown, toggleDropdown] = useState<boolean>(false);

  return (
    <footer className="bg-gray-900 text-white text-sm">
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <div className="col-span-1 md:col-span-2">
            <Link to="/">
              <BrandLogo />
            </Link>
            <p className="text-gray-500 mt-5 mb-6">
              Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec mattis dolo at
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((item, index) => {
                return (
                    <a key={index} href="#" className="size-[46px] flex justify-center items-center bg-[#363B4766] text-white p-2 hover:bg-etutor-primary hover:shadow-[0_6px_20px_0_#CC522B80] transition-colors">
                      {item.icon}
                    </a>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium mb-5">TOP 4 CATEGORY</h3>
            <ul className="flex gap-2 flex-col items-start">
              <li>
                <Link to="/category/development" className="flex gap-2 pb-1 text-gray-500 hover:text-white hover:shadow-[0px_-1.5px_0px_0px_#FF6636_inset] group">
                  Development
                  <ArrowRight classes="opacity-0 group-hover:opacity-100 text-etutor-primary" />
                </Link>
              </li>
              <li>
                <Link to="/category/finance" className="flex gap-2 pb-1 text-gray-500 hover:text-white hover:shadow-[0px_-1.5px_0px_0px_#FF6636_inset] group">
                  Finance & Accounting
                  <ArrowRight classes="opacity-0 group-hover:opacity-100 text-etutor-primary" />
                </Link>
              </li>
              <li>
                <Link to="/category/design" className="flex gap-2 pb-1 text-gray-500 hover:text-white hover:shadow-[0px_-1.5px_0px_0px_#FF6636_inset] group">
                  Design
                  <ArrowRight classes="opacity-0 group-hover:opacity-100 text-etutor-primary" />
                </Link>
              </li>
              <li>
                <Link to="/category/business" className="flex gap-2 pb-1 text-gray-500 hover:text-white hover:shadow-[0px_-1.5px_0px_0px_#FF6636_inset] group">
                  Business
                  <ArrowRight classes="opacity-0 group-hover:opacity-100 text-etutor-primary" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-5">QUICK LINKS</h3>
            <ul className="flex gap-2 flex-col items-start">
              <li>
                <Link to="/about" className="flex gap-2 pb-1 text-gray-500 hover:text-white hover:shadow-[0px_-1.5px_0px_0px_#FF6636_inset] group">
                  About
                  <ArrowRight classes="opacity-0 group-hover:opacity-100 text-etutor-primary" />
                </Link>
              </li>
              <li>
                <Link to="/become-instructor" className="flex gap-2 pb-1 text-gray-500 hover:text-white hover:shadow-[0px_-1.5px_0px_0px_#FF6636_inset] group">
                  Become Instructor
                  <ArrowRight classes="opacity-0 group-hover:opacity-100 text-etutor-primary" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex gap-2 pb-1 text-gray-500 hover:text-white hover:shadow-[0px_-1.5px_0px_0px_#FF6636_inset] group">
                  Contact
                  <ArrowRight classes="opacity-0 group-hover:opacity-100 text-etutor-primary" />
                </Link>
              </li>
              <li>
                <Link to="/career" className="flex gap-2 pb-1 text-gray-500 hover:text-white hover:shadow-[0px_-1.5px_0px_0px_#FF6636_inset] group">
                  Career
                  <ArrowRight classes="opacity-0 group-hover:opacity-100 text-etutor-primary" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-5">SUPPORT</h3>
            <ul className="flex gap-2 flex-col items-start">
              <li>
                <Link to="/help" className="flex gap-2 pb-1 text-gray-500 hover:text-white hover:shadow-[0px_-1.5px_0px_0px_#FF6636_inset] group">
                  Help Center
                  <ArrowRight classes="opacity-0 group-hover:opacity-100 text-etutor-primary" />
                </Link>
              </li>
              <li>
                <Link to="/faq" className="flex gap-2 pb-1 text-gray-500 hover:text-white hover:shadow-[0px_-1.5px_0px_0px_#FF6636_inset] group">
                  FAQs
                  <ArrowRight classes="opacity-0 group-hover:opacity-100 text-etutor-primary" />
                </Link>
              </li>
              <li>
                <Link to="/terms" className="flex gap-2 pb-1 text-gray-500 hover:text-white hover:shadow-[0px_-1.5px_0px_0px_#FF6636_inset] group">
                  Terms & Condition
                  <ArrowRight classes="opacity-0 group-hover:opacity-100 text-etutor-primary" />
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="flex gap-2 pb-1 text-gray-500 hover:text-white hover:shadow-[0px_-1.5px_0px_0px_#FF6636_inset] group">
                  Privacy Policy
                  <ArrowRight classes="opacity-0 group-hover:opacity-100 text-etutor-primary" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-5 uppercase">Downlaod our app</h3>
            <ul className="flex gap-3 flex-col items-start">
              <li>
                <img src="/images/app-store.png" />
              </li>
              <li>
               <img src="/images/play-store.png" />
              </li>
            </ul>
          </div>


        </div>

      </div>

      <div className="container">
        <div className=" py-9 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center shadow-[0_1px_0_0_#363B4780_inset]">
          <p className="text-gray-500 text-sm">
            © 2023 - E-tutor. Designed by <span className="text-white">Templatecookie</span>. All rights reserved
          </p>

          {/*<DropdownMenu open={openDropdown}>*/}
          {/*  <DropdownMenuTrigger asChild className="text-white">*/}
          {/*    <Button onClick={() => toggleDropdown(!openDropdown)}>Open</Button>*/}
          {/*  </DropdownMenuTrigger>*/}
          {/*  <DropdownMenuContent>*/}
          {/*    <DropdownMenuLabel>My Account</DropdownMenuLabel>*/}
          {/*    <DropdownMenuSeparator />*/}
          {/*    <DropdownMenuItem>Profile</DropdownMenuItem>*/}
          {/*    <DropdownMenuItem>Settings</DropdownMenuItem>*/}
          {/*    <DropdownMenuSeparator />*/}
          {/*    <DropdownMenuItem>Logout</DropdownMenuItem>*/}
          {/*  </DropdownMenuContent>*/}
          {/*</DropdownMenu>*/}

          <div className="flex items-center">
            <span className="text-gray-500 mr-2">English</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
