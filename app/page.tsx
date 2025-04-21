import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-20 pb-10 text-center">
        <div className="relative w-24 h-24 mb-6">
          <Image 
            src="/profile.jpg" 
            alt="Profile Picture" 
            className="rounded-full border-4 border-purple-500"
            width={100}
            height={100}
            priority
          />
        </div>
        <h1 className="text-3xl font-bold mb-2">I do code and</h1>
        <h2 className="text-3xl font-bold mb-4">make content <span className="primary-gradient-text">about it!</span></h2>
        <p className="text-gray-400 max-w-lg text-sm mb-8">
          I enjoy creating and building full-stack web applications with modern technologies.
          My approach combines technical proficiency with creative problem-solving to deliver exceptional user experiences.
        </p>
        
        <div className="flex gap-4 mb-12">
          <a href="#contact" className="px-6 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition">
            Get in Touch
          </a>
          <a href="#" className="px-6 py-2 rounded-full border border-white text-white font-semibold hover:bg-white/10 transition">
            Download CV
          </a>
        </div>
      </section>
      
      {/* Experience With Section */}
      <section className="pb-16 text-center">
        <h3 className="uppercase text-sm tracking-wider mb-6 text-gray-400">Experience with</h3>
        <div className="flex justify-center gap-8">
          <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M3 5l9 3 9-3-9-3-9 3z"></path><path d="M3 5v14l9 3V8L3 5z"></path><path d="M21 5v14l-9 3V8l9-3z"></path>
            </svg>
          </div>
          <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M18 20.7l-6-2.4-6 2.4V4l6-2 6 2v16.7"></path>
            </svg>
          </div>
          <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
            </svg>
          </div>
          <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M20.59 13.91l-7.17 7.17a2 2 0 01-2.83 0L2 12.5V5h7.5l8.26 8.26a2 2 0 010 2.83z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>
            </svg>
          </div>
          <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="pb-20">
        <h2 className="uppercase text-2xl font-bold mb-8 text-center text-orange-500">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
          <div className="bg-gray-900 rounded-lg overflow-hidden group hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
            <div className="h-48 bg-gradient-to-br from-orange-600 to-red-500 flex items-center justify-center overflow-hidden">
              <div className="text-4xl font-bold p-6 text-center">
                <span className="text-white">HTML5</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">POWER OF HTML</h3>
              <p className="text-gray-400 text-sm mb-4">HTML project showcasing semantic markup and accessibility best practices</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-orange-500 uppercase tracking-wider">HTML TUTORIAL</span>
                <div className="bg-gray-800 rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-lg overflow-hidden group hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
            <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-500 flex items-center justify-center overflow-hidden">
              <div className="text-4xl font-bold p-6 text-center">
                <span className="text-white">CSS3</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">CSS MAGIC</h3>
              <p className="text-gray-400 text-sm mb-4">Advanced CSS techniques and animations to create stunning visual effects</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-blue-500 uppercase tracking-wider">CSS TUTORIAL</span>
                <div className="bg-gray-800 rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="pb-20">
        <h2 className="uppercase text-2xl font-bold mb-8 text-center text-blue-500">Experience</h2>
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <div className="bg-gray-900/50 border border-purple-500 rounded-lg p-6 transition-all duration-300 hover:border-purple-400 hover:bg-gray-900/70">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h3 className="font-bold text-lg">Lead Software Engineer at Google</h3>
              <p className="text-purple-400 text-sm">2020 - Present</p>
            </div>
            <p className="text-gray-400 text-sm mb-2">Mountain View, California</p>
            <p className="text-sm leading-relaxed">
              Developing and maintaining core products with React and Node.js. Leading a team of 5 developers and collaborating with product managers to deliver high-quality features.
            </p>
          </div>
          
          <div className="bg-gray-900/50 border border-purple-500 rounded-lg p-6 transition-all duration-300 hover:border-purple-400 hover:bg-gray-900/70">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h3 className="font-bold text-lg">Senior Software Engineer at Apple</h3>
              <p className="text-purple-400 text-sm">2018 - 2020</p>
            </div>
            <p className="text-gray-400 text-sm mb-2">Cupertino, California</p>
            <p className="text-sm leading-relaxed">
              Worked on frontend applications using React and Redux. Implemented responsive designs and improved performance of existing applications.
            </p>
          </div>
          
          <div className="bg-gray-900/50 border border-purple-500 rounded-lg p-6 transition-all duration-300 hover:border-purple-400 hover:bg-gray-900/70">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h3 className="font-bold text-lg">Software Engineer at Meta</h3>
              <p className="text-purple-400 text-sm">2016 - 2018</p>
            </div>
            <p className="text-gray-400 text-sm mb-2">Menlo Park, California</p>
            <p className="text-sm leading-relaxed">
              Built and maintained web applications using JavaScript frameworks. Collaborated with UX designers to implement responsive and accessible user interfaces.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="pb-20">
        <h2 className="uppercase text-2xl font-bold mb-8 text-center">Contact</h2>
        <div className="max-w-md mx-auto px-4">
          <p className="text-center text-gray-400 mb-8">
            I'm always open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to connect!
          </p>
          <div className="flex justify-center">
            <a href="mailto:contact@example.com" className="px-6 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition">
              Email Me
            </a>
          </div>
        </div>
      </section>
      
      <footer className="py-6 text-center text-gray-500 text-sm">
        <p>© 2023 Developer Portfolio. All rights reserved.</p>
      </footer>
    </main>
  );
}
