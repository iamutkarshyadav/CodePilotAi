import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Code,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Github,
  Chrome,
  ArrowLeft,
  User,
} from "lucide-react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => setIsLoading(false), 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-hero-gradient">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-neon-pink/10 rounded-full blur-3xl animate-float delay-300"></div>
      </div>

      {/* Back to Home */}
      <Link
        to="/"
        className="absolute top-8 left-8 flex items-center gap-2 text-gray-400 hover:text-neon-blue transition-colors z-10"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Home
      </Link>

      {/* Register Form */}
      <motion.div
        className="relative z-10 w-full max-w-md mx-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="card-glow p-8 bg-black/40">
          {/* Logo */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-neon-gradient flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient">
                CodePilot AI
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-2">Join CodePilot</h1>
            <p className="text-gray-400">
              Start your AI-powered coding journey today
            </p>
          </motion.div>

          {/* Social Login */}
          <motion.div
            className="space-y-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="w-full flex items-center justify-center gap-3 p-3 rounded-lg border border-gray-600 hover:border-gray-500 transition-colors group">
              <Github className="w-5 h-5 group-hover:text-neon-blue transition-colors" />
              <span>Continue with GitHub</span>
            </button>
            <button className="w-full flex items-center justify-center gap-3 p-3 rounded-lg border border-gray-600 hover:border-gray-500 transition-colors group">
              <Chrome className="w-5 h-5 group-hover:text-neon-blue transition-colors" />
              <span>Continue with Google</span>
            </button>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="relative my-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-black text-gray-400">
                Or sign up with email
              </span>
            </div>
          </motion.div>

          {/* Register Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {/* Name Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:outline-none focus:border-neon-blue/70 focus:ring-1 focus:ring-neon-blue/20 transition-all"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:outline-none focus:border-neon-blue/70 focus:ring-1 focus:ring-neon-blue/20 transition-all"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  className="w-full pl-10 pr-12 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:outline-none focus:border-neon-blue/70 focus:ring-1 focus:ring-neon-blue/20 transition-all"
                  placeholder="Create a password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    handleInputChange("confirmPassword", e.target.value)
                  }
                  className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:outline-none focus:border-neon-blue/70 focus:ring-1 focus:ring-neon-blue/20 transition-all"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="text-sm">
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 mt-1 rounded border-gray-600 text-neon-blue focus:ring-neon-blue/30"
                  required
                />
                <span className="text-gray-300">
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-neon-blue hover:text-neon-purple transition-colors"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-neon-blue hover:text-neon-purple transition-colors"
                  >
                    Privacy Policy
                  </a>
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              className="w-full btn-neon relative py-3 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Creating account...
                </div>
              ) : (
                "Create Account"
              )}
            </motion.button>

            {/* Sign In Link */}
            <p className="text-center text-gray-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-neon-blue hover:text-neon-purple transition-colors font-medium"
              >
                Sign in
              </Link>
            </p>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
}
