"use client"
import Image from "next/image";
import AnimatedSection from "./components/AnimatedSection";
import { Mail, Download, Github, Code } from "lucide-react";
import { SiApachespark, SiDbt, SiAirbyte, SiApacheairflow, SiAmazon, SiPostgresql, SiApachekafka, SiFlask, SiNodedotjs, SiSocketdotio } from "react-icons/si";

import { motion } from "framer-motion";

export default function Home() {
  const personalInfo = {
    name: "Nguyen Van A",
    title: "Data Engineer / Backend Developer",
    email: "antran.261004@gmail.com",
    github: "https://github.com/yourusername",
    summary: "Crafting scalable data pipelines and robust backend architectures. I turn raw streams into actionable intelligence."
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const textRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const skills = [
    { name: "Spark", icon: <SiApachespark className="text-orange-500" /> },
    { name: "DBT", icon: <SiDbt className="text-orange-600" /> },
    { name: "Airbyte", icon: <SiAirbyte className="text-purple-500" /> },
    { name: "Airflow", icon: <SiApacheairflow className="text-teal-500" /> },
    { name: "S3 Storage", icon: <SiAmazon className="text-yellow-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
    { name: "Kafka", icon: <SiApachekafka className="text-white" /> },
    { name: "Flask API", icon: <SiFlask className="text-white" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Socket.io", icon: <SiSocketdotio className="text-white" /> },
  ];

  const projects = [{
    image: "/project-placeholder.jpg",
    name: "Real-time Data Pipeline",
    description: "Built a streaming data pipeline using Kafka and Spark to process IoT sensor data in real-time.",
    github: "#",
    technical: "Kafka, Spark, MongoDB"
  }, {
    image: "/project-placeholder.jpg",
    name: "E-commerce ETL",
    description: "Designed an automated ETL process using Airflow and DBT to transform raw sales data into analytical models.",
    github: "#",
    technical: "Airflow, DBT, PostgreSQL"
  }];

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 overflow-x-hidden">

      {/* Abstract Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [180, 0, 180] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen"
        />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] text-center px-4">

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="mb-8 relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-400 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="relative w-48 h-48 rounded-full p-1 bg-black">
            <Image
              src="/profile.png"
              alt="Profile Picture"
              className="rounded-full object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
              width={192}
              height={192}
            />
          </div>
        </motion.div>

        <motion.h1
          variants={textRevealVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "auto" }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-[1px] w-12 bg-gray-700"></span>
          <span className="text-xl md:text-2xl font-light text-blue-400/90 tracking-widest uppercase">
            {personalInfo.title}
          </span>
          <span className="h-[1px] w-12 bg-gray-700"></span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="max-w-xl mx-auto text-gray-400 text-lg leading-relaxed mb-12 font-light"
        >
          {personalInfo.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex gap-6"
        >
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-gray-800 bg-gray-950/50 hover:bg-white hover:text-black hover:border-white transition-all duration-300 transform hover:scale-110">
            <Github className="w-6 h-6" />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="p-3 rounded-full border border-gray-800 bg-gray-950/50 hover:bg-white hover:text-black hover:border-white transition-all duration-300 transform hover:scale-110">
            <Mail className="w-6 h-6" />
          </a>
          <a href="/cv.pdf" download className="p-3 rounded-full border border-gray-800 bg-gray-950/50 hover:bg-white hover:text-black hover:border-white transition-all duration-300 transform hover:scale-110">
            <Download className="w-6 h-6" />
          </a>
        </motion.div>
      </section>

      {/* Skills Section (Staggered) */}
      <AnimatedSection className="relative z-10 py-24 px-4 bg-gradient-to-b from-transparent to-black" delay={0.2}>
        <div className="max-w-6xl mx-auto">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mb-12 text-center">Core Technologies</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 md:gap-8"
          >
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "rgba(168, 85, 247, 0.5)", // purple-500/50
                  boxShadow: "0 10px 30px -10px rgba(168, 85, 247, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative flex flex-col items-center justify-center p-6 bg-white/5 border border-white/5 rounded-2xl backdrop-blur-sm cursor-pointer min-w-[120px]"
              >
                <div className="text-4xl mb-4 text-gray-400 group-hover:text-white transition-colors duration-300">
                  {skill.icon}
                </div>
                <span className="text-xs font-semibold tracking-wider text-gray-500 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Featured Projects (Glassmorphism & Staggered) */}
      <AnimatedSection className="relative z-10 py-32 px-4" delay={0.4}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <div className="w-1 h-20 bg-gradient-to-b from-transparent via-purple-500 to-blue-500 mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-center">Selected Works</h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  borderColor: "rgba(255, 255, 255, 0.5)",
                  boxShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.3)" // blue glow
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative rounded-3xl overflow-hidden bg-gray-900 border border-white/10 cursor-pointer"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="h-64 bg-black/50 flex items-center justify-center p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-20"></div>
                  <div className="transform transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <Code className="w-16 h-16 text-gray-700 group-hover:text-white transition-colors" />
                  </div>
                </div>

                <div className="p-8 relative z-10 bg-black/40 backdrop-blur-xl border-t border-white/10 -mt-2">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.name}</h4>
                    <a href={project.github} className="p-2 rounded-full bg-white/5 hover:bg-white hover:text-black transition-all">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-gray-300">
                    {project.technical}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      <footer className="py-12 text-center border-t border-gray-900 bg-black relative z-10">
        <p className="text-gray-600 text-sm">© 2024 {personalInfo.name}. Crafted with Next.js & Tailwind.</p>
      </footer>
    </main>
  );
}
