export default function GuidelinesPage() {
  return (
    <main id="main-content" className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-neutral dark:text-light mb-4">
            Ethical Guidelines for AI in ABA
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our comprehensive guidelines for ethical and responsible use of AI in Applied Behavior Analysis.
          </p>
        </div>

        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6">
          {/* PDF Viewer */}
          <div className="w-full" style={{ height: 'calc(100vh - 280px)' }}>
            <iframe
              src="/guidelines.pdf"
              className="w-full h-full border-0 rounded"
              title="Ethical Guidelines for AI in ABA PDF"
            />
          </div>
          
          {/* Download Link */}
          <div className="mt-6 text-center">
            <a
              href="/guidelines.pdf"
              download
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-neutral hover:bg-neutral-800 dark:bg-light dark:text-neutral dark:hover:bg-gray-200 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}


