import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Users, Eye, Lock, BadgeCheck, ShieldCheck, Scale, RefreshCw, FileText, BookOpen } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Header is moved to layout.tsx */}
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 bg-accent shadow-lg animate-fadeIn">
          {/* dark overlay for contrast */}
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-5xl font-extrabold text-white tracking-tight sm:text-6xl md:text-7xl mb-8 leading-tight max-w-prose mx-auto drop-shadow-xl heading-gradient-underline">
              Guiding the Future of AI in Applied Behavior Analysis
            </h1>
            <p className="mt-4 max-w-xl mx-auto text-xl sm:text-2xl md:mt-6 md:max-w-3xl text-gray-100 leading-relaxed drop-shadow">
              Promoting responsible innovation and ethical practice at the intersection of artificial intelligence and behavioral services.
            </p>
            <div className="mt-12 flex justify-center">
              <span className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-semibold rounded-md text-neutral bg-gray-300 opacity-80 cursor-not-allowed shadow-lg" aria-disabled="true">
                Ethical Guidelines (Coming Soon)
              </span>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" aria-label="About AIC-ABA" className="py-12 bg-gray-50 dark:bg-neutral-800 animate-fadeIn">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <p className="text-lg text-neutral dark:text-light">AIC-ABA brings together experts to ensure AI advances in ABA services are ethical and effective.</p>
            <p className="text-lg text-neutral dark:text-light">We champion responsible innovation and collaborative guidance for practitioners worldwide.</p>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" aria-labelledby="mission-heading" className="py-20 bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral animate-fadeIn">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 id="mission-heading" className="text-[clamp(2.25rem,5vw,3.5rem)] font-bold text-accent-dark mb-4 heading-gradient-underline">Our Mission</h2>
            <p className="text-xl text-neutral dark:text-light leading-relaxed">We provide clear ethical guidance for behavior analysts<sup title="Behavior analysts are defined as all behavior analytic practitioners and other healthcare providers whose scope of training includes behavior analysis.">*</sup> integrating AI into behavioral services.</p>
            <p className="text-lg text-neutral dark:text-light leading-relaxed max-w-3xl mx-auto">We promote best practices, protect client welfare, align with legal standards, and uphold ABA integrity.</p>
            <div className="text-center">
              <a href="#" className="text-base font-semibold text-accent hover:text-primary underline underline-offset-4 transition-colors duration-200">Learn More About Who We Are &rarr;</a>
            </div>
          </div>
        </section>

        {/* Mandate Section */}
        <section id="mandate" aria-labelledby="mandate-heading" className="py-20 bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral animate-fadeIn">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="mandate-heading" className="text-[clamp(2.25rem,5vw,3.5rem)] font-bold text-accent-dark mb-6 heading-gradient-underline">Developing and Disseminating Best Practices</h2>
            <p className="text-lg text-neutral dark:text-light leading-relaxed max-w-3xl mx-auto drop-shadow">We develop and share guidelines for ethical AI in ABA, collaborating with professionals and evolving with feedback and technology.</p>
          </div>
        </section>

        {/* Why Section */}
        <section id="why" aria-labelledby="why-heading" className="py-20 bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral animate-fadeIn">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="why-heading" className="text-[clamp(2.25rem,5vw,3.5rem)] font-bold text-accent-dark mb-6 heading-gradient-underline">Navigating the Intersection of AI and ABA</h2>
            <p className="text-lg text-neutral dark:text-light leading-relaxed max-w-3xl mx-auto">AI offers powerful enhancements for ABA but raises ethical challenges around privacy, bias, and safety. Clear guidance is essential to harness benefits responsibly.</p>
          </div>
        </section>

        {/* Principles Section */}
        <section id="principles" aria-labelledby="principles-heading" className="py-24 bg-white dark:bg-neutral-900 border-b-4 border-primary animate-fadeIn">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="principles-heading" className="text-[clamp(2.25rem,5vw,3.5rem)] font-bold text-accent-dark text-center mb-10 heading-gradient-underline">Guiding Principles for AI in ABA</h2>
            <p className="text-center text-lg text-neutral dark:text-light mb-16 max-w-3xl mx-auto leading-relaxed">Our guidelines are built on foundational principles to ensure ethical, effective AI in ABA. Key areas include:</p>
            <div className="grid grid-cols-1 gap-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Each principle as a Card with icon, title, description */}
              <Card className="bg-light dark:bg-neutral border-2 border-accent p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition flex items-start space-x-4">
                <div className="flex-shrink-0 text-accent">
                  {/* Human Collaboration & Oversight icon */}
                  <Users className="h-8 w-8" role="img" aria-label="Human Collaboration and Oversight" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral dark:text-light mb-1 max-w-prose">Human Collaboration & Oversight</h3>
                  <p className="text-neutral dark:text-light text-sm leading-relaxed">Ensuring AI supports, but does not replace, clinical judgment and accountability.</p>
                </div>
              </Card>
              <Card className="bg-light dark:bg-neutral border-2 border-accent p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition flex items-start space-x-4">
                <div className="flex-shrink-0 text-accent">
                  {/* Transparency & Explainability icon */}
                  <Eye className="h-8 w-8" role="img" aria-label="Transparency and Explainability" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral dark:text-light mb-1 max-w-prose">Transparency & Explainability</h3>
                  <p className="text-neutral dark:text-light text-sm leading-relaxed">Promoting clear disclosure about AI use to clients and practitioners.</p>
                </div>
              </Card>
              <Card className="bg-light dark:bg-neutral border-2 border-accent p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition flex items-start space-x-4">
                <div className="flex-shrink-0 text-accent">
                  {/* Privacy & Data Security icon */}
                  <Lock className="h-8 w-8" role="img" aria-label="Privacy and Data Security" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral dark:text-light mb-1 max-w-prose">Privacy & Data Security</h3>
                  <p className="text-neutral dark:text-light text-sm leading-relaxed">Upholding rigorous standards for protecting sensitive information (HIPAA, FERPA, etc.).</p>
                </div>
              </Card>
              <Card className="bg-light dark:bg-neutral border-2 border-accent p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition flex items-start space-x-4">
                <div className="flex-shrink-0 text-accent">
                  {/* Accountability icon */}
                  <BadgeCheck className="h-8 w-8" role="img" aria-label="Accountability" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral dark:text-light mb-1 max-w-prose">Accountability</h3>
                  <p className="text-neutral dark:text-light text-sm leading-relaxed">Defining clear roles and responsibilities for AI development, deployment, and use.</p>
                </div>
              </Card>
              <Card className="bg-light dark:bg-neutral border-2 border-accent p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition flex items-start space-x-4">
                <div className="flex-shrink-0 text-accent">
                  {/* Safety & Accuracy icon */}
                  <ShieldCheck className="h-8 w-8" role="img" aria-label="Safety and Accuracy" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral dark:text-light mb-1 max-w-prose">Safety & Accuracy</h3>
                  <p className="text-neutral dark:text-light text-sm leading-relaxed">Continuously monitoring AI systems for quality, accuracy, and safety.</p>
                </div>
              </Card>
              <Card className="bg-light dark:bg-neutral border-2 border-accent p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition flex items-start space-x-4">
                <div className="flex-shrink-0 text-accent">
                  {/* Equity & Bias Mitigation icon */}
                  <Scale className="h-8 w-8" role="img" aria-label="Equity and Bias Mitigation" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral dark:text-light mb-1 max-w-prose">Equity & Bias Mitigation</h3>
                  <p className="text-neutral dark:text-light text-sm leading-relaxed">Actively working to identify and minimize bias in AI development and deployment.</p>
                </div>
              </Card>
              <Card className="bg-light dark:bg-neutral border-2 border-accent p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition flex items-start space-x-4">
                <div className="flex-shrink-0 text-accent">
                  {/* Evaluation & Continuous Improvement icon */}
                  <RefreshCw className="h-8 w-8" role="img" aria-label="Continuous Improvement" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral dark:text-light mb-1 max-w-prose">Evaluation & Continuous Improvement</h3>
                  <p className="text-neutral dark:text-light text-sm leading-relaxed">Committing to ongoing assessment and refinement of AI tools and guidelines.</p>
                </div>
              </Card>
              <Card className="bg-light dark:bg-neutral border-2 border-accent p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition flex items-start space-x-4">
                <div className="flex-shrink-0 text-accent">
                  {/* Responsible Research Practices icon */}
                  <FileText className="h-8 w-8" role="img" aria-label="Documentation and Training" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral dark:text-light mb-1 max-w-prose">Responsible Research Practices</h3>
                  <p className="text-neutral dark:text-light text-sm leading-relaxed">Guiding the ethical use of AI in behavior analytic research.</p>
                </div>
              </Card>
              <Card className="bg-light dark:bg-neutral border-2 border-accent p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition flex items-start space-x-4">
                <div className="flex-shrink-0 text-accent">
                  {/* Digital Literacy & Training icon */}
                  <BookOpen className="h-8 w-8" role="img" aria-label="Research and Evidence" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral dark:text-light mb-1 max-w-prose">Digital Literacy & Training</h3>
                  <p className="text-neutral dark:text-light text-sm leading-relaxed">Encouraging competence and education in AI technologies for practitioners.</p>
                </div>
              </Card>
            </div>
            <div className="text-center mt-16">
              <span className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-neutral bg-secondary opacity-90 cursor-not-allowed shadow-lg">
                Ethical Guidelines (Coming Soon)
              </span>
            </div>
          </div>
        </section>

        {/* Audience Section */}
        <section id="audience" aria-labelledby="audience-heading" className="py-20 bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral animate-fadeIn">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="audience-heading" className="text-[clamp(2.25rem,5vw,3.5rem)] font-bold text-primary mb-6 heading-gradient-underline">Who Are These Guidelines For?</h2>
            <p className="text-lg text-neutral dark:text-light leading-relaxed max-w-3xl mx-auto">For behavior analysts, practitioners, researchers, and organizations pursuing ethical AI in ABA.</p>
          </div>
        </section>

        {/* Contact/CTA Section */}
        <section id="contact" className="py-20 bg-neutral">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-light mb-6 heading-gradient-underline">Get Involved & Stay Informed</h2>
            <p className="text-lg text-light leading-relaxed mb-10 max-w-2xl mx-auto">
              The ethical landscape of AI in ABA is constantly evolving. The <strong className="font-semibold text-accent">AI Consortium for ABA (AIC-ABA)</strong> is committed to ongoing dialogue, collaboration, and refinement of these guidelines. Connect with us to contribute, join, or stay updated.
            </p>
            <div className="text-lg text-accent font-semibold mt-8">
              Check back soon for ways to get involved!
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-neutral text-gray-300 pt-16 pb-12 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:justify-between">
            <div className="mb-8 md:mb-0">
              <span className="text-2xl font-bold text-white tracking-tight">AI Consortium for ABA (AIC-ABA)</span>
              <p className="mt-2 text-gray-400 text-sm max-w-xs">Advancing ethical AI practices in Applied Behavior Analysis.</p>
              <p className="mt-4 text-gray-400 text-sm"><a href="mailto:aiconsortiumaba@gmail.com" className="underline hover:text-accent">aiconsortiumaba@gmail.com</a></p>
              <address className="text-gray-400 text-sm not-italic">123 Consortium Lane, City, Country</address>
            </div>
            <div className="grid grid-cols-2 gap-8 md:gap-16">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Navigation</h3>
                <ul className="mt-4 space-y-2">
                  <li><Link href="/" className="text-base text-gray-300 hover:text-accent transition-colors">Home</Link></li>
                  <li><Link href="#contact" className="text-base text-gray-300 hover:text-accent transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
                <ul className="mt-4 space-y-2">
                  <li><span className="text-base text-gray-500 cursor-not-allowed">Free Resources (Soon)</span></li>
                  <li><span className="text-base text-gray-500 cursor-not-allowed">Presentations (Soon)</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8 text-center">
            <small>
              <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} AI Consortium for ABA (AIC-ABA). All rights reserved.</p>
              <p className="mt-2 text-xs text-gray-500">Disclaimer: Educational purposes only, not legal advice. Users are responsible for compliance with laws and professional standards.</p>
            </small>
          </div>
        </div>
      </footer>
    </>
  );
}
