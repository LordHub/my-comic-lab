import About from "../components/About";
import Contact from "../components/Contact";
import YTVideos from "../components/YTVideos";
import Footer from "../components/Footer";
import Coleccion from "../components/Coleccion";
import Venta from "../components/Venta";
export default function Homepage() {
  return (
    <>
      <About />
      <Coleccion />
      <Venta />
      <YTVideos />
      <Contact />
    </>
  );
}
