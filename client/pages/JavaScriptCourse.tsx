import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Code,
  ArrowLeft,
  Play,
  Clock,
  Users,
  Trophy,
  CheckCircle,
  BookOpen,
  Zap,
  MessageCircle,
  Monitor,
  Brain,
  Target,
  Star,
  ChevronRight,
  FileCode,
  Database,
  Globe,
  Smartphone,
} from "lucide-react";

// Navigation Component
const Navigation = () => {
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/10"
      style={{ backgroundColor: `rgba(0, 0, 0, ${navOpacity})` }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-wide section-padding">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-neon-gradient flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">
              CodePilot AI
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              to="/start-learning"
              className="text-gray-400 hover:text-neon-blue transition-colors"
            >
              All Courses
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-400 hover:text-neon-blue transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Home
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

// Progress Bar Component
const ProgressBar = () => {
  const progress = 0; // This would be dynamic in a real app

  return (
    <motion.div
      className="fixed top-20 left-0 right-0 z-40 h-1 bg-gray-800"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <motion.div
        className="h-full bg-neon-gradient"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1, delay: 1 }}
      />
    </motion.div>
  );
};

// Hero Section
const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-hero-gradient">
        <motion.div style={{ y }} className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-neon-cyan/20 rounded-full blur-3xl animate-float delay-200"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-neon-purple/20 rounded-full blur-3xl animate-float delay-400"></div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-neon-blue/10 border border-neon-blue/30 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-neon-blue" />
              <span className="text-sm font-medium text-neon-blue">
                Most Popular
              </span>
            </div>

            <h1 className="text-hero mb-6 leading-tight">
              Master <span className="text-gradient">JavaScript</span> from
              Scratch
            </h1>

            <p className="text-subheading text-gray-300 mb-8 leading-relaxed">
              Interactive coding, real-time AI help, and hands-on projects.
              Build modern web applications with confidence.
            </p>

            {/* Course Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-blue mb-1">
                  8 weeks
                </div>
                <div className="text-gray-400 text-sm">Duration</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-purple mb-1">
                  12.5k
                </div>
                <div className="text-gray-400 text-sm">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-pink mb-1">
                  4.9
                </div>
                <div className="text-gray-400 text-sm flex items-center justify-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  Rating
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-green mb-1">
                  Beginner
                </div>
                <div className="text-gray-400 text-sm">Level</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/course/javascript/learn?lesson=intro-javascript">
                <motion.button
                  className="btn-neon px-8 py-4 text-lg flex items-center justify-center gap-2 w-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-5 h-5" />
                  Start Lesson 1
                </motion.button>
              </Link>
              <motion.button
                className="btn-ghost-neon px-8 py-4 text-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen className="w-5 h-5" />
                Course Preview
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Code Preview */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="card-glow p-6 bg-gray-900/80">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-400 text-sm ml-2">lesson-1.js</span>
              </div>
              <div className="font-mono text-sm space-y-2">
                <div className="text-gray-500">
                  // Your first JavaScript program
                </div>
                <div className="text-blue-400">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">greeting</span>{" "}
                  <span className="text-gray-300">=</span>{" "}
                  <span className="text-green-300">"Hello, World!"</span>
                  <span className="text-gray-300">;</span>
                </div>
                <div className="text-blue-400">
                  <span className="text-blue-300">console</span>
                  <span className="text-gray-300">.</span>
                  <span className="text-yellow-300">log</span>
                  <span className="text-gray-300">(</span>
                  <span className="text-blue-300">greeting</span>
                  <span className="text-gray-300">);</span>
                </div>
                <div className="text-gray-500 mt-4">// Output:</div>
                <div className="text-green-400">Hello, World!</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// What You'll Learn Section
const WhatYoullLearn = () => {
  const concepts = [
    {
      icon: <FileCode className="w-8 h-8" />,
      title: "Variables & Data Types",
      description: "Learn to store and manipulate different types of data",
      gradient: "from-neon-blue to-neon-cyan",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Functions & Scope",
      description: "Create reusable code blocks and understand variable scope",
      gradient: "from-neon-cyan to-neon-purple",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Control Flow",
      description: "Master loops, conditionals, and decision making",
      gradient: "from-neon-purple to-neon-pink",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "DOM Manipulation",
      description: "Interact with HTML elements and create dynamic pages",
      gradient: "from-neon-pink to-neon-blue",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Objects & Arrays",
      description: "Work with complex data structures efficiently",
      gradient: "from-neon-green to-neon-cyan",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Async Programming",
      description: "Handle promises, async/await, and API calls",
      gradient: "from-neon-blue to-neon-purple",
    },
  ];

  return (
    <section className="section-spacing section-padding bg-gradient-to-b from-dark to-dark-lighter">
      <div className="container-wide">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-display mb-6">What You'll Learn</h2>
          <p className="text-subheading text-gray-300 max-w-3xl mx-auto">
            Master these essential JavaScript concepts through hands-on coding
            with AI guidance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {concepts.map((concept, index) => (
            <motion.div
              key={concept.title}
              className="group card-glow p-8 text-center hover:scale-105 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div
                className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${concept.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="text-white">{concept.icon}</div>
              </div>

              <h3 className="text-xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">
                {concept.title}
              </h3>
              <p className="text-gray-400">{concept.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Lesson Preview Section
const LessonPreview = () => {
  const [activeLesson, setActiveLesson] = useState(0);

  const lessons = [
    {
      title: "Getting Started",
      duration: "45 min",
      topics: [
        "Setting up your environment",
        "Writing your first code",
        "Understanding the console",
      ],
      completed: false,
    },
    {
      title: "Variables & Constants",
      duration: "60 min",
      topics: ["let, const, var", "Data types", "Variable naming"],
      completed: false,
    },
    {
      title: "Functions Fundamentals",
      duration: "75 min",
      topics: [
        "Function declarations",
        "Parameters & arguments",
        "Return values",
      ],
      completed: false,
    },
    {
      title: "Control Structures",
      duration: "90 min",
      topics: ["If statements", "Switch cases", "Loops"],
      completed: false,
    },
    {
      title: "Objects & Arrays",
      duration: "105 min",
      topics: ["Creating objects", "Array methods", "Destructuring"],
      completed: false,
    },
  ];

  return (
    <section className="section-spacing section-padding bg-gradient-to-b from-dark-lighter to-dark">
      <div className="container-wide">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-display mb-6">Course Curriculum</h2>
          <p className="text-subheading text-gray-300 max-w-3xl mx-auto">
            Step-by-step lessons designed to build your skills progressively
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Lesson List */}
          <div className="space-y-4">
            {lessons.map((lesson, index) => (
              <motion.div
                key={index}
                className={`card-glow p-6 cursor-pointer transition-all duration-300 ${
                  activeLesson === index
                    ? "border-neon-blue shadow-neon-md"
                    : "hover:border-gray-600"
                }`}
                onClick={() => setActiveLesson(index)}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${
                      activeLesson === index
                        ? "bg-neon-blue text-white"
                        : "bg-gray-800 text-gray-400"
                    } transition-colors duration-300`}
                  >
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">{lesson.title}</h3>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Clock className="w-4 h-4" />
                        {lesson.duration}
                      </div>
                    </div>
                    <div className="text-gray-400 text-sm">
                      {lesson.topics.length} topics
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform duration-300 ${
                      activeLesson === index
                        ? "rotate-90 text-neon-blue"
                        : "text-gray-400"
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Lesson Details */}
          <motion.div
            className="card-glow p-8"
            key={activeLesson}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              {lessons[activeLesson].title}
            </h3>
            <div className="flex items-center gap-4 mb-6 text-gray-400">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {lessons[activeLesson].duration}
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                {lessons[activeLesson].topics.length} topics
              </div>
            </div>

            <h4 className="font-semibold mb-4">What you'll learn:</h4>
            <ul className="space-y-3 mb-8">
              {lessons[activeLesson].topics.map((topic, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-neon-green" />
                  <span className="text-gray-300">{topic}</span>
                </li>
              ))}
            </ul>

            <Link to="/course/javascript/learn?lesson=intro-javascript">
              <motion.button
                className="btn-neon w-full py-3 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                Start This Lesson
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// AI Features Section
const AIFeatures = () => {
  return (
    <section className="section-spacing section-padding bg-gradient-to-b from-dark to-dark-darker">
      <div className="container-wide">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-display mb-6">AI-Powered Learning</h2>
          <p className="text-subheading text-gray-300 max-w-3xl mx-auto">
            Get instant help, explanations, and feedback as you code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r from-neon-blue to-neon-cyan flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Real-time Code Analysis
                </h3>
                <p className="text-gray-400">
                  AI monitors your code and provides instant feedback,
                  suggestions, and error explanations
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r from-neon-purple to-neon-pink flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Interactive Q&A</h3>
                <p className="text-gray-400">
                  Ask questions anytime and get detailed explanations tailored
                  to your learning level
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r from-neon-green to-neon-cyan flex items-center justify-center">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Live Code Playground
                </h3>
                <p className="text-gray-400">
                  Practice in an integrated IDE with AI assistance and instant
                  code execution
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mock AI Chat Interface */}
          <motion.div
            className="card-glow p-6 bg-gray-900/80"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-700">
              <Brain className="w-5 h-5 text-neon-blue" />
              <span className="font-semibold text-neon-blue">AI Assistant</span>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse ml-auto"></div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                  AI
                </div>
                <div className="bg-gray-800 rounded-lg p-3 flex-1">
                  I see you're working on functions! The error on line 3 is
                  because you forgot to return a value. Try adding 'return
                  result;' at the end.
                </div>
              </div>

              <div className="flex gap-3 justify-end">
                <div className="bg-neon-blue/20 border border-neon-blue/30 rounded-lg p-3 max-w-xs">
                  Thanks! Can you explain why we need return statements?
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-white text-xs font-bold">
                  You
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                  AI
                </div>
                <div className="bg-gray-800 rounded-lg p-3 flex-1">
                  Great question! Return statements specify what value a
                  function gives back when called...
                  <div className="text-gray-400 mt-1 text-xs">✨ Typing...</div>
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-4 pt-4 border-t border-gray-700">
              <button className="flex-1 bg-gray-800 hover:bg-gray-700 rounded-lg px-3 py-2 text-xs transition-colors">
                Explain this concept
              </button>
              <button className="flex-1 bg-gray-800 hover:bg-gray-700 rounded-lg px-3 py-2 text-xs transition-colors">
                Show example
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Main JavaScript Course Component
export default function JavaScriptCourse() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navigation />
      <ProgressBar />
      <HeroSection />
      <WhatYoullLearn />
      <LessonPreview />
      <AIFeatures />
    </div>
  );
}
