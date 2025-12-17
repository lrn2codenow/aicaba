import React from 'react';

type Presentation = {
  citation: string;
  link?: string;
  date: string;
};

const presentations: Presentation[] = [
  {
    citation: "Ramos, B., Murray, A., Del Rio, M., Jennings, A. M., Plessas, A., Collado, J. L., King, K., Britwum, K. O., Para-Cremer, M. L., Peck, S., & Courtney, W. (2025). Navigating ethical challenges of artificial intelligence in behavior analytic practice: Risks, strategies, and decision-making. Paper presented at the Association for Behavior Analysis International, Washington, DC.",
    link: "", // Add URL here when available
    date: "May, 2025",
  },
  {
    citation: "Para-Cremer, M., King, K., & Murray, A. (2025). A developing framework for ethical use of artificial intelligence in behavior analytic practice. Paper presented at The Women in Behavior Analysis Conference.",
    link: "https://behaviorlive.com/courses/a-developing-framework-for-ethical-use-of-artificial-intelligence-in-behavior-ana",
    date: "July, 2025",
  },
  {
    citation: "Jennings, A. M., Del Rio, M., Plessas, A., Britwum, K. O., Para-Cremer, M. L., & Ramos, B. (2025). Artificial intelligence in behavior analytic services: Ethical risks, practical guidelines, and decision-making strategies. Paper presented at the International Conference of the Association for Behavior Analysis International, Lisbon, Portugal.",
    link: "", // Add URL here when available
    date: "November, 2025",
  },
];

export default function PresentationsPage() {
  return (
    <main id="main-content" className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral dark:text-light mb-4">Presentations</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Conference presentations and talks by members of the AI Consortium for ABA.
          </p>
        </div>

        <div className="space-y-6">
          {presentations.map((presentation, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-neutral-700 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-6">
                <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-base flex-1">
                  {presentation.citation}
                </p>
                {presentation.link ? (
                  <a
                    href={presentation.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-400 dark:hover:bg-gray-500 transition-all duration-200 text-sm font-medium whitespace-nowrap shadow-md hover:shadow-lg cursor-pointer"
                  >
                    {presentation.date}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <span className="flex-shrink-0 inline-flex items-center px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400 rounded-md text-sm font-medium whitespace-nowrap cursor-not-allowed">
                    {presentation.date}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
