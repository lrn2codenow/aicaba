import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Users, Eye, Lock, BadgeCheck, ShieldCheck, Scale, RefreshCw, FileText, BookOpen, AlertTriangle, TrendingUp } from 'lucide-react';

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
              Promoting responsible innovation and ethical practice related to artificial intelligence in behavior analysis.
            </p>
            <div className="mt-12 flex justify-center">
              <Link href="/guidelines" className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-bold rounded-md text-neutral bg-white hover:bg-gray-100 shadow-xl transition-colors duration-200">
                View Ethical Guidelines
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" aria-label="About AIC-ABA" className="py-12 bg-gray-50 dark:bg-neutral-800 animate-fadeIn">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <p className="text-lg text-neutral dark:text-light">AIC-ABA brings together experts to ensure AI advances in ABA services are ethical and effective.</p>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" aria-labelledby="mission-heading" className="py-20 bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral animate-fadeIn">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 id="mission-heading" className="text-[clamp(2.25rem,5vw,3.5rem)] font-bold text-accent-dark mb-4 heading-gradient-underline">Our Mission</h2>
            <p className="text-lg text-neutral dark:text-light leading-relaxed max-w-3xl mx-auto">The mission of AIC-ABA is to provide ethical guidance to behavior analysts<sup title="Behavior analysts are defined as all behavior analytic practitioners and other healthcare providers whose scope of training includes behavior analysis.">*</sup> in the use of AI in behavioral services. These ethical best practices safeguard the rights and welfare of individuals receiving ABA services, align with professional and legal requirements, and maintain the integrity of the profession. AIC-ABA aims to ensure that guidance is disseminated and available to practitioners in the profession.</p>
            <div className="text-center">
              <a href="#" className="text-base font-semibold text-accent hover:text-primary underline underline-offset-4 transition-colors duration-200">Learn More About Who We Are &rarr;</a>
            </div>
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
                  <Users className="h-8 w-8" role="img" aria-label="Human-Led" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral dark:text-light mb-1 max-w-prose">Human-Led</h3>
                  <p className="text-neutral dark:text-light text-sm leading-relaxed">You remain responsible for all clinical decisions—use AI as a support tool, not a replacement for your professional judgment.</p>
                </div>
              </Card>
              <Card className="bg-light dark:bg-neutral border-2 border-accent p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition flex items-start space-x-4">
                <div className="flex-shrink-0 text-accent">
                  <Eye className="h-8 w-8" role="img" aria-label="Transparency and Explainability" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral dark:text-light mb-1 max-w-prose">Transparency and Explainability</h3>
                  <p className="text-neutral dark:text-light text-sm leading-relaxed">Disclose AI use to your clients, obtain informed consent, and provide clear processes for feedback and appeals.</p>
                </div>
              </Card>
              <Card className="bg-light dark:bg-neutral border-2 border-accent p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition flex items-start space-x-4">
                <div className="flex-shrink-0 text-accent">
                  <Lock className="h-8 w-8" role="img" aria-label="Privacy and Data Security" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral dark:text-light mb-1 max-w-prose">Privacy and Data Security</h3>
                  <p className="text-neutral dark:text-light text-sm leading-relaxed">Never input protected health information into open systems—use closed systems and follow all applicable privacy regulations.</p>
                </div>
              </Card>
              <Card className="bg-light dark:bg-neutral border-2 border-accent p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition flex items-start space-x-4">
                <div className="flex-shrink-0 text-accent">
                  <BadgeCheck className="h-8 w-8" role="img" aria-label="Accountability" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral dark:text-light mb-1 max-w-prose">Accountability</h3>
                  <p className="text-neutral dark:text-light text-sm leading-relaxed">Establish clear roles and review processes before deploying AI, ensuring all team members understand their responsibilities.</p>
                </div>
              </Card>
              <Card className="bg-light dark:bg-neutral border-2 border-accent p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition flex items-start space-x-4">
                <div className="flex-shrink-0 text-accent">
                  <ShieldCheck className="h-8 w-8" role="img" aria-label="Safety, Quality and Accuracy" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral dark:text-light mb-1 max-w-prose">Safety, Quality and Accuracy</h3>
                  <p className="text-neutral dark:text-light text-sm leading-relaxed">Continuously verify AI outputs for accuracy and have protocols ready to pause or discontinue systems when concerns arise.</p>
                </div>
              </Card>
              <Card className="bg-light dark:bg-neutral border-2 border-accent p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition flex items-start space-x-4">
                <div className="flex-shrink-0 text-accent">
                  <Scale className="h-8 w-8" role="img" aria-label="Equity and Minimizing Bias" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral dark:text-light mb-1 max-w-prose">Equity and Minimizing Bias</h3>
                  <p className="text-neutral dark:text-light text-sm leading-relaxed">Engage diverse communities in AI development and actively work to identify and reduce bias in systems and outputs.</p>
                </div>
              </Card>
              <Card className="bg-light dark:bg-neutral border-2 border-accent p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition flex items-start space-x-4">
                <div className="flex-shrink-0 text-accent">
                  <RefreshCw className="h-8 w-8" role="img" aria-label="Evaluation and Continuous Improvement" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral dark:text-light mb-1 max-w-prose">Evaluation and Continuous Improvement</h3>
                  <p className="text-neutral dark:text-light text-sm leading-relaxed">Regularly evaluate AI systems with interdisciplinary teams and adjust based on feedback and emerging best practices.</p>
                </div>
              </Card>
              <Card className="bg-light dark:bg-neutral border-2 border-accent p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition flex items-start space-x-4">
                <div className="flex-shrink-0 text-accent">
                  <AlertTriangle className="h-8 w-8" role="img" aria-label="Mitigating Dual Use and Misuse Risks" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral dark:text-light mb-1 max-w-prose">Mitigating Dual Use and Misuse Risks</h3>
                  <p className="text-neutral dark:text-light text-sm leading-relaxed">Assess potential misuse scenarios and advocate for safeguards that prioritize client dignity over surveillance or exclusion.</p>
                </div>
              </Card>
              <Card className="bg-light dark:bg-neutral border-2 border-accent p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition flex items-start space-x-4">
                <div className="flex-shrink-0 text-accent">
                  <TrendingUp className="h-8 w-8" role="img" aria-label="AI within Client Outcomes" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral dark:text-light mb-1 max-w-prose">AI within Client Outcomes</h3>
                  <p className="text-neutral dark:text-light text-sm leading-relaxed">Document whether AI enhances your clients&apos; progress and make modifications when meaningful outcomes aren&apos;t achieved.</p>
                </div>
              </Card>
              <Card className="bg-light dark:bg-neutral border-2 border-accent p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition flex items-start space-x-4">
                <div className="flex-shrink-0 text-accent">
                  <BookOpen className="h-8 w-8" role="img" aria-label="AI Literacy and Training" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral dark:text-light mb-1 max-w-prose">AI Literacy and Training</h3>
                  <p className="text-neutral dark:text-light text-sm leading-relaxed">Seek training and mentorship to build competence in AI&apos;s capabilities, limitations, and ethical implications for your practice.</p>
                </div>
              </Card>
              <Card className="bg-light dark:bg-neutral border-2 border-accent p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition flex items-start space-x-4">
                <div className="flex-shrink-0 text-accent">
                  <FileText className="h-8 w-8" role="img" aria-label="AI in Behavior Analytic Research" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral dark:text-light mb-1 max-w-prose">AI in Behavior Analytic Research</h3>
                  <p className="text-neutral dark:text-light text-sm leading-relaxed">Obtain proper consent, protect data privacy, and be transparent about all AI usage in your research.</p>
                </div>
              </Card>
            </div>
            <div className="text-center mt-16">
              <Link href="/guidelines" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md bg-black hover:bg-gray-800 shadow-lg transition-colors duration-200" style={{ color: '#ffffff' }}>
                View Ethical Guidelines
              </Link>
            </div>
          </div>
        </section>

        {/* Audience Section */}
        <section id="audience" aria-labelledby="audience-heading" className="py-20 bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral animate-fadeIn">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="audience-heading" className="text-[clamp(2.25rem,5vw,3.5rem)] font-bold text-primary mb-6 heading-gradient-underline">Who Are These Guidelines For?</h2>
            <p className="text-lg text-neutral dark:text-light leading-relaxed max-w-3xl mx-auto">For behavior analysts, practitioners, researchers, developers, and organizations pursuing ethical AI in ABA.</p>
          </div>
        </section>

        {/* Contact/CTA Section */}
        <section id="contact" className="py-20 bg-neutral">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-light mb-6 heading-gradient-underline">Contact Us</h2>
            <p className="text-lg text-light leading-relaxed mb-8 max-w-2xl mx-auto">
              We welcome your questions, feedback, and collaboration opportunities. Reach out to us to learn more about our work or get involved with the AI Consortium for ABA.
            </p>
            <div className="flex flex-col items-center gap-6">
              <a 
                href="mailto:aiconsortiumaba@gmail.com" 
                className="text-xl text-light hover:text-gray-300 transition-colors duration-200 flex items-center gap-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                aiconsortiumaba@gmail.com
              </a>
              <a 
                href="https://www.linkedin.com/company/110341405" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-200"
                aria-label="Visit our LinkedIn page"
              >
                <svg className="w-12 h-12 text-light" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-neutral text-gray-300 pt-16 pb-12 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:justify-between">
            <div className="mb-8 md:mb-0">
              <span className="text-2xl font-bold text-light tracking-tight">AI Consortium for ABA (AIC-ABA)</span>
              <p className="mt-2 text-gray-400 text-sm max-w-xs">Advancing ethical AI practices in Applied Behavior Analysis.</p>
              <p className="mt-4 text-gray-400 text-sm"><a href="mailto:aiconsortiumaba@gmail.com" className="underline hover:text-accent">aiconsortiumaba@gmail.com</a></p>
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
