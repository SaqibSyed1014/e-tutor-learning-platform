import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CategoryDetail from "./pages/CategoryDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import CareerDetail from "./pages/CareerDetail";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ComingSoon from "./pages/ComingSoon";
import FAQ from "./pages/FAQ";
import UnauthenticatedLayout from "@/layouts/Unauthenticated";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <UnauthenticatedLayout />,
    children: [
      { path: '/', element: <Index />, name: 'Home' },
      { path: '/category/:id', element: <CategoryDetail />, name: 'Category' },
      { path: '/about', element: <About />,   customData: { title: 'Home Page', description: 'This is the home page' } },
      { path: '/contact', element: <Contact />, name: 'Contact' },
      { path: '/career', element: <Career />, name: 'Career' },
      { path: '/career/:id', element: <CareerDetail />, name: 'Career Detail' },
      { path: '/cart', element: <Cart />, name: 'Cart' },
      { path: '/signin', element: <SignIn />, name: 'Sign In' },
      { path: '/signup', element: <SignUp />, name: 'Sign Up' },
      { path: '/coming-soon', element: <ComingSoon />, name: 'Coming Soon' },
      { path: '/faq', element: <FAQ />, name: 'FAQ' },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <RouterProvider router={router} />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
