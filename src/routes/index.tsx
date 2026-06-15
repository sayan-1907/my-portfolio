import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import { Nav } from "../components/site/Nav";
import { Hero } from "../components/site/Hero";
import { About } from "../components/site/About";
import { Services } from "../components/site/Services";
import { Projects } from "../components/site/Projects";
import { Contact } from "../components/site/Contact";
import { Footer } from "../components/site/Footer";
import { Toaster } from "sonner";
import { Certifications } from "../components/site/Certifications";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
      <Toaster richColors position="top-right" />
    </main>
  );
}