// app/routes/index.tsx
// import Navbar from "~/components/Navbar";
import Carousel from "~/components/Carousel";
import Deliver from "~/components/Deliver";
import ProductGrid from "~/components/ProductGrid";
import CategoryGrid from "~/components/Category";
// import Footer from "~/components/Footer";

export default function Index() {
  return (
    <div>
      {/* <Navbar /> */}
      <main>
        {/* Your page content goes here */}
        <Carousel />
        <Deliver />
        <ProductGrid />
        <CategoryGrid />
        {/* <Footer /> */}
      </main>
    </div>
  );
}
