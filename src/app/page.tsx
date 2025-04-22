import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <main className="min-h-screen bg-light text-neutral dark:bg-neutral dark:text-light flex flex-col items-center justify-center px-4">
      <section className="w-full max-w-4xl py-16 flex flex-col items-center text-center space-y-10">
        <h1 className="text-4xl md:text-5xl font-bold heading-gradient-underline max-w-prose mx-auto">
          AI Consortium for ABA (AIC-ABA)
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
          Advancing ethical, responsible AI in Applied Behavior Analysis. Guidelines, resources, and best practices for practitioners.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" className="bg-primary text-light hover:bg-accent transition">Get Started</Button>
          <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-light transition">Learn More</Button>
        </div>
      </section>
      <section className="w-full max-w-5xl py-8 grid md:grid-cols-2 gap-8">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar className="rounded-lg border" />
          </CardContent>
        </Card>
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle>Team</CardTitle>
          </CardHeader>
          <CardContent className="flex space-x-4 items-center">
            <Avatar>
              <AvatarImage src="/vercel.svg" alt="AIC-ABA" />
              <AvatarFallback>AA</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold">Dr. Ada Lovelace</div>
              <div className="text-sm text-muted-foreground">Director</div>
            </div>
          </CardContent>
        </Card>
      </section>
      <section className="w-full max-w-4xl py-8">
        <h2 className="text-2xl font-semibold mb-6 heading-gradient-underline">Featured Resources</h2>
        <Carousel className="w-full max-w-2xl mx-auto">
          <CarouselContent>
            <CarouselItem><Card className="p-6">AI in ABA: Best Practices</Card></CarouselItem>
            <CarouselItem><Card className="p-6">Ethical Guidelines (Coming Soon)</Card></CarouselItem>
            <CarouselItem><Card className="p-6">Community Presentations</Card></CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>
      <section className="w-full max-w-4xl py-8">
        <Tabs defaultValue="about">
          <TabsList className="mb-4">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="principles">Principles</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <p className="leading-relaxed">The AI Consortium for ABA (AIC-ABA) provides clear ethical guidance for behavior analysts using artificial intelligence in behavioral services. We promote best practices, safeguard client rights and welfare, and uphold the integrity of the ABA profession.</p>
          </TabsContent>
          <TabsContent value="principles">
            <ul className="list-disc pl-6 text-left space-y-2">
              <li>Human Collaboration & Oversight</li>
              <li>Transparency & Explainability</li>
              <li>Privacy & Data Security</li>
              <li>Accountability</li>
              <li>Equity & Bias Mitigation</li>
              <li>Continuous Improvement</li>
            </ul>
          </TabsContent>
          <TabsContent value="contact">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="accent">Contact Us</Button>
              </DialogTrigger>
              <DialogContent>
                <h3 className="text-lg font-semibold mb-2">Contact AIC-ABA</h3>
                <p>Email: <a href="mailto:info@aicaba.org" className="text-primary underline">info@aicaba.org</a></p>
              </DialogContent>
            </Dialog>
          </TabsContent>
        </Tabs>
      </section>
      <section className="w-full max-w-4xl py-8">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="secondary">Open Sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary underline">Mission</a></li>
              <li><a href="#" className="text-accent underline">Principles</a></li>
              <li><a href="#" className="text-secondary underline">Resources</a></li>
            </ul>
          </SheetContent>
        </Sheet>
      </section>
      <section className="w-full max-w-4xl py-8">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover for Info</Button>
            </TooltipTrigger>
            <TooltipContent>
              <span>AI Consortium for ABA: Promoting responsible innovation in ABA.</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </section>
    </main>
  );
}
