
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Users, Mail, User, Phone, Code, GraduationCap } from 'lucide-react';

interface TeamMember {
  name: string;
  email: string;
  phone: string;
  role: string;
  experience: string;
}

const RegistrationSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [teamName, setTeamName] = useState('');
  const [teamSize, setTeamSize] = useState('');
  const [problemStatement, setProblemStatement] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [members, setMembers] = useState<TeamMember[]>([
    { name: '', email: '', phone: '', role: '', experience: '' }
  ]);

  const roles = [
    "Full-Stack Developer",
    "Frontend Developer", 
    "Backend Developer",
    "AI/ML Engineer",
    "Data Scientist",
    "UI/UX Designer",
    "Product Manager",
    "DevOps Engineer"
  ];

  const experienceLevels = [
    "Beginner (0-1 years)",
    "Intermediate (1-3 years)",
    "Advanced (3-5 years)",
    "Expert (5+ years)"
  ];

  const addMember = () => {
    if (members.length < 4) {
      setMembers([...members, { name: '', email: '', phone: '', role: '', experience: '' }]);
    }
  };

  const removeMember = (index: number) => {
    if (members.length > 1) {
      const newMembers = members.filter((_, i) => i !== index);
      setMembers(newMembers);
    }
  };

  const updateMember = (index: number, field: keyof TeamMember, value: string) => {
    const newMembers = [...members];
    newMembers[index][field] = value;
    setMembers(newMembers);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!teamName || !teamSize || members.some(m => !m.name || !m.email)) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Registration Successful! 🎉",
      description: `Team "${teamName}" has been registered for Manthan AI Hackathon. Check your email for confirmation details.`,
    });

    // Reset form
    setTeamName('');
    setTeamSize('');
    setProblemStatement('');
    setAdditionalInfo('');
    setMembers([{ name: '', email: '', phone: '', role: '', experience: '' }]);
    setIsSubmitting(false);
  };

  return (
    <section id="register" className="py-20 bg-gradient-to-b from-white to-manthan-lavender/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-mono font-bold text-4xl lg:text-5xl text-manthan-deep-violet mb-6">
            Register Your Team
          </h2>
          <p className="font-sans text-lg text-manthan-dark-text max-w-3xl mx-auto">
            Ready to join the AI revolution? Register your team now and secure your spot in Manthan AI Hackathon. 
            Teams can have 2-4 members with diverse skill sets.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-manthan-lavender/30 p-8 shadow-lg">
            {/* Team Information */}
            <div className="mb-8">
              <h3 className="font-mono font-bold text-2xl text-manthan-deep-violet mb-6 flex items-center">
                <Users className="w-6 h-6 mr-3 text-manthan-violet" />
                Team Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="teamName" className="font-sans font-medium text-manthan-dark-text">
                    Team Name *
                  </Label>
                  <Input
                    id="teamName"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    placeholder="Enter your team name"
                    className="mt-2"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="teamSize" className="font-sans font-medium text-manthan-dark-text">
                    Team Size *
                  </Label>
                  <Select value={teamSize} onValueChange={setTeamSize}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select team size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2">2 Members</SelectItem>
                      <SelectItem value="3">3 Members</SelectItem>
                      <SelectItem value="4">4 Members</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-6">
                <Label htmlFor="problemStatement" className="font-sans font-medium text-manthan-dark-text">
                  Preferred Problem Statement
                </Label>
                <Select value={problemStatement} onValueChange={setProblemStatement}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select a problem statement (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="healthcare">AI-Powered Healthcare Diagnostics</SelectItem>
                    <SelectItem value="cybersecurity">Smart Cybersecurity Threat Detection</SelectItem>
                    <SelectItem value="climate">Intelligent Climate Change Predictor</SelectItem>
                    <SelectItem value="education">AI-Enhanced Educational Tutor</SelectItem>
                    <SelectItem value="energy">Smart Energy Optimization System</SelectItem>
                    <SelectItem value="fintech">AI-Driven Financial Fraud Detection</SelectItem>
                    <SelectItem value="undecided">Not decided yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Team Members */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-mono font-bold text-2xl text-manthan-deep-violet flex items-center">
                  <User className="w-6 h-6 mr-3 text-manthan-violet" />
                  Team Members
                </h3>
                {members.length < 4 && (
                  <Button
                    type="button"
                    onClick={addMember}
                    variant="outline"
                    className="font-sans border-manthan-violet text-manthan-violet hover:bg-manthan-violet hover:text-white"
                  >
                    Add Member
                  </Button>
                )}
              </div>

              {members.map((member, index) => (
                <div key={index} className="mb-6 p-6 bg-manthan-lavender/10 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-mono font-semibold text-lg text-manthan-deep-violet">
                      Member {index + 1} {index === 0 && "(Team Lead)"}
                    </h4>
                    {index > 0 && (
                      <Button
                        type="button"
                        onClick={() => removeMember(index)}
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </Button>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label className="font-sans font-medium text-manthan-dark-text">
                        Full Name *
                      </Label>
                      <Input
                        value={member.name}
                        onChange={(e) => updateMember(index, 'name', e.target.value)}
                        placeholder="Enter full name"
                        className="mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label className="font-sans font-medium text-manthan-dark-text">
                        Email *
                      </Label>
                      <Input
                        type="email"
                        value={member.email}
                        onChange={(e) => updateMember(index, 'email', e.target.value)}
                        placeholder="Enter email address"
                        className="mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label className="font-sans font-medium text-manthan-dark-text">
                        Phone Number
                      </Label>
                      <Input
                        type="tel"
                        value={member.phone}
                        onChange={(e) => updateMember(index, 'phone', e.target.value)}
                        placeholder="Enter phone number"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label className="font-sans font-medium text-manthan-dark-text">
                        Role/Expertise
                      </Label>
                      <Select 
                        value={member.role} 
                        onValueChange={(value) => updateMember(index, 'role', value)}
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          {roles.map((role) => (
                            <SelectItem key={role} value={role}>
                              {role}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="md:col-span-2">
                      <Label className="font-sans font-medium text-manthan-dark-text">
                        Experience Level
                      </Label>
                      <Select 
                        value={member.experience} 
                        onValueChange={(value) => updateMember(index, 'experience', value)}
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          {experienceLevels.map((level) => (
                            <SelectItem key={level} value={level}>
                              {level}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Information */}
            <div className="mb-8">
              <Label htmlFor="additionalInfo" className="font-sans font-medium text-manthan-dark-text">
                Additional Information or Special Requirements
              </Label>
              <Textarea
                id="additionalInfo"
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                placeholder="Any dietary restrictions, accessibility needs, or special requests..."
                className="mt-2"
                rows={4}
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-manthan-violet hover:bg-manthan-dark-lavender text-white font-mono font-semibold px-12 py-6 text-lg rounded-xl animate-pulse-glow"
              >
                {isSubmitting ? 'Registering...' : 'Register Team'}
              </Button>
            </div>
          </form>

          {/* Registration Info */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-xl border border-manthan-lavender/30">
              <Mail className="w-8 h-8 text-manthan-violet mx-auto mb-3" />
              <h4 className="font-mono font-semibold text-manthan-deep-violet mb-2">
                Confirmation Email
              </h4>
              <p className="font-sans text-sm text-manthan-dark-text">
                You'll receive a confirmation email with event details within 24 hours.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl border border-manthan-lavender/30">
              <Code className="w-8 h-8 text-manthan-violet mx-auto mb-3" />
              <h4 className="font-mono font-semibold text-manthan-deep-violet mb-2">
                Pre-Event Resources
              </h4>
              <p className="font-sans text-sm text-manthan-dark-text">
                Access to APIs, development tools, and preparation materials.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl border border-manthan-lavender/30">
              <GraduationCap className="w-8 h-8 text-manthan-violet mx-auto mb-3" />
              <h4 className="font-mono font-semibold text-manthan-deep-violet mb-2">
                Mentorship Access
              </h4>
              <p className="font-sans text-sm text-manthan-dark-text">
                Connect with industry mentors and AI experts during the event.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
