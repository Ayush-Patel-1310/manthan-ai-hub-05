
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Download, Upload } from 'lucide-react';
import { useRegistration } from '@/hooks/useRegistration';
import { useProblems } from '@/hooks/useProblems';
import { supabase } from '@/integrations/supabase/client';

const EnhancedRegistrationSection = () => {
  const { submitRegistration, isSubmitting } = useRegistration();
  const { problems, loading: problemsLoading, refetchProblems } = useProblems();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [problemStatementId, setProblemStatementId] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  // Listen for problem selection from modal
  useEffect(() => {
    const handleProblemSelection = (event: CustomEvent) => {
      const selectedProblemId = event.detail;
      setProblemStatementId(selectedProblemId);
      if (errors.problemStatement) {
        setErrors(prev => ({ ...prev, problemStatement: '' }));
      }
    };

    window.addEventListener('selectProblem', handleProblemSelection as EventListener);
    return () => {
      window.removeEventListener('selectProblem', handleProblemSelection as EventListener);
    };
  }, [errors.problemStatement]);

  const handleDownloadTemplate = () => {
    const link = document.createElement('a');
    link.href = 'data:text/plain;charset=utf-8,# Manthan AI Hackathon Proposal Template%0A%0A## Team Information%0ATeam Name: %0ATeam Size: %0A%0A## Problem Statement%0ASelected Challenge: %0A%0A## Solution Overview%0ADescribe your AI solution approach...%0A%0A## Technical Implementation%0AList key technologies and tools...%0A%0A## Expected Impact%0ADescribe the potential impact...';
    link.download = 'manthan-proposal-template.txt';
    link.click();
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      if (errors.file) setErrors(prev => ({ ...prev, file: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!problemStatementId) {
      newErrors.problemStatement = 'Please select a problem statement';
    } else {
      // Check if selected problem has available slots
      const selectedProblem = problems.find(p => p.id === problemStatementId);
      if (selectedProblem && selectedProblem.available_slots === 0) {
        newErrors.problemStatement = 'This problem has no available slots';
      }
    }
    
    if (!uploadedFile) {
      newErrors.file = 'Please upload your completed proposal';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const result = await submitRegistration({
      name,
      email,
      problem_statement_id: problemStatementId,
      proposal_file: uploadedFile!
    });

    if (result.success) {
      // Decrease the slot count for the selected problem
      try {
        await supabase
          .from('problems')
          .update({ 
            available_slots: problems.find(p => p.id === problemStatementId)!.available_slots - 1 
          })
          .eq('id', problemStatementId);
        
        // Refresh problems list to show updated slot count
        refetchProblems();
      } catch (error) {
        console.error('Error updating problem slots:', error);
      }
      
      // Reset form
      setName('');
      setEmail('');
      setProblemStatementId('');
      setUploadedFile(null);
      setErrors({});
    }
  };

  return (
    <section id="register" className="py-20 bg-gradient-to-b from-white to-manthan-lavender/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-mono font-bold text-4xl lg:text-5xl text-manthan-deep-violet mb-6">
            Register Your Team
          </h2>
          <p className="font-sans text-lg text-manthan-dark-text max-w-3xl mx-auto">
            Complete your registration for Manthan AI Hackathon. Download the proposal template, fill it out, and upload it along with your details.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* First Section: Download Template */}
          <div className="bg-white rounded-2xl border border-manthan-lavender/30 p-8 shadow-lg">
            <div className="text-center">
              <div className="w-16 h-16 bg-manthan-violet/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="w-8 h-8 text-manthan-violet" />
              </div>
              <h3 className="font-mono font-bold text-2xl text-manthan-deep-violet mb-4">
                Download Proposal Template
              </h3>
              <p className="font-sans text-manthan-dark-text mb-6 max-w-2xl mx-auto">
                Get the official proposal template to structure your AI solution and team information. This template will guide you through all the necessary sections for your submission.
              </p>
              <Button
                onClick={handleDownloadTemplate}
                className="bg-manthan-violet hover:bg-manthan-dark-lavender text-white font-mono font-semibold px-8 py-3 rounded-xl hover:scale-105 transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Template
              </Button>
            </div>
          </div>

          {/* Second Section: Upload Completed Proposal */}
          <div className="bg-white rounded-2xl border border-manthan-lavender/30 p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-manthan-violet/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Upload className="w-8 h-8 text-manthan-violet" />
              </div>
              <h3 className="font-mono font-bold text-2xl text-manthan-deep-violet mb-4">
                Upload Completed Proposal
              </h3>
              <p className="font-sans text-manthan-dark-text mb-8 max-w-2xl mx-auto">
                Fill in your details and upload your completed proposal document to complete your registration.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="font-sans font-medium text-manthan-dark-text">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                    }}
                    placeholder="Enter your full name"
                    className={`mt-2 ${errors.name ? 'border-red-500' : ''}`}
                    required
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="email" className="font-sans font-medium text-manthan-dark-text">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                    }}
                    placeholder="Enter your email address"
                    className={`mt-2 ${errors.email ? 'border-red-500' : ''}`}
                    required
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <Label htmlFor="problemStatement" className="font-sans font-medium text-manthan-dark-text">
                  Problem Statement *
                </Label>
                <Select 
                  value={problemStatementId} 
                  onValueChange={(value) => {
                    setProblemStatementId(value);
                    if (errors.problemStatement) setErrors(prev => ({ ...prev, problemStatement: '' }));
                  }}
                  disabled={problemsLoading}
                >
                  <SelectTrigger className={`mt-2 ${errors.problemStatement ? 'border-red-500' : ''}`}>
                    <SelectValue placeholder={problemsLoading ? "Loading problems..." : "Select a problem statement"} />
                  </SelectTrigger>
                  <SelectContent>
                    {problems.map((problem) => (
                      <SelectItem 
                        key={problem.id} 
                        value={problem.id}
                        disabled={problem.available_slots === 0}
                      >
                        {problem.title} - ₹{problem.prize_money.toLocaleString()} ({problem.difficulty}) 
                        {problem.available_slots === 0 ? ' - No Slots Available' : ` - ${problem.available_slots} slots`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.problemStatement && <p className="text-red-500 text-sm mt-1">{errors.problemStatement}</p>}
              </div>

              <div>
                <Label className="font-sans font-medium text-manthan-dark-text">
                  Upload Completed Proposal *
                </Label>
                <div className="mt-2">
                  <div className="relative">
                    <input
                      type="file"
                      onChange={handleFileUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      accept=".pdf,.doc,.docx,.txt"
                    />
                    <div className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                      errors.file ? 'border-red-500 bg-red-50' : 'border-manthan-lavender/50 hover:border-manthan-violet bg-manthan-lavender/10'
                    }`}>
                      <Upload className="w-8 h-8 text-manthan-violet mx-auto mb-2" />
                      <p className="font-sans text-manthan-dark-text">
                        {uploadedFile ? (
                          <span className="text-green-600 font-medium">{uploadedFile.name}</span>
                        ) : (
                          <>Drop your proposal here or <span className="text-manthan-violet font-medium">click to browse</span></>
                        )}
                      </p>
                      <p className="text-sm text-manthan-dark-text/70 mt-1">
                        Supported formats: PDF, DOC, DOCX, TXT
                      </p>
                    </div>
                  </div>
                  {errors.file && <p className="text-red-500 text-sm mt-1">{errors.file}</p>}
                </div>
              </div>

              <div className="text-center pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-manthan-violet hover:bg-manthan-dark-lavender text-white font-mono font-semibold px-12 py-4 text-lg rounded-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedRegistrationSection;
