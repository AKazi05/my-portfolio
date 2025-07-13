import React from "react";
import './index.css';
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-slate-900 font-sans">
      <header className="bg-white shadow-md p-6 sticky top-0 z-20">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between">
          <div>
            <h1 className="text-4xl font-extrabold text-blue-800">Akib Kazi</h1>
            <p className="text-gray-600 text-lg">Software Developer</p>
          </div>
          <nav className="mt-4 sm:mt-0">
            <ul className="flex space-x-8 text-blue-700 font-semibold text-lg">
              <li><a href="#about" className="hover:text-blue-900 transition-colors duration-300">About</a></li>
              <li><a href="#projects" className="hover:text-blue-900 transition-colors duration-300">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-900 transition-colors duration-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="about" className="p-12 max-w-5xl mx-auto mt-16 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">About Me</h2>
        <p className="max-w-3xl mx-auto text-xl leading-relaxed tracking-wide text-gray-700">
          Passionate developer skilled in building client websites and full-stack apps.
          Dedicated to clean, maintainable code with modern tools like React, TailwindCSS, and Git.
        </p>
      </section>

      <section id="projects" className="p-12 max-w-5xl mx-auto mt-20">
        <h2 className="text-4xl font-bold text-blue-900 mb-10 text-center">Projects</h2>
        <div className="grid gap-10 sm:grid-cols-2">
          <a
            href="https://www.bestlogicstaffing.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-transparent hover:border-blue-300"
          >
            <h3 className="text-3xl font-semibold text-blue-800 group-hover:text-blue-900 mb-3">
              BestLogic Staffing
            </h3>
            <p className="text-gray-700 mb-4">
              A professional staffing website I helped build, focusing on responsiveness, SEO, and performance.
            </p>
            <span className="inline-block text-blue-600 group-hover:text-blue-800 font-semibold transition-colors duration-300">
              Visit Website &rarr;
            </span>
          </a>

          <a
            href="https://github.com/AKazi05"
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-transparent hover:border-blue-300"
          >
            <h3 className="text-3xl font-semibold text-blue-800 group-hover:text-blue-900 mb-3">
              GitHub Projects
            </h3>
            <p className="text-gray-700 mb-4">
              Explore my open-source projects with React, Node, and other modern JavaScript tools.
            </p>
            <span className="inline-block text-blue-600 group-hover:text-blue-800 font-semibold transition-colors duration-300">
              View GitHub &rarr;
            </span>
          </a>
        </div>
      </section>

      <section id="contact" className="p-12 max-w-5xl mx-auto mt-24 text-center bg-blue-100 rounded-3xl shadow-inner">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">Get In Touch</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-10 text-blue-900 text-xl font-semibold">
          <a href="mailto:akazi9246@gmail.com" className="flex items-center gap-3 hover:text-blue-700 transition-colors duration-300">
            <FaEnvelope size={28} /> akazi9246@gmail.com
          </a>
          <a href="tel:5163608866" className="flex items-center gap-3 hover:text-blue-700 transition-colors duration-300">
            <FaPhone size={28} /> 516-360-8866
          </a>
        </div>
      </section>

      <footer className="mt-28 p-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Akib Kazi. Built with React, Vite & Tailwind CSS.
      </footer>
    </main>
  );
}

export default App;
