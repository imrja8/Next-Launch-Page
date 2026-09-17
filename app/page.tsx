import { siteConfig } from "@/config/site";
import ComingSoonBlock from "@/components/ui/coming-soon";
import { GlassBackground } from "@/components/ui/glass-background";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      <GlassBackground />
      <ComingSoonBlock data={siteConfig.content} />
    </main>
  );
}
