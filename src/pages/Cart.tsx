
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cart = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
