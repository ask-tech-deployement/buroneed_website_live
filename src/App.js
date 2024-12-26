import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import HomePageOne from "./pages/HomePageOne";
import HomePageTwo from "./pages/HomePageTwo";
import HomePageThree from "./pages/HomePageThree";
import ShopPage from "./pages/ShopPage";
import ProductDetailsPageOne from "./pages/ProductDetailsPageOne";
import ProductDetailsPageTwo from "./pages/ProductDetailsPageTwo";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import AccountPage from "./pages/AccountPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ContactPage from "./pages/ContactPage";
import PhosphorIconInit from "./helper/PhosphorIconInit";
import VendorPage from "./pages/VendorPage";
import VendorDetailsPage from "./pages/VendorDetailsPage";
import VendorTwoPage from "./pages/VendorTwoPage";
import VendorTwoDetailsPage from "./pages/VendorTwoDetailsPage";
import BecomeSellerPage from "./pages/BecomeSellerPage";
import WishlistPage from "./pages/WishlistPage";
import Home from "./components/Home/Home";
import { CartContextProvider } from "./components/Context/cartContext";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import ContactUs from "./components/Contact/ContactUs";
import About from "./components/About/About";
import Product from "./components/Product/Product";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <RouteScrollToTop />
        <PhosphorIconInit />

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="about" element={<About />} />
            <Route
              path="product/:mainCategoryId/:subCategoryId"
              element={<Product />}
            />
          </Route>

          {"old routes"}
          <Route path="old" element={<Outlet />}>
            <Route index element={<HomePageOne />} />
            <Route path="index-two" element={<HomePageTwo />} />
            <Route path="index-three" element={<HomePageThree />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="product-details" element={<ProductDetailsPageOne />} />
            <Route
              path="product-details-two"
              element={<ProductDetailsPageTwo />}
            />
            <Route path="cart" element={<CartPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="become-seller" element={<BecomeSellerPage />} />
            <Route path="wishlist" element={<WishlistPage />} />
            <Route path="account" element={<AccountPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog-details" element={<BlogDetailsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="vendor" element={<VendorPage />} />
            <Route path="vendor-details" element={<VendorDetailsPage />} />
            <Route path="vendor-two" element={<VendorTwoPage />} />
            <Route
              path="vendor-two-details"
              element={<VendorTwoDetailsPage />}
            />
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;