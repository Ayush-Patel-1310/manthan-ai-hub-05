
import { Brain, Heart, Shield, Zap, Globe, TrendingUp } from 'lucide-react';

const ProblemsSection = () => {
  const problems = [
    {
      id: 1,
      title: "AI-Powered Healthcare Diagnostics",
      category: "Healthcare",
      difficulty: "Advanced",
      icon: Heart,
      description: "Develop an AI system that can analyze medical images (X-rays, MRIs, CT scans) to assist doctors in early detection of diseases. The solution should provide confidence scores and highlight areas of concern.",
      requirements: [
        "Image processing and computer vision capabilities",
        "Machine learning model for medical image analysis",
        "User-friendly interface for healthcare professionals",
        "Accuracy metrics and validation against known cases"
      ],
      technologies: ["Python", "TensorFlow/PyTorch", "OpenCV", "Medical imaging APIs"],
      impact: "Potentially save lives through early disease detection"
    },
    {
      id: 2,
      title: "Smart Cybersecurity Threat Detection",
      category: "Cybersecurity",
      difficulty: "Expert",
      icon: Shield,
      description: "Create an AI-driven cybersecurity system that can detect and predict potential security threats in real-time by analyzing network traffic patterns, user behavior, and system logs.",
      requirements: [
        "Real-time data processing capabilities",
        "Anomaly detection algorithms",
        "Threat classification and severity assessment",
        "Automated alert and response system"
      ],
      technologies: ["Python", "Machine Learning", "Network Security APIs", "Real-time analytics"],
      impact: "Protect organizations from cyber attacks and data breaches"
    },
    {
      id: 3,
      title: "Intelligent Climate Change Predictor",
      category: "Environmental",
      difficulty: "Advanced",
      icon: Globe,
      description: "Build an AI model that analyzes environmental data to predict climate patterns and their impact on specific regions. Include recommendations for mitigation strategies.",
      requirements: [
        "Time series analysis and forecasting",
        "Multiple data source integration",
        "Visualization of climate projections",
        "Actionable insights and recommendations"
      ],
      technologies: ["Python", "Data Science libraries", "Weather APIs", "Geospatial analysis"],
      impact: "Help communities prepare for and adapt to climate change"
    },
    {
      id: 4,
      title: "AI-Enhanced Educational Tutor",
      category: "Education",
      difficulty: "Intermediate",
      icon: Brain,
      description: "Develop a personalized AI tutoring system that adapts to individual learning styles, identifies knowledge gaps, and provides customized learning paths for students.",
      requirements: [
        "Natural language processing for Q&A",
        "Learning progress tracking and analytics",
        "Adaptive content recommendation",
        "Multi-subject support capability"
      ],
      technologies: ["NLP libraries", "Recommendation systems", "Educational APIs", "Web development"],
      impact: "Democratize quality education and improve learning outcomes"
    },
    {
      id: 5,
      title: "Smart Energy Optimization System",
      category: "Sustainability",
      difficulty: "Advanced",
      icon: Zap,
      description: "Create an AI system that optimizes energy consumption in smart buildings by learning usage patterns, predicting demand, and automatically adjusting systems for maximum efficiency.",
      requirements: [
        "IoT sensor data integration",
        "Predictive analytics for energy demand",
        "Automated control system interface",
        "Cost and environmental impact calculations"
      ],
      technologies: ["IoT platforms", "Time series forecasting", "Building automation APIs", "Data analytics"],
      impact: "Reduce energy waste and carbon footprint significantly"
    },
    {
      id: 6,
      title: "AI-Driven Financial Fraud Detection",
      category: "Fintech",
      difficulty: "Expert",
      icon: TrendingUp,
      description: "Build a sophisticated AI system that can detect fraudulent financial transactions in real-time by analyzing transaction patterns, user behavior, and risk factors.",
      requirements: [
        "Real-time transaction monitoring",
        "Pattern recognition and anomaly detection",
        "Risk scoring and classification",
        "Compliance with financial regulations"
      ],
      technologies: ["Machine Learning", "Real-time processing", "Financial APIs", "Security frameworks"],
      impact: "Protect consumers and financial institutions from fraud"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Intermediate': return 'bg-green-100 text-green-800 border-green-200';
      case 'Advanced': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Expert': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="problems" className="py-20 bg-gradient-to-b from-manthan-lavender/10 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-mono font-bold text-4xl lg:text-5xl text-manthan-deep-violet mb-6">
            Problem Statements
          </h2>
          <p className="font-sans text-lg text-manthan-dark-text max-w-3xl mx-auto">
            Choose from these carefully curated AI challenges that address real-world problems. 
            Each problem is designed to test different aspects of AI development and application.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={problem.id}
              className="bg-white rounded-2xl border border-manthan-lavender/30 p-8 hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-manthan-violet/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <problem.icon className="w-6 h-6 text-manthan-violet" />
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-xl text-manthan-deep-violet mb-2">
                      {problem.title}
                    </h3>
                    <div className="flex items-center space-x-3">
                      <span className="font-sans text-sm font-medium text-manthan-dark-text bg-manthan-lavender/30 px-3 py-1 rounded-full">
                        {problem.category}
                      </span>
                      <span className={`font-sans text-xs font-medium px-2 py-1 rounded-full border ${getDifficultyColor(problem.difficulty)}`}>
                        {problem.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-2xl font-mono font-bold text-manthan-violet">
                  #{problem.id}
                </div>
              </div>

              {/* Description */}
              <p className="font-sans text-manthan-dark-text mb-6 leading-relaxed">
                {problem.description}
              </p>

              {/* Requirements */}
              <div className="mb-6">
                <h4 className="font-mono font-semibold text-manthan-deep-violet mb-3">
                  Key Requirements:
                </h4>
                <ul className="space-y-2">
                  {problem.requirements.map((req, idx) => (
                    <li key={idx} className="font-sans text-sm text-manthan-dark-text flex items-start">
                      <span className="text-manthan-violet mr-2 mt-1">•</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-mono font-semibold text-manthan-deep-violet mb-3">
                  Suggested Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {problem.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="font-sans text-xs bg-manthan-violet/10 text-manthan-deep-violet px-2 py-1 rounded-md border border-manthan-violet/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div className="bg-manthan-lavender/20 rounded-lg p-4">
                <h4 className="font-mono font-semibold text-manthan-deep-violet mb-2">
                  Potential Impact:
                </h4>
                <p className="font-sans text-sm text-manthan-dark-text italic">
                  {problem.impact}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-manthan-violet to-manthan-deep-violet rounded-2xl p-8 text-white text-center">
          <h3 className="font-mono font-bold text-2xl mb-4">
            Ready to Tackle These Challenges?
          </h3>
          <p className="font-sans text-lg opacity-90 max-w-2xl mx-auto mb-6">
            Remember, these are starting points. Feel free to add your own creative twist, 
            combine multiple problems, or focus on a specific aspect that interests your team most.
          </p>
          <div className="font-sans text-sm opacity-75">
            <p>• Teams can choose any problem statement</p>
            <p>• Solutions will be judged on innovation, technical implementation, and real-world impact</p>
            <p>• Mentors are available to help guide your approach</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
