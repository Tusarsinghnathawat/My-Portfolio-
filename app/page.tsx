import About from "@/components/sections/about";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import Projects from "@/components/sections/projects";

export default function Page() {
  return (
    <div className="flex flex-col h-full lg:max-w-screen-lg mx-auto">
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
