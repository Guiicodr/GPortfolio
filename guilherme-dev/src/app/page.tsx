import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Stack from "@/components/Stack";
import ProjectsTable from "@/components/ProjectsTable";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedProjects />
        <Stack />
        <ProjectsTable />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

