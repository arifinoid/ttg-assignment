import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Portfolio from "./components/portfolio";
import Products from "./components/products";
import Services from "./components/services";
import Testimonial from "./components/testimonial";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <Testimonial />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
