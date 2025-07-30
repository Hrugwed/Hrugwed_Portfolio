import BlurBackground from "./components/BlurBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Testimonial from "./components/Testimonial";
import Contacts from "./components/Contacts";
import ScrollButton from "./components/ScrollButton"; 
const App = () => {
  return (
    <div className="relative min-h-screen w-full text-white">
      <BlurBackground />

      <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10 w-full">
        <Navbar /> 
        <Hero />
        <Projects />
        <About />
        <Experience/>
        <Testimonial/>
        <Contacts/>
        <ScrollButton />
      </main>
    </div>
  );
};

export default App;

