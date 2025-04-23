import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PresentationsComingSoon() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-light dark:bg-neutral px-4">
      <div className="max-w-xl w-full text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neutral dark:text-light">Presentations</h1>
        <p className="text-lg text-secondary mb-8">Our presentations and webinars will be available soon. Stay tuned for updates and upcoming events!</p>
        <Button asChild className="mt-4">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </main>
  );
}
