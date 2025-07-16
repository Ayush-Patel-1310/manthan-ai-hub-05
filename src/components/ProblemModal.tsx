import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Problem } from '@/hooks/useProblems';
import { Trophy, Users, MapPin, Star } from 'lucide-react';

interface ProblemModalProps {
  problem: Problem | null;
  open: boolean;
  onClose: () => void;
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'beginner': return 'bg-green-100 text-green-800 border-green-200';
    case 'intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'advanced': return 'bg-red-100 text-red-800 border-red-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export const ProblemModal = ({ problem, open, onClose }: ProblemModalProps) => {
  if (!problem) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-mono font-bold text-manthan-deep-violet">
            {problem.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Quick Info */}
          <div className="flex flex-wrap gap-3">
            <Badge className={`${getDifficultyColor(problem.difficulty)} border`}>
              <Star className="w-3 h-3 mr-1" />
              {problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1)}
            </Badge>
            <Badge variant="outline" className="bg-manthan-lavender/20 text-manthan-deep-violet border-manthan-lavender/30">
              <MapPin className="w-3 h-3 mr-1" />
              {problem.domain}
            </Badge>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              <Trophy className="w-3 h-3 mr-1" />
              ₹{problem.prize_money.toLocaleString()}
            </Badge>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              <Users className="w-3 h-3 mr-1" />
              {problem.available_slots} slots
            </Badge>
          </div>

          {/* Short Description */}
          <div className="bg-manthan-lavender/10 rounded-lg p-4">
            <h3 className="font-mono font-semibold text-manthan-deep-violet mb-2">Summary</h3>
            <p className="font-sans text-manthan-dark-text">{problem.short_description}</p>
          </div>

          {/* Full Description */}
          <div>
            <h3 className="font-mono font-semibold text-manthan-deep-violet mb-3">Problem Statement</h3>
            <p className="font-sans text-manthan-dark-text leading-relaxed whitespace-pre-wrap">
              {problem.description}
            </p>
          </div>

          {/* Prize and Slots Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border border-green-200">
              <div className="flex items-center space-x-2 mb-2">
                <Trophy className="w-5 h-5 text-green-600" />
                <h4 className="font-mono font-semibold text-green-800">Prize Money</h4>
              </div>
              <p className="text-2xl font-bold text-green-700">₹{problem.prize_money.toLocaleString()}</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="w-5 h-5 text-blue-600" />
                <h4 className="font-mono font-semibold text-blue-800">Available Slots</h4>
              </div>
              <p className="text-2xl font-bold text-blue-700">{problem.available_slots} teams</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t">
            <Button 
              size="lg" 
              className="flex-1 bg-gradient-to-r from-manthan-violet to-manthan-deep-violet hover:from-manthan-deep-violet hover:to-manthan-violet"
            >
              Register for This Problem
            </Button>
            <Button variant="outline" size="lg" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};