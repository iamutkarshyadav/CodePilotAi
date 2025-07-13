import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Code,
  ArrowLeft,
  ArrowRight,
  Zap,
  Smartphone,
  Database,
  Globe,
  Cpu,
  Palette,
  Shield,
  BarChart3,
  Clock,
  Users,
  Trophy,
} from "lucide-react";

// Navigation Component
const Navigation = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10"
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

          <Link
            to="/"
            className="flex items-center gap-2 text-gray-400 hover:text-neon-blue transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

// Course Card Component
interface CourseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  students: string;
  gradient: string;
  href?: string;
  comingSoon?: boolean;
  delay?: number;
}

const CourseCard = ({
  icon,
  title,
  description,
  difficulty,
  duration,
  students,
  gradient,
  href,
  comingSoon = false,
  delay = 0,
}: CourseCardProps) => {
  const cardContent = (
    <motion.div
      className="group relative card-glow p-8 h-full cursor-pointer transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Coming Soon Badge */}
      {comingSoon && (
        <div className="absolute top-4 right-4 bg-neon-purple/20 border border-neon-purple/50 rounded-full px-3 py-1 text-xs font-medium text-neon-purple">
          Coming Soon
        </div>
      )}

      {/* Icon */}
      <div
        className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
      >
        <div className="text-white text-2xl">{icon}</div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold group-hover:text-gradient transition-all duration-300">
          {title}
        </h3>

        <p className="text-gray-400 leading-relaxed">{description}</p>

        {/* Meta Information */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
          <div className="text-center">
            <div className="text-xs text-gray-500 mb-1">Level</div>
            <div
              className={`text-sm font-medium ${difficulty === "Beginner"
                ? "text-neon-green"
                : difficulty === "Intermediate"
                  ? "text-neon-blue"
                  : "text-neon-purple"
                }`}
            >
              {difficulty}
            </div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-500 mb-1">Duration</div>
            <div className="text-sm font-medium text-gray-300 flex items-center justify-center gap-1">
              <Clock className="w-3 h-3" />
              {duration}
            </div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-500 mb-1">Students</div>
            <div className="text-sm font-medium text-gray-300 flex items-center justify-center gap-1">
              <Users className="w-3 h-3" />
              {students}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <motion.button
          className={`w-full mt-6 px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${comingSoon
            ? "bg-gray-800 text-gray-500 cursor-not-allowed"
            : "btn-neon group-hover:shadow-neon-lg"
            }`}
          disabled={comingSoon}
          whileHover={!comingSoon ? { scale: 1.05 } : {}}
          whileTap={!comingSoon ? { scale: 0.95 } : {}}
        >
          {comingSoon ? (
            "Notify Me"
          ) : (
            <>
              Start Learning
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  );

  if (comingSoon || !href) {
    return cardContent;
  }

  return <Link to={href}>{cardContent}</Link>;
};

// Main Start Learning Component
export default function StartLearning() {
  const courses = [
    {
      icon: <Zap />,
      title: "JavaScript Mastery",
      description:
        "Learn modern JavaScript from basics to advanced concepts including ES6+, async programming, and DOM manipulation.",
      difficulty: "Beginner" as const,
      duration: "8 weeks",
      students: "12.5k",
      gradient: "from-neon-blue to-neon-cyan",
      href: "/course/javascript",
    },
    {
      icon: <Globe />,
      title: "React Development",
      description:
        "Build dynamic user interfaces with React, hooks, context, and modern state management patterns.",
      difficulty: "Intermediate" as const,
      duration: "10 weeks",
      students: "8.9k",
      gradient: "from-neon-cyan to-neon-blue",
      comingSoon: true,
    },
    {
      icon: <Database />,
      title: "Node.js Backend",
      description:
        "Create scalable server-side applications with Node.js, Express, and database integration.",
      difficulty: "Intermediate" as const,
      duration: "12 weeks",
      students: "6.2k",
      gradient: "from-neon-green to-neon-cyan",
      comingSoon: true,
    },
    {
      icon: <Smartphone />,
      title: "React Native",
      description:
        "Develop cross-platform mobile applications using React Native and modern mobile UI patterns.",
      difficulty: "Advanced" as const,
      duration: "14 weeks",
      students: "4.1k",
      gradient: "from-neon-purple to-neon-pink",
      comingSoon: true,
    },
    {
      icon: <Cpu />,
      title: "Python Fundamentals",
      description:
        "Master Python programming with data structures, algorithms, and practical applications.",
      difficulty: "Beginner" as const,
      duration: "6 weeks",
      students: "15.3k",
      gradient: "from-neon-pink to-neon-purple",
      comingSoon: true,
    },
    {
      icon: <Palette />,
      title: "UI/UX Design",
      description:
        "Design beautiful and functional user interfaces with modern design principles and tools.",
      difficulty: "Beginner" as const,
      duration: "8 weeks",
      students: "9.7k",
      gradient: "from-neon-blue to-neon-purple",
      comingSoon: true,
    },
    {
      icon: <Shield />,
      title: "Cybersecurity",
      description:
        "Learn ethical hacking, security protocols, and how to protect applications from threats.",
      difficulty: "Advanced" as const,
      duration: "16 weeks",
      students: "3.8k",
      gradient: "from-neon-purple to-neon-blue",
      comingSoon: true,
    },
    {
      icon: <BarChart3 />,
      title: "Data Science",
      description:
        "Analyze data, create visualizations, and build machine learning models with Python and R.",
      difficulty: "Intermediate" as const,
      duration: "20 weeks",
      students: "7.4k",
      gradient: "from-neon-green to-neon-blue",
      comingSoon: true,
    },
  ];

  return (
    <div className="min-h-screen bg-dark text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 section-padding relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-hero-gradient opacity-50">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl animate-float delay-300"></div>
        </div>

        <div className="relative z-10 container-tight text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-display mb-6 text-gradient"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Choose a Skill to Master
            </motion.h1>

            <motion.p
              className="text-subheading text-gray-300 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Start your coding journey with interactive AI-powered courses
              designed by industry experts
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-blue mb-2">
                  50k+
                </div>
                <div className="text-gray-400 text-sm">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-purple mb-2">
                  95%
                </div>
                <div className="text-gray-400 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-pink mb-2">
                  24/7
                </div>
                <div className="text-gray-400 text-sm">AI Support</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-spacing section-padding bg-gradient-to-b from-dark to-dark-lighter">
        <div className="container-wide">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-heading mb-4">Available Courses</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Each course is carefully crafted with hands-on projects, real-time
              AI assistance, and industry-relevant skills
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={course.title} {...course} delay={index * 0.1} />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="card-glow p-8 max-w-2xl mx-auto">
              <Trophy className="w-12 h-12 text-neon-blue mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Can't decide?</h3>
              <p className="text-gray-400 mb-6">
                Take our AI-powered skill assessment to get personalized course
                recommendations
              </p>
              <button className="btn-neon px-8 py-3">Start Assessment</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
