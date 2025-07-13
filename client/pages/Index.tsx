import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Play,
  Code,
  Brain,
  Zap,
  Users,
  CheckCircle,
  Star,
  Github,
  Twitter,
  Mail,
  Monitor,
  Target,
  Globe,
  Trophy,
  User,
  MessageCircle,
  Heart,
} from "lucide-react";

// Hero Section Component
const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-hero-gradient">
        <motion.div style={{ y }} className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-neon-blue/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-float delay-200"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-neon-pink/20 rounded-full blur-3xl animate-float delay-400"></div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center section-padding container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-hero mb-6 text-gradient"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Master Coding with AI,
            <br />
            <span className="text-neon">Not Boring Tutorials</span>
          </motion.h1>

          <motion.p
            className="text-subheading text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your personal AI coding mentor helps you learn, solve, and build —
            faster than ever.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/start-learning">
              <button className="btn-neon group flex items-center gap-2 text-lg px-8 py-4">
                Start Learning Free
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>

            <button className="btn-ghost-neon group flex items-center gap-2 text-lg px-8 py-4">
              <Play className="w-5 h-5" />
              Try Live Demo
            </button>
          </motion.div>

          {/* Demo Video Placeholder */}
          <motion.div
            className="relative mx-auto max-w-4xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="card-glow p-2 bg-gray-900/50">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-16 h-16 text-neon-blue mx-auto mb-4" />
                  <p className="text-gray-400">Interactive Demo Video</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Interactive Pathways Section
