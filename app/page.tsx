import { siteConfig } from "@/config/site";
import ComingSoonBlock from "@/components/ui/coming-soon";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <div className="absolute right-4 top-4 z-50">
        <ThemeToggle />
      </div>
      <ComingSoonBlock 
        tagline={siteConfig.content.tagline}
        heading={siteConfig.content.heading}
        description={siteConfig.content.description}
        targetDate={siteConfig.content.targetDate}
      />
    </main>
  );
}
