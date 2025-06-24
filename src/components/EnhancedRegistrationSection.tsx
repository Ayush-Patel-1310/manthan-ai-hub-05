import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Download, Upload } from 'lucide-react';

interface TeamMember {
  name: string;
  email: string;
  phone: string;
  role: string;
  experience: string;
}

const EnhancedRegistrationSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [teamName, setTeamName] = useState('');
  const [teamSize, setTeamSize] = useState('');
  const [problemStatement, setProblemStatement] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
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

  const handleDownloadTemplate = () => {
    const link = document.createElement('a');
    link.href = 'data:text/plain;charset=utf-8,# Manthan AI Hackathon Proposal Template%0A%0A## Team Information%0ATeam Name: %0ATeam Size: %0A%0A## Problem Statement%0ASelected Challenge: %0A%0A## Solution Overview%0ADescribe your AI solution approach...%0A%0A## Technical Implementation%0AList key technologies and tools...%0A%0A## Expected Impact%0ADescribe the potential impact...';
    link.download = 'manthan-proposal-template.txt';
    link.click();
    
    toast({
      title: "Template Downloaded! 📥",
      description: "Proposal template has been downloaded successfully.",
    });
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      toast({
        title: "File Uploaded! 📄",
        description: `${file.name} has been uploaded successfully.`,
      });
    }
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
    setUploadedFile(null);
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
            Complete your registration for Manthan AI Hackathon. Download the proposal template, fill it out, and upload it along with your team details.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-manthan-lavender/30 p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-manthan-violet/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="w-8 h-8 text-manthan-violet" />
              </div>
              <h3 className="font-mono font-bold text-xl text-manthan-deep-violet mb-4">
                Download Proposal Template
              </h3>
              <p className="font-sans text-manthan-dark-text mb-6">
                Get the official proposal template to structure your AI solution and team information.
              </p>
              <Button
                onClick={handleDownloadTemplate}
                className="bg-manthan-violet hover:bg-manthan-dark-lavender text-white font-mono font-semibold px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Template
              </Button>
            </div>

            <div className="bg-white rounded-2xl border border-manthan-lavender/30 p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-manthan-violet/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Upload className="w-8 h-8 text-manthan-violet" />
              </div>
              <h3 className="font-mono font-bold text-xl text-manthan-deep-violet mb-4">
                Upload Completed Proposal
              </h3>
              <p className="font-sans text-manthan-dark-text mb-6">
                Upload your completed proposal document along with the registration form below.
              </p>
              <div className="relative">
                <input
                  type="file"
                  onChange={handleFileUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  accept=".pdf,.doc,.docx,.txt"
                />
                <Button
                  className="bg-manthan-deep-violet hover:bg-manthan-violet text-white font-mono font-semibold px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300"
                >
                  <Upload className="w-5 h-5 mr-2" />
                  {uploadedFile ? uploadedFile.name : 'Upload Document'}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-manthan-lavender/30 p-8 shadow-lg">
            {/* Team Information */}
            <div className="mb-8">
              <h3 className="font-mono font-bold text-2xl text-manthan-deep-violet mb-6">
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
                <h3 className="font-mono font-bold text-2xl text-manthan-deep-violet">
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
                className="bg-manthan-violet hover:bg-manthan-dark-lavender text-white font-mono font-semibold px-12 py-6 text-lg rounded-xl hover:scale-105 transition-all duration-300"
              >
                {isSubmitting ? 'Registering...' : 'Complete Registration'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnhancedRegistrationSection;
