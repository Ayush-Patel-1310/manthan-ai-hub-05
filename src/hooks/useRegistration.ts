
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface RegistrationData {
  name: string;
  email: string;
  problem_statement_id: string;
  proposal_file: File;
}

export const useRegistration = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitRegistration = async (data: RegistrationData) => {
    setIsSubmitting(true);
    
    try {
      // Generate filename using email and original file extension
      const fileExtension = data.proposal_file.name.split('.').pop();
      const fileName = `${data.email}.${fileExtension}`;
      
      // Upload file to storage
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('proposals')
        .upload(fileName, data.proposal_file);

      if (uploadError) {
        throw new Error(`File upload failed: ${uploadError.message}`);
      }

      // Get public URL for the uploaded file
      const { data: { publicUrl } } = supabase.storage
        .from('proposals')
        .getPublicUrl(fileName);

      // Insert data into User_Submissions table
      const { error: insertError } = await supabase
        .from('User_Submissions')
        .insert({
          name: data.name,
          email: data.email,
          problem_statement_id: data.problem_statement_id,
          proposal: publicUrl
        });

      if (insertError) {
        throw new Error(`Database insert failed: ${insertError.message}`);
      }

      // Send thank you email
      try {
        await supabase.functions.invoke('send-thank-you-email', {
          body: { 
            name: data.name,
            email: data.email 
          }
        });
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Don't fail the registration if email fails
      }

      toast({
        title: "Registration Successful! 🎉",
        description: "Your registration has been submitted successfully. Check your email for confirmation details.",
      });

      return { success: true };
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Registration Failed",
        description: error instanceof Error ? error.message : "An unexpected error occurred.",
        variant: "destructive",
      });
      return { success: false, error };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitRegistration,
    isSubmitting
  };
};
