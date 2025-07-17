import { useState } from "react";
import {
  Brain,
  Heart,
  Shield,
  Zap,
  Globe,
  TrendingUp,
  ChevronDown,
  ChevronRight,
  IndianRupee,
  Eye,
  Users,
  MapPin,
  Trophy,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useProblems, Problem } from "@/hooks/useProblems";
import { ProblemModal } from "./ProblemModal";

const AIChallengesSection = () => {
  const { toast } = useToast();
  const { problems, loading, error } = useProblems();
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (problem: Problem) => {
    setSelectedProblem(problem);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProblem(null);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800 border-green-200";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "advanced":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  if (loading) {
    return (
      <section
        id="ai-challenges"
        className="py-20 bg-gradient-to-b from-white via-manthan-lavender/5 to-white"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="text-lg text-manthan-dark-text">
            Loading problems...
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        id="ai-challenges"
        className="py-20 bg-gradient-to-b from-white via-manthan-lavender/5 to-white"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="text-lg text-red-600">
            Error loading problems: {error}
          </div>
        </div>
      </section>
    );
  }

  const handleProposeAISolution = () => {
    toast({
      title: "Submit Your AI Solution Proposal",
      description:
        "Please prepare your innovative AI solution proposal and contact our team at proposals@aimanthan.com with your detailed concept.",
    });
  };

  return (
    <section
      id="ai-challenges"
      className="py-20 bg-gradient-to-b from-white via-manthan-lavender/5 to-white"
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2
              className="font-mono font-bold text-5xl lg:text-6xl text-transparent bg-gradient-to-r from-manthan-violet via-manthan-deep-violet to-manthan-violet bg-clip-text mb-6"
              style={{ height: "70px" }}
            >
              AI Challenges Track
            </h2>
            <div className="absolute -inset-4 bg-gradient-to-r from-manthan-violet/10 to-manthan-lavender/10 rounded-2xl -z-10 blur-sm"></div>
          </div>
          <p className="font-sans text-xl text-manthan-dark-text max-w-4xl mx-auto leading-relaxed">
            Choose from these carefully curated AI challenges that address
            real-world problems and make a meaningful impact.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {problems.map((problem, index) => (
            <div
              key={problem.id}
              className="bg-white rounded-2xl border border-manthan-lavender/30 overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in cursor-pointer h-80"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleViewDetails(problem)}
            >
              <div className="p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-manthan-violet/20 to-manthan-lavender/20 rounded-xl flex items-center justify-center">
                    <Brain className="w-5 h-5 text-manthan-violet" />
                  </div>
                  <div className="flex items-center text-lg font-mono font-bold text-green-600">
                    <Trophy className="w-4 h-4 mr-1" />₹
                    {problem.prize_money.toLocaleString()}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-mono font-bold text-lg text-manthan-deep-violet mb-3 line-clamp-2">
                  {problem.title}
                </h3>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="font-sans text-xs font-medium text-manthan-dark-text bg-manthan-lavender/30 px-2 py-1 rounded-full">
                    <MapPin className="w-3 h-3 inline mr-1" />
                    {problem.domain}
                  </span>
                  <span
                    className={`font-sans text-xs font-medium px-2 py-1 rounded-full border ${getDifficultyColor(
                      problem.difficulty
                    )}`}
                  >
                    <Star className="w-3 h-3 inline mr-1" />
                    {problem.difficulty.charAt(0).toUpperCase() +
                      problem.difficulty.slice(1)}
                  </span>
                </div>

                {/* Short Description */}
                <p className="font-sans text-manthan-dark-text text-sm leading-relaxed flex-grow line-clamp-3 mb-4">
                  {problem.short_description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-manthan-lavender/20">
                  <div className="flex items-center text-sm text-manthan-dark-text">
                    <Users className="w-4 h-4 mr-1" />
                    {problem.available_slots} slots
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-manthan-violet border-manthan-violet hover:bg-manthan-violet hover:text-white"
                  >
                    <Eye className="w-3 h-3 mr-1" />
                    View More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Problem Modal */}
        <ProblemModal
          problem={selectedProblem}
          open={isModalOpen}
          onClose={closeModal}
        />

        {/* Custom Challenge Section */}
        {/* <div className="text-center">
          <div className="bg-gradient-to-r from-manthan-lavender/20 via-white to-manthan-violet/20 rounded-3xl p-12 border-2 border-manthan-lavender/30">
            <h3 className="font-mono font-bold text-3xl text-manthan-deep-violet mb-6">
              Custom AI Challenge
            </h3>
            <p className="font-sans text-lg text-manthan-dark-text max-w-2xl mx-auto mb-8">
              Have a groundbreaking AI idea that doesn't fit these categories? We welcome innovative solutions that push the boundaries of artificial intelligence.
            </p>
            
            <Button 
              onClick={handleProposeAISolution}
              className="bg-gradient-to-r from-manthan-violet to-manthan-deep-violet hover:from-manthan-deep-violet hover:to-manthan-violet text-white font-mono font-bold px-10 py-6 text-lg rounded-2xl shadow-xl border-2 border-white/20 hover:scale-105 transition-all duration-300"
            >
              Propose Your AI Solution
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AIChallengesSection;
