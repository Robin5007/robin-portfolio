export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header Section */}
        <header className="text-center mb-16">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-4xl font-bold text-white">BM</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Baariu Robinson Mugambi
          </h1>
          <p className="text-lg text-blue-600 dark:text-blue-400 mb-2">
            robinbaariu@gmail.com
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            Certified Records and Information Technology Expert
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Kenya Institute of Special Education (KISE)
          </p>
        </header>

        {/* Professional Summary */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-blue-600 pb-2">
            Professional Summary
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            Accomplished Records and Information Technology Expert with extensive experience in data management, 
            information systems, and educational technology. Currently contributing to the advancement of special 
            education through innovative record-keeping solutions and technology integration at the Kenya Institute 
            of Special Education. Committed to excellence in information management and leveraging technology to 
            enhance organizational efficiency and educational outcomes.
          </p>
        </section>

        {/* Professional Experience */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-blue-600 pb-2">
            Professional Experience
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Records and Information Technology Expert
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                Kenya Institute of Special Education (KISE) • Present
              </p>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                <li>• Manage comprehensive record-keeping systems for educational programs and student data</li>
                <li>• Implement and maintain information technology solutions to support special education initiatives</li>
                <li>• Ensure compliance with data protection regulations and institutional policies</li>
                <li>• Collaborate with educational professionals to optimize information management processes</li>
                <li>• Provide technical expertise in database management and information system administration</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Professional Qualifications */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-blue-600 pb-2">
            Professional Qualifications
          </h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Certified Records and Information Technology Expert
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 ml-7">
              Professional certification demonstrating expertise in records management, information systems, 
              and technology integration within organizational frameworks.
            </p>
          </div>
        </section>

        {/* Educational Background */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-blue-600 pb-2">
            Educational Background
          </h2>
          <div className="space-y-8">
            {/* University Education */}
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                University Education
              </h3>
              <p className="text-green-600 dark:text-green-400 font-medium mb-2">
                Kenyatta University
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Comprehensive university education providing foundational knowledge and advanced skills 
                in academic and professional disciplines.
              </p>
            </div>

            {/* Secondary Education */}
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Secondary Education
              </h3>
              <p className="text-orange-600 dark:text-orange-400 font-medium mb-2">
                Moi Forces Academy
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Distinguished secondary education at a prestigious military academy, fostering discipline, 
                leadership, and academic excellence.
              </p>
            </div>

            {/* Primary Education */}
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Primary Education
              </h3>
              <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                Chogoria Boys Primary School
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Strong foundational education establishing core academic competencies and values.
              </p>
            </div>
          </div>
        </section>

        {/* Core Competencies */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-blue-600 pb-2">
            Core Competencies
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Records Management
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Database Administration</li>
                <li>• Data Governance & Compliance</li>
                <li>• Information Security</li>
                <li>• Document Management Systems</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Information Technology
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                <li>• System Integration</li>
                <li>• Technology Implementation</li>
                <li>• Process Optimization</li>
                <li>• Educational Technology</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Professional Contact
          </h2>
          <p className="text-blue-100 mb-6">
            Available for professional opportunities and collaborations in records management and information technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-3">
              <p className="text-white font-medium">Email</p>
              <p className="text-blue-100">robinbaariu@gmail.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-3">
              <p className="text-white font-medium">LinkedIn</p>
              <p className="text-blue-100">baariu robin</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}