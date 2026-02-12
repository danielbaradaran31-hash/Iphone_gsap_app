import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ModelSwitcher from "./three/ModelSwitcher";

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
   <main>
    <Navbar />
    <Hero />
    <ProductViewer />
    <ModelSwitcher />
   </main>
  )
}

export default App