import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ResourcesComingSoon() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-light dark:bg-neutral px-4">
      <div className="max-w-xl w-full text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neutral dark:text-light">Free Resources</h1>
        <p className="text-lg text-secondary mb-8">We&apos;re working hard to curate and create high-quality, practical resources for the AI in ABA community. Please check back soon!</p>
        <Button asChild className="mt-4">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </main>
  );
}
