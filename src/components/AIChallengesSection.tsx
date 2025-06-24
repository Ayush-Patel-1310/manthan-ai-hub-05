
import { useState } from 'react';
import { Brain, Heart, Shield, Zap, Globe, TrendingUp, ChevronDown, ChevronRight, IndianRupee } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AIChallengesSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const challenges = [
    {
      id: 1,
      title: "Healthcare AI",
      category: "Healthcare",
      difficulty: "Advanced",
      price: "₹2L",
      icon: Heart,
      description: "Develop AI solutions for early disease detection, personalized treatment plans, or mental health support systems.",
      detailedDescription: "Create innovative AI-powered healthcare solutions that can revolutionize patient care. Focus on developing systems for early disease detection using medical imaging, personalized treatment recommendations based on patient data, or AI chatbots for mental health support. Your solution should demonstrate accuracy, reliability, and real-world applicability in healthcare settings.",
      requirements: [
        "Medical image processing and computer vision capabilities",
        "Machine learning model for health data analysis",
        "User-friendly interface for healthcare professionals",
        "Accuracy metrics and validation against known cases",
        "Privacy-compliant data handling (HIPAA considerations)"
      ],
      tools: ["TensorFlow/PyTorch", "OpenCV", "Medical APIs", "Python/R", "Cloud ML Services"],
      technologies: ["Deep Learning", "Computer Vision", "NLP", "Data Analytics"]
    },
    {
      id: 2,
      title: "Environmental Intelligence",
      category: "Environment",
      difficulty: "Intermediate",
      price: "₹1.5L",
      icon: Globe,
      description: "Create AI models for climate change prediction, waste management optimization, or sustainable resource allocation.",
      detailedDescription: "Build AI solutions that address environmental challenges and promote sustainability. Develop predictive models for climate patterns, optimize waste management systems using IoT and AI, or create intelligent resource allocation systems for sustainable development. Your solution should provide actionable insights for environmental conservation.",
      requirements: [
        "Time series analysis and forecasting capabilities",
        "Integration with environmental data sources",
        "Geospatial analysis and visualization",
        "Real-time data processing",
        "Impact measurement and reporting"
      ],
      tools: ["Satellite Imagery APIs", "Weather APIs", "GIS Tools", "Time Series Libraries", "IoT Platforms"],
      technologies: ["Time Series Analysis", "Satellite Imagery", "IoT", "Predictive Analytics"]
    },
    {
      id: 3,
      title: "Social Impact AI",
      category: "Social Good",
      difficulty: "Beginner",
      price: "₹1L",
      icon: Brain,
      description: "Build AI tools for education accessibility, disaster response, or bridging digital divides in underserved communities.",
      detailedDescription: "Develop AI applications that create positive social impact and address inequality. Create educational tools that adapt to different learning abilities, build disaster response systems that can predict and coordinate relief efforts, or develop solutions that bridge the digital divide by making technology more accessible to underserved communities.",
      requirements: [
        "Accessibility-focused design principles",
        "Multi-language support capabilities",
        "Offline functionality for low-connectivity areas",
        "Community feedback integration",
        "Scalable and cost-effective deployment"
      ],
      tools: ["Recommendation Systems", "Chatbot Frameworks", "Mobile Development", "Cloud Services", "Translation APIs"],
      technologies: ["Recommendation Systems", "Chatbots", "Mobile AI", "NLP"]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id="ai-challenges" className="py-20 bg-gradient-to-b from-white via-manthan-lavender/5 to-white">
      <div className="container mx-auto px-4">
        {/* Custom Section Title */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="font-mono font-bold text-5xl lg:text-6xl text-transparent bg-gradient-to-r from-manthan-violet via-manthan-deep-violet to-manthan-violet bg-clip-text mb-6">
              AI Challenges
            </h2>
            <div className="absolute -inset-4 bg-gradient-to-r from-manthan-violet/10 to-manthan-lavender/10 rounded-2xl -z-10 blur-sm"></div>
          </div>
          <p className="font-sans text-xl text-manthan-dark-text max-w-4xl mx-auto leading-relaxed">
            Choose from these carefully curated AI challenges that address real-world problems and make a meaningful impact. Each challenge offers exciting prizes and learning opportunities.
          </p>
        </div>

        {/* Challenge Cards */}
        <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {challenges.map((challenge, index) => (
            <div 
              key={challenge.id}
              className="bg-white rounded-3xl border-2 border-manthan-lavender/30 overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fade-in group hover:scale-105"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Card Header */}
              <div className="p-8 cursor-pointer" onClick={() => toggleCard(challenge.id)}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-manthan-violet/20 to-manthan-lavender/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <challenge.icon className="w-8 h-8 text-manthan-violet" />
                    </div>
                    <div>
                      <h3 className="font-mono font-bold text-2xl text-manthan-deep-violet mb-2">
                        {challenge.title}
                      </h3>
                      <div className="flex items-center space-x-3">
                        <span className="font-sans text-sm font-medium text-manthan-dark-text bg-manthan-lavender/30 px-4 py-2 rounded-full">
                          {challenge.category}
                        </span>
                        <span className={`font-sans text-xs font-medium px-3 py-1 rounded-full border ${getDifficultyColor(challenge.difficulty)}`}>
                          {challenge.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Price and Expand Button */}
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="flex items-center justify-end text-2xl font-mono font-bold text-manthan-violet mb-1">
                        <IndianRupee className="w-6 h-6 mr-1" />
                        {challenge.price.replace('₹', '')}
                      </div>
                      <p className="text-sm text-manthan-dark-text/70">Prize Pool</p>
                    </div>
                    <div className="w-10 h-10 bg-manthan-violet/10 rounded-full flex items-center justify-center">
                      {expandedCard === challenge.id ? 
                        <ChevronDown className="w-5 h-5 text-manthan-violet" /> : 
                        <ChevronRight className="w-5 h-5 text-manthan-violet" />
                      }
                    </div>
                  </div>
                </div>
                
                <p className="font-sans text-manthan-dark-text mt-4 text-lg leading-relaxed">
                  {challenge.description}
                </p>
              </div>

              {/* Expandable Content */}
              {expandedCard === challenge.id && (
                <div className="px-8 pb-8 border-t border-manthan-lavender/20 bg-gradient-to-b from-manthan-lavender/5 to-white animate-fade-in">
                  <div className="pt-6 space-y-6">
                    {/* Detailed Description */}
                    <div>
                      <h4 className="font-mono font-bold text-xl text-manthan-deep-violet mb-3">
                        Challenge Overview
                      </h4>
                      <p className="font-sans text-manthan-dark-text leading-relaxed">
                        {challenge.detailedDescription}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Requirements */}
                      <div>
                        <h4 className="font-mono font-bold text-lg text-manthan-deep-violet mb-4">
                          Key Requirements
                        </h4>
                        <ul className="space-y-2">
                          {challenge.requirements.map((req, idx) => (
                            <li key={idx} className="font-sans text-sm text-manthan-dark-text flex items-start">
                              <span className="text-manthan-violet mr-3 mt-1 font-bold">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tools & Technologies */}
                      <div>
                        <h4 className="font-mono font-bold text-lg text-manthan-deep-violet mb-4">
                          Recommended Tools
                        </h4>
                        <div className="space-y-3">
                          <div>
                            <p className="font-sans text-sm font-semibold text-manthan-dark-text mb-2">Tools:</p>
                            <div className="flex flex-wrap gap-2">
                              {challenge.tools.map((tool, idx) => (
                                <span 
                                  key={idx}
                                  className="font-sans text-xs bg-manthan-violet/10 text-manthan-deep-violet px-3 py-1 rounded-full border border-manthan-violet/20"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="font-sans text-sm font-semibold text-manthan-dark-text mb-2">Technologies:</p>
                            <div className="flex flex-wrap gap-2">
                              {challenge.technologies.map((tech, idx) => (
                                <span 
                                  key={idx}
                                  className="font-sans text-xs bg-manthan-lavender/20 text-manthan-deep-violet px-3 py-1 rounded-full border border-manthan-lavender/30"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Custom Challenge Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-manthan-lavender/20 via-white to-manthan-violet/20 rounded-3xl p-12 border-2 border-manthan-lavender/30">
            <h3 className="font-mono font-bold text-3xl text-manthan-deep-violet mb-6">
              Custom AI Challenge
            </h3>
            <p className="font-sans text-lg text-manthan-dark-text max-w-2xl mx-auto mb-8">
              Have a groundbreaking AI idea that doesn't fit these categories? We welcome innovative solutions that push the boundaries of artificial intelligence.
            </p>
            
            {/* Custom Button Design */}
            <Button className="bg-gradient-to-r from-manthan-violet to-manthan-deep-violet hover:from-manthan-deep-violet hover:to-manthan-violet text-white font-mono font-bold px-10 py-6 text-lg rounded-2xl shadow-xl border-2 border-white/20 hover:scale-105 transition-all duration-300">
              Propose Your AI Solution
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChallengesSection;
