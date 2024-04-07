import Navbar from "../components/Navbar";
import About from "../components/About";
import Contact from "../components/Contact";
import YTVideos from "../components/YTVideos";
import Footer from "../components/Footer";
import Coleccion from "../components/Micoleccion";
export default function Homepage() {
  return (
    <>
      <Navbar />
      <About />
      <Coleccion />
      <Contact />
      <Footer />
    </>
  );
}
