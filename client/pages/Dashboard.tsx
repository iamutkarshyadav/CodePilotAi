import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Code,
  ArrowLeft,
  Trophy,
  Zap,
  Target,
  BookOpen,
  Users,
  BarChart3,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/50 backdrop-blur-xl">
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

            <Link
              to="/"
              className="flex items-center gap-2 text-gray-400 hover:text-neon-blue transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Landing
            </Link>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="section-padding section-spacing">
        <div className="container-wide">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-display mb-4 text-gradient">
              Dashboard Coming Soon
            </h1>
            <p className="text-subheading text-gray-300 max-w-2xl mx-auto">
              Your personalized learning dashboard will feature AI-powered
              progress tracking, project management, and coding challenges.
            </p>
          </motion.div>

          {/* Dashboard Features Preview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="card-glow p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-neon-blue to-neon-cyan mb-6">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">XP & Achievements</h3>
              <p className="text-gray-400">
                Track your coding progress with gamified XP system and
                achievement badges.
              </p>
            </motion.div>

            <motion.div
              className="card-glow p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-neon-purple to-neon-pink mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Learning Path</h3>
              <p className="text-gray-400">
                Personalized learning curriculum adapted to your goals and skill
                level.
              </p>
            </motion.div>

            <motion.div
              className="card-glow p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-neon-pink to-neon-blue mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Companion</h3>
              <p className="text-gray-400">
                24/7 AI mentor for instant help with coding problems and
                explanations.
              </p>
            </motion.div>

            <motion.div
              className="card-glow p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-neon-green to-neon-cyan mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Projects</h3>
              <p className="text-gray-400">
                Build real-world projects with step-by-step AI guidance and
                feedback.
              </p>
            </motion.div>

            <motion.div
              className="card-glow p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-neon-cyan to-neon-purple mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-400">
                Connect with fellow learners, share projects, and get peer
                feedback.
              </p>
            </motion.div>

            <motion.div
              className="card-glow p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-neon-blue to-neon-pink mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Analytics</h3>
              <p className="text-gray-400">
                Detailed insights into your learning patterns and coding
                performance.
              </p>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button className="btn-neon px-8 py-4 text-lg">
              Coming Soon - Get Notified
            </button>
            <p className="text-gray-400 mt-4">
              Dashboard will be available in the next update
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
