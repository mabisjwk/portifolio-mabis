import { ThemeToogle } from "../components/ThemeToogle";
import { StarBackground } from "@/components/StarBackground";
import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toogle */}
      <ThemeToogle />

      {/* Background effects */}
      <StarBackground />

      {/* NavBar */}
      <NavBar />

      {/* Main content */}
      <main>
        <HeroSection />
      </main>

      {/* footer */}
    </div>
  );
};
