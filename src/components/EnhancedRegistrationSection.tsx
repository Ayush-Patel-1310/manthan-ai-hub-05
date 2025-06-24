
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Users, Mail, User, Phone, Code, GraduationCap, Download, Edit, Upload, CheckCircle } from 'lucide-react';

interface TeamMember {
  name: string;
  email: string;
  phone: string;
  role: string;
  experience: string;
}

const EnhancedRegistrationSection = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [teamName, setTeamName] = useState('');
  const [teamSize, setTeamSize] = useState('');
  const [problemStatement, setProblemStatement] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [members, setMembers] = useState<TeamMember[]>([
    { name: '', email: '', phone: '', role: '', experience: '' }
  ]);
  
  // Step tracking
  const [stepsCompleted, setStepsCompleted] = useState({
    download: false,
    edit: false,
    submit: false
  });

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

  const steps = [
    {
      id: 1,
      title: "Download Proposal Template",
      description: "Get the official proposal template to structure your AI solution",
      icon: Download,
      action: "Download Template"
    },
    {
      id: 2,
      title: "Edit Proposal Template", 
      description: "Fill in your team details and AI solution concept",
      icon: Edit,
      action: "Mark as Edited"
    },
    {
      id: 3,
      title: "Submit Proposal",
      description: "Complete your registration and upload your proposal",
      icon: Upload,
      action: "Submit Registration"
    }
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

  const handleStepAction = async (stepId: number) => {
    switch (stepId) {
      case 1:
        // Simulate template download
        const link = document.createElement('a');
        link.href = 'data:text/plain;charset=utf-8,# Manthan AI Hackathon Proposal Template%0A%0A## Team Information%0ATeam Name: %0ATeam Size: %0A%0A## Problem Statement%0ASelected Challenge: %0A%0A## Solution Overview%0ADescribe your AI solution approach...%0A%0A## Technical Implementation%0AList key technologies and tools...%0A%0A## Expected Impact%0ADescribe the potential impact...';
        link.download = 'manthan-proposal-template.txt';
        link.click();
        
        setStepsCompleted(prev => ({ ...prev, download: true }));
        setCurrentStep(2);
        
        toast({
          title: "Template Downloaded! 📥",
          description: "Proposal template has been downloaded successfully.",
        });
        break;
        
      case 2:
        setStepsCompleted(prev => ({ ...prev, edit: true }));
        setCurrentStep(3);
        
        toast({
          title: "Great Progress! ✏️",
          description: "Mark as completed when you've finished editing your proposal.",
        });
        break;
        
      case 3:
        await handleSubmit();
        break;
    }
  };

  const handleSubmit = async () => {
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

    setStepsCompleted(prev => ({ ...prev, submit: true }));

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
    setCurrentStep(1);
    setStepsCompleted({ download: false, edit: false, submit: false });
    setIsSubmitting(false);
  };

  const StepIcon = steps[currentStep - 1].icon;

  return (
    <section id="register" className="py-20 bg-gradient-to-b from-white to-manthan-lavender/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-mono font-bold text-4xl lg:text-5xl text-manthan-deep-violet mb-6">
            Register Your Team
          </h2>
          <p className="font-sans text-lg text-manthan-dark-text max-w-3xl mx-auto">
            Follow our streamlined 3-step registration process to secure your spot in Manthan AI Hackathon.
          </p>
        </div>

        {/* Step Progress Indicator */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between mb-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                  stepsCompleted[step.id === 1 ? 'download' : step.id === 2 ? 'edit' : 'submit'] 
                    ? 'bg-green-500 border-green-500 text-white' 
                    : currentStep === step.id 
                    ? 'bg-manthan-violet border-manthan-violet text-white'
                    : 'bg-white border-gray-300 text-gray-400'
                }`}>
                  {stepsCompleted[step.id === 1 ? 'download' : step.id === 2 ? 'edit' : 'submit'] ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    <step.icon className="w-6 h-6" />
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-1 mx-4 transition-all duration-300 ${
                    stepsCompleted[step.id === 1 ? 'download' : 'edit'] ? 'bg-green-500' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>

          {/* Current Step Info */}
          <div className="text-center">
            <h3 className="font-mono font-bold text-2xl text-manthan-deep-violet mb-2">
              Step {currentStep}: {steps[currentStep - 1].title}
            </h3>
            <p className="font-sans text-manthan-dark-text mb-6">
              {steps[currentStep - 1].description}
            </p>
          </div>
        </div>

        {/* Step Content */}
        <div className="max-w-4xl mx-auto">
          {currentStep <= 2 ? (
            /* Steps 1 & 2: Download and Edit */
            <div className="bg-white rounded-2xl border border-manthan-lavender/30 p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-manthan-violet/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <StepIcon className="w-10 h-10 text-manthan-violet" />
              </div>
              
              <h3 className="font-mono font-bold text-2xl text-manthan-deep-violet mb-4">
                {steps[currentStep - 1].title}
              </h3>
              
              <p className="font-sans text-lg text-manthan-dark-text mb-8 max-w-2xl mx-auto">
                {currentStep === 1 
                  ? "Download our comprehensive proposal template that will guide you through structuring your AI solution concept and team information."
                  : "Take your time to thoughtfully complete the proposal template with your team's information and innovative AI solution details."
                }
              </p>

              <Button
                onClick={() => handleStepAction(currentStep)}
                className="bg-manthan-violet hover:bg-manthan-dark-lavender text-white font-mono font-semibold px-8 py-4 text-lg rounded-xl hover:scale-105 transition-all duration-300"
              >
                <StepIcon className="w-5 h-5 mr-2" />
                {steps[currentStep - 1].action}
              </Button>

              {currentStep === 1 && (
                <div className="mt-8 p-4 bg-manthan-lavender/20 rounded-lg">
                  <p className="font-sans text-sm text-manthan-dark-text">
                    💡 <strong>Tip:</strong> The template includes sections for team information, problem selection, solution approach, and technical implementation details.
                  </p>
                </div>
              )}
            </div>
          ) : (
            /* Step 3: Full Registration Form */
            <form onSubmit={(e) => { e.preventDefault(); handleStepAction(3); }} className="bg-white rounded-2xl border border-manthan-lavender/30 p-8 shadow-lg">
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
                    Preferred AI Challenge
                  </Label>
                  <Select value={problemStatement} onValueChange={setProblemStatement}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select an AI challenge" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="healthcare">Healthcare AI</SelectItem>
                      <SelectItem value="environment">Environmental Intelligence</SelectItem>
                      <SelectItem value="social">Social Impact AI</SelectItem>
                      <SelectItem value="custom">Custom AI Challenge</SelectItem>
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
                  Additional Information & Proposal Upload
                </Label>
                <Textarea
                  id="additionalInfo"
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                  placeholder="Please paste your completed proposal content here, or mention any special requirements..."
                  className="mt-2"
                  rows={6}
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-manthan-violet hover:bg-manthan-dark-lavender text-white font-mono font-semibold px-12 py-6 text-lg rounded-xl animate-pulse-glow"
                >
                  {isSubmitting ? 'Submitting...' : 'Complete Registration'}
                </Button>
              </div>
            </form>
          )}
        </div>

        {/* Registration Benefits */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-xl border border-manthan-lavender/30">
            <Mail className="w-8 h-8 text-manthan-violet mx-auto mb-3" />
            <h4 className="font-mono font-semibold text-manthan-deep-violet mb-2">
              Instant Confirmation
            </h4>
            <p className="font-sans text-sm text-manthan-dark-text">
              Receive confirmation and event details immediately after registration.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl border border-manthan-lavender/30">
            <Code className="w-8 h-8 text-manthan-violet mx-auto mb-3" />
            <h4 className="font-mono font-semibold text-manthan-deep-violet mb-2">
              Pre-Event Resources
            </h4>
            <p className="font-sans text-sm text-manthan-dark-text">
              Access APIs, development tools, and preparation materials.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl border border-manthan-lavender/30">
            <GraduationCap className="w-8 h-8 text-manthan-violet mx-auto mb-3" />
            <h4 className="font-mono font-semibold text-manthan-deep-violet mb-2">
              Mentorship Access
            </h4>
            <p className="font-sans text-sm text-manthan-dark-text">
              Connect with industry experts and AI specialists during the event.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedRegistrationSection;
