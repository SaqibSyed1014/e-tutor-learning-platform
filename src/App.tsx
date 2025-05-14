import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import NotFound from "./pages/404NotFound.tsx";
import CategoryDetail from "./pages/CategoryDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import CareerDetail from "./pages/CareerDetail";
import ShoppingCart from "./pages/ShoppingCart.tsx";
import FAQ from "./pages/FAQ";
import UnauthenticatedLayout from "@/layouts/Unauthenticated";
import MinimalLayout from "@/layouts/minimal"
import SignIn from "./pages/forms/sign-in.tsx"
import SignUp from "./pages/forms/sign-up.tsx"
import ComingSoon from "./pages/coming-soon.tsx"

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <UnauthenticatedLayout />,
    children: [
      { path: '/', element: <Index />, name: 'Home' },
      { path: '/category/:id', element: <CategoryDetail />, name: 'Category' },
      { path: '/about', element: <About />, name: 'About' },
      { path: '/contact', element: <Contact />, name: 'Contact' },
      { path: '/career', element: <Career />, name: 'Career' },
      { path: '/career/:id', element: <CareerDetail />, name: 'Career Detail' },
      { path: '/shopping-cart', element: <ShoppingCart />, name: 'Shopping Cart' },
      { path: '/faq', element: <FAQ />, name: 'FAQ' },
    ],
  },
  {
    element: <MinimalLayout />,
    children: [
      { path: '/sign-in', element: <SignIn />, name: 'Sign in', handle: { slot: 'auth' } },
      { path: '/sign-up', element: <SignUp />, name: 'Sign up', handle: { slot: 'auth' } },
      { path: '/coming-soon', element: <ComingSoon />, name: 'Coming Soon', handle: { slot: 'comingSoon' } },
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
