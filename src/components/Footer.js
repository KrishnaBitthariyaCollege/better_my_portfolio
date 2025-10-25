import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 py-12 px-4 border-t dark:border-gray-700">
      <div className="container mx-auto max-w-6xl">
        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-teal-500 leading-tight">
              I Like to Build Things
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Let's{" "}
              <span className="text-orange-500 font-semibold">Connect</span>
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="mailto:krishnabitthariya76@gmail.com"
                className="text-red-500 hover:text-red-400 text-2xl"
                title="Email"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://github.com/KrishnaBitthariyaCollege"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-200 hover:text-teal-500 text-2xl"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/krishna-bitthariya-445952267/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 text-2xl"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400 dark:text-gray-500 text-sm py-4 border-t dark:border-gray-700">
          &copy; {new Date().getFullYear()} krishna bitthariya . All rights reserved.
        </div>
      </div>
    </footer>
  );
}