const InteractivePathways = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Choose a Goal",
      description:
        "Pick your coding journey: Web Dev, AI, Mobile, or Data Science",
      mockup: "Goal Selection Dashboard",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Learn Concepts",
      description: "Interactive lessons with real-time AI explanations",
      mockup: "Interactive Code Editor",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Solve Problems with AI",
      description: "Get instant help and explanations for coding challenges",
      mockup: "AI Problem Solver",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Build Projects",
      description: "Create real-world projects with AI guidance",
      mockup: "Project Builder Interface",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Showcase Portfolio",
      description: "Display your work and get hired faster",
      mockup: "Portfolio Showcase",
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
          <h2 className="text-display mb-6 text-gradient">
            Your Learning Journey
          </h2>
          <p className="text-subheading text-gray-300 max-w-3xl mx-auto">
            Follow our proven pathway from beginner to professional developer
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps Navigation */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`card-glow p-6 cursor-pointer transition-all duration-300 ${activeStep === index
                  ? "border-neon-blue shadow-neon-md"
                  : "hover:border-gray-600"
                  }`}
                onClick={() => setActiveStep(index)}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-xl ${activeStep === index
                      ? "bg-neon-blue text-white"
                      : "bg-gray-800 text-gray-400"
                      } transition-colors duration-300`}
                  >
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full border-2 ${activeStep === index
                      ? "border-neon-blue bg-neon-blue"
                      : "border-gray-600"
                      } transition-colors duration-300`}
                  >
                    {activeStep === index && (
                      <CheckCircle className="w-full h-full text-white" />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mockup Display */}
          <motion.div
            className="card-glow p-8 bg-gray-900/50"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            key={activeStep}
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-neon-blue mb-4">
                  {steps[activeStep].icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  {steps[activeStep].mockup}
                </h4>
                <p className="text-gray-400">Interactive mockup preview</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// AI Capabilities Section
const AICapabilities = () => {
  const capabilities = [
    {
      title: "AI Code Companion",
      description:
        "Get real-time explanations, fixes, and refactoring suggestions",
      features: [
        "Code explanation",
        "Bug detection",
        "Refactoring tips",
        "Best practices",
      ],
      icon: <Brain className="w-12 h-12" />,
      gradient: "from-neon-blue to-neon-cyan",
    },
    {
      title: "Live Debugger",
      description: "Paste any error and get step-by-step solutions instantly",
      features: [
        "Error analysis",
        "Solution steps",
        "Prevention tips",
        "Code fixes",
      ],
      icon: <Zap className="w-12 h-12" />,
      gradient: "from-neon-purple to-neon-pink",
    },
    {
      title: "Mini-Project Builder",
      description: "Build real projects with AI guidance and instant feedback",
      features: [
        "Project templates",
        "Live assistance",
        "Code reviews",
        "Deployment help",
      ],
      icon: <Code className="w-12 h-12" />,
      gradient: "from-neon-pink to-neon-blue",
    },
  ];

  return (
    <section
      id="features"
      className="section-spacing section-padding bg-gradient-to-b from-dark-lighter to-dark"
    >
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
            Experience the future of coding education with our advanced AI
            capabilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              className="group card-glow p-8 text-center hover:scale-105 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div
                className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${capability.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="text-white">{capability.icon}</div>
              </div>

              <h3 className="text-2xl font-bold mb-4">{capability.title}</h3>
              <p className="text-gray-300 mb-6">{capability.description}</p>

              <ul className="space-y-2 text-left">
                {capability.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-gray-400"
                  >
                    <CheckCircle className="w-4 h-4 text-neon-green" />
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                className="mt-8 btn-ghost-neon w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Try Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
        : "bg-transparent"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-wide section-padding">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-neon-gradient flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">
              CodePilot AI
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-neon-blue transition-colors"
            >
              Features
            </a>
            <a
              href="#showcase"
              className="text-gray-300 hover:text-neon-blue transition-colors"
            >
              Showcase
            </a>
            <a
              href="#testimonials"
              className="text-gray-300 hover:text-neon-blue transition-colors"
            >
              Reviews
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-neon-blue transition-colors"
            >
              Pricing
            </a>
            <Link
              to="/login"
              className="text-gray-300 hover:text-neon-blue transition-colors"
            >
              Login
            </Link>
            <Link to="/start-learning">
              <button className="btn-neon px-6 py-2">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

// Showcase Carousel Component
const ShowcaseCarousel = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "Task Manager App",
      description: "Built with React and AI-powered suggestions",
      tech: ["React", "JavaScript", "CSS"],
      demo: "Live Demo",
      icon: <Monitor className="w-16 h-16" />,
    },
    {
      title: "Weather Dashboard",
      description: "API integration with real-time data",
      tech: ["JavaScript", "APIs", "Charts"],
      demo: "Live Demo",
      icon: <Target className="w-16 h-16" />,
    },
    {
      title: "E-commerce Site",
      description: "Full-stack application with payment integration",
      tech: ["Node.js", "Database", "React"],
      demo: "Live Demo",
      icon: <Globe className="w-16 h-16" />,
    },
    {
      title: "AI Chatbot",
      description: "Natural language processing integration",
      tech: ["Python", "AI/ML", "APIs"],
      demo: "Live Demo",
      icon: <Brain className="w-16 h-16" />,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="showcase"
      className="section-spacing section-padding bg-gradient-to-b from-dark to-dark-lighter"
    >
      <div className="container-wide">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-display mb-6">Student Project Showcase</h2>
          <p className="text-subheading text-gray-300 max-w-3xl mx-auto">
            See what our students build with AI-powered guidance
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            className="card-glow p-8 bg-gray-900/50"
            key={currentProject}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-neon-blue mb-4">
                  {projects[currentProject].icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gradient">
                  {projects[currentProject].title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {projects[currentProject].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[currentProject].tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-neon-blue/20 border border-neon-blue/30 rounded-full text-sm text-neon-blue"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="btn-ghost-neon px-6 py-3">
                  {projects[currentProject].demo}
                </button>
              </div>
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                <Play className="w-16 h-16 text-neon-blue" />
              </div>
            </div>
          </motion.div>

          {/* Project Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentProject ? "bg-neon-blue" : "bg-gray-600"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Gamified Learning Component
const GamifiedLearning = () => {
  const learningPath = [
    {
      step: 1,
      title: "JavaScript Basics",
      xp: 150,
      completed: true,
      icon: <Code className="w-6 h-6" />,
    },
    {
      step: 2,
      title: "Functions & Logic",
      xp: 200,
      completed: true,
      icon: <Zap className="w-6 h-6" />,
    },
    {
      step: 3,
      title: "DOM Manipulation",
      xp: 250,
      completed: false,
      current: true,
      icon: <Monitor className="w-6 h-6" />,
    },
    {
      step: 4,
      title: "Async Programming",
      xp: 300,
      completed: false,
      icon: <Target className="w-6 h-6" />,
    },
    {
      step: 5,
      title: "Final Project",
      xp: 500,
      completed: false,
      icon: <Trophy className="w-6 h-6" />,
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
          <h2 className="text-display mb-6">Level Up Your Skills</h2>
          <p className="text-subheading text-gray-300 max-w-3xl mx-auto">
            Gamified learning with XP points, achievements, and progress
            tracking
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Learning Path Visualization */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8 text-gradient">
              Your Learning Journey
            </h3>
            {learningPath.map((item, index) => (
              <motion.div
                key={index}
                className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${item.current
                  ? "card-glow border-neon-blue shadow-neon-md"
                  : item.completed
                    ? "bg-gray-800/50 border border-gray-700"
                    : "bg-gray-900/30 border border-gray-800"
                  }`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${item.completed
                    ? "bg-neon-green text-white"
                    : item.current
                      ? "bg-neon-blue text-white"
                      : "bg-gray-700 text-gray-400"
                    }`}
                >
                  {item.completed ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    item.icon
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Trophy className="w-4 h-4" />
                    <span>{item.xp} XP</span>
                  </div>
                </div>
                {item.current && (
                  <div className="text-neon-blue text-sm font-medium">
                    In Progress
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* XP Dashboard */}
          <motion.div
            className="card-glow p-8 bg-gray-900/50"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gradient">
              Your Stats
            </h3>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Total XP</span>
                <span className="text-2xl font-bold text-neon-blue">1,250</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-400">Current Level</span>
                <span className="text-2xl font-bold text-neon-purple">5</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-400">Lessons Completed</span>
                <span className="text-2xl font-bold text-neon-green">23</span>
              </div>

              <div className="pt-4 border-t border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">Progress to Next Level</span>
                  <span className="text-sm text-gray-400">320/500 XP</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3">
                  <motion.div
                    className="bg-neon-gradient h-3 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "64%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <Trophy className="w-8 h-8 mx-auto mb-2 text-neon-blue" />
                  <div className="text-sm text-gray-400">Achievements</div>
                  <div className="font-bold text-neon-blue">12</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <Zap className="w-8 h-8 mx-auto mb-2 text-neon-purple" />
                  <div className="text-sm text-gray-400">Day Streak</div>
                  <div className="font-bold text-neon-purple">7</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// AI Playground Component
const AIPlayground = () => {
  const [aiResponse, setAiResponse] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleTryAI = () => {
    setIsTyping(true);
    setTimeout(() => {
      setAiResponse(
        "Great question! Arrays in JavaScript are like containers that can hold multiple values. Let me show you with an example:\n\nconst fruits = ['apple', 'banana', 'orange'];\nconsole.log(fruits[0]); // 'apple'",
      );
      setIsTyping(false);
    }, 2000);
  };

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
          <h2 className="text-display mb-6">Try Our AI Mentor</h2>
          <p className="text-subheading text-gray-300 max-w-3xl mx-auto">
            Experience real-time AI assistance before you sign up
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Code Editor */}
          <motion.div
            className="card-glow overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 p-4 border-b border-white/10 bg-gray-900/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-400 text-sm ml-2">playground.js</span>
            </div>
            <div className="p-6 bg-gray-900/80 font-mono text-sm min-h-[300px]">
              <div className="space-y-2">
                <div className="text-gray-500">// Try modifying this code</div>
                <div className="text-blue-400">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">numbers</span>{" "}
                  <span className="text-gray-300">=</span>{" "}
                  <span className="text-green-300">[1, 2, 3, 4, 5]</span>
                  <span className="text-gray-300">;</span>
                </div>
                <div className="text-blue-400">
                  <span className="text-blue-300">numbers</span>
                  <span className="text-gray-300">.</span>
                  <span className="text-yellow-300">forEach</span>
                  <span className="text-gray-300">(</span>
                  <span className="text-blue-300">num</span>
                  <span className="text-gray-300"> =&gt; &#123;</span>
                </div>
                <div className="text-blue-400 ml-4">
                  <span className="text-blue-300">console</span>
                  <span className="text-gray-300">.</span>
                  <span className="text-yellow-300">log</span>
                  <span className="text-gray-300">(</span>
                  <span className="text-blue-300">num</span>
                  <span className="text-gray-300"> * </span>
                  <span className="text-green-300">2</span>
                  <span className="text-gray-300">);</span>
                </div>
                <div className="text-gray-300">&#125;);</div>
                <div className="text-gray-500 mt-4">
                  // Ask AI: "How do arrays work?"
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-white/10 bg-gray-900/50">
              <button
                onClick={handleTryAI}
                className="btn-neon w-full py-3 flex items-center justify-center gap-2"
              >
                <Brain className="w-5 h-5" />
                Ask AI About This Code
              </button>
            </div>
          </motion.div>

          {/* AI Chat Panel */}
          <motion.div
            className="card-glow overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 p-4 border-b border-white/10 bg-gray-900/50">
              <Brain className="w-5 h-5 text-neon-blue" />
              <span className="font-semibold text-neon-blue">AI Mentor</span>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse ml-auto"></div>
            </div>

            <div className="p-6 min-h-[300px] space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center text-white text-xs font-bold">
                  AI
                </div>
                <div className="bg-gray-800 rounded-lg p-3 flex-1">
                  <User className="w-4 h-4 mr-2 inline" />
                  Hi! I'm your AI coding mentor. Ask me anything about the code
                  on the left, or any programming concept you're curious about!
                </div>
              </div>

              {aiResponse && (
                <motion.div
                  className="flex gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center text-white text-xs font-bold">
                    AI
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3 flex-1">
                    <pre className="whitespace-pre-wrap text-sm">
                      {aiResponse}
                    </pre>
                  </div>
                </motion.div>
              )}

              {isTyping && (
                <motion.div
                  className="flex gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center text-white text-xs font-bold">
                    AI
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="p-4 border-t border-white/10 bg-gray-900/50">
              <div className="flex flex-wrap gap-2 mb-4">
                <button className="text-xs px-3 py-1 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors text-gray-300">
                  How do arrays work?
                </button>
                <button className="text-xs px-3 py-1 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors text-gray-300">
                  Explain forEach
                </button>
                <button className="text-xs px-3 py-1 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors text-gray-300">
                  Give me a challenge
                </button>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ask anything about coding..."
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-neon-blue/70 focus:ring-1 focus:ring-neon-blue/20 transition-all"
                />
                <button className="p-2 rounded-lg bg-neon-blue hover:bg-neon-purple transition-colors">
                  <MessageCircle className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Component
const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Frontend Developer at Meta",
      avatar: <User className="w-8 h-8" />,
      text: "CodePilot's AI mentor helped me land my dream job. The personalized feedback was game-changing!",
      badge: "Got hired in 30 days",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      role: "Full-Stack Developer",
      avatar: <Code className="w-8 h-8" />,
      text: "I built 5 real projects with AI guidance. The hands-on approach made complex concepts click instantly.",
      badge: "Built 5 projects",
      rating: 5,
    },
    {
      name: "Elena Rodriguez",
      role: "Software Engineer at Google",
      avatar: <Users className="w-8 h-8" />,
      text: "The gamified learning kept me motivated. Went from beginner to confident developer in 3 months.",
      badge: "Career switcher",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="section-spacing section-padding bg-gradient-to-b from-dark-darker to-dark"
    >
      <div className="container-wide">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-display mb-6">Success Stories</h2>
          <p className="text-subheading text-gray-300 max-w-3xl mx-auto">
            Join thousands of developers who've transformed their careers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="card-glow p-8 text-center hover:scale-105 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center text-white mx-auto mb-4">
                {testimonial.avatar}
              </div>
              <div className="inline-flex px-3 py-1 bg-neon-blue/20 border border-neon-blue/30 rounded-full text-xs font-medium text-neon-blue mb-4">
                {testimonial.badge}
              </div>
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-current text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
              <h4 className="font-semibold mb-1">{testimonial.name}</h4>
              <p className="text-gray-400 text-sm">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Pricing Component
const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Free Forever",
      price: { monthly: 0, yearly: 0 },
      features: [
        "All courses access",
        "Full AI mentor assistance",
        "Community support",
        "Progress tracking",
        "Project building",
        "No credit card required",
      ],
      cta: "Start Learning Free",
      popular: true,
      icon: <Star className="w-6 h-6" />,
    },
    {
      name: "Coming Soon",
      price: { monthly: "?", yearly: "?" },
      features: [
        "Everything in Free",
        "Premium features",
        "Advanced analytics",
        "Priority support",
        "Exclusive content",
        "Early access",
      ],
      cta: "Notify Me",
      popular: false,
      icon: <Zap className="w-6 h-6" />,
      comingSoon: true,
    },
    {
      name: "Enterprise",
      price: { monthly: "Custom", yearly: "Custom" },
      features: [
        "Team management",
        "Custom integrations",
        "Dedicated support",
        "On-premise deployment",
        "Custom curriculum",
        "SLA guarantee",
      ],
      cta: "Contact Sales",
      popular: false,
      icon: <Trophy className="w-6 h-6" />,
      enterprise: true,
    },
  ];

  return (
    <section
      id="pricing"
      className="section-spacing section-padding bg-gradient-to-b from-dark to-dark-lighter"
    >
      <div className="container-wide">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-display mb-6">Choose Your Plan</h2>
          <p className="text-subheading text-gray-300 max-w-3xl mx-auto mb-8">
            Start free, upgrade anytime. All plans include AI assistance.
          </p>

          {/* Yearly Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`${!isYearly ? "text-white" : "text-gray-400"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${isYearly ? "bg-neon-blue" : "bg-gray-600"
                }`}
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${isYearly ? "translate-x-7" : "translate-x-1"
                  }`}
              />
            </button>
            <span className={`${isYearly ? "text-white" : "text-gray-400"}`}>
              Yearly
              <span className="text-neon-green text-sm ml-1">(Save 20%)</span>
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`card-glow p-8 text-center relative hover:scale-105 transition-all duration-500 ${plan.popular ? "border-neon-blue shadow-neon-md" : ""
                }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              style={{ marginTop: plan.popular ? "2rem" : "0" }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-neon-gradient px-4 py-1 rounded-full text-sm font-medium text-white z-10">
                  Most Popular
                </div>
              )}

              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center text-white">
                {plan.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gradient">
                  {plan.name === "Free Forever"
                    ? "Free"
                    : plan.enterprise
                      ? "Custom"
                      : plan.comingSoon
                        ? "TBA"
                        : `$${isYearly ? plan.price.yearly : plan.price.monthly}`}
                </span>
                {!plan.enterprise &&
                  !plan.comingSoon &&
                  plan.name !== "Free Forever" && (
                    <span className="text-gray-400">
                      /{isYearly ? "year" : "month"}
                    </span>
                  )}
              </div>

              <ul className="space-y-3 mb-8 text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-neon-green" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.name === "Free Forever" ? (
                <Link to="/start-learning">
                  <motion.button
                    className="btn-neon w-full py-3 rounded-lg font-medium transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {plan.cta}
                  </motion.button>
                </Link>
              ) : (
                <motion.button
                  className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${plan.popular ? "btn-neon" : "btn-ghost-neon"
                    } ${plan.comingSoon ? "opacity-50 cursor-not-allowed" : ""}`}
                  whileHover={{ scale: plan.comingSoon ? 1 : 1.05 }}
                  whileTap={{ scale: plan.comingSoon ? 1 : 0.95 }}
                  disabled={plan.comingSoon}
                >
                  {plan.cta}
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  const [email, setEmail] = useState("");

  const footerLinks = {
    Product: ["Courses", "AI Mentor", "Projects", "Pricing"],
    Company: ["About", "Blog", "Careers", "Press"],
    Support: ["Help Center", "Community", "Contact", "Status"],
    Legal: ["Privacy", "Terms", "Cookies", "Licenses"],
  };

  return (
    <footer className="bg-dark-darker border-t border-white/10">
      <div className="container-wide section-padding">
        {/* Newsletter Section */}
        <motion.div
          className="card-glow p-8 mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 text-gradient">
            Stay Updated
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Get the latest coding tips, AI developments, and course updates
            delivered to your inbox.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-neon-blue/70 focus:ring-1 focus:ring-neon-blue/20 transition-all"
            />
            <button className="btn-neon px-6 py-3">Subscribe</button>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-neon-gradient flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">
                CodePilot AI
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              The future of coding education. Learn faster, build better, with
              AI as your mentor.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-neon-blue transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 CodePilot AI. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" /> by Utkarsh Yadav for developers
            worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main Landing Page Component
export default function Index() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navigation />
      <HeroSection />
      <InteractivePathways />
      <AICapabilities />

      {/* Showcase Carousel */}
      <ShowcaseCarousel />

      {/* Gamified Learning */}
      <GamifiedLearning />

      {/* AI Playground */}
      <AIPlayground />

      {/* Testimonials */}
      <Testimonials />

      {/* Pricing */}
      <Pricing />

      {/* Footer */}
      <Footer />
    </div>
  );
}
