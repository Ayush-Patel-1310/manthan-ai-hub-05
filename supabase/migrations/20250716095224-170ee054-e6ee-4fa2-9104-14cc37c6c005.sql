-- Create problems table
CREATE TABLE public.problems (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  short_description TEXT NOT NULL,
  description TEXT NOT NULL,
  prize_money INTEGER NOT NULL,
  available_slots INTEGER NOT NULL,
  domain TEXT NOT NULL,
  difficulty TEXT NOT NULL CHECK (difficulty IN ('advanced', 'intermediate', 'beginner')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.problems ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Anyone can view problems" 
ON public.problems 
FOR SELECT 
USING (true);

-- Create policy for authenticated users to insert problems
CREATE POLICY "Authenticated users can insert problems" 
ON public.problems 
FOR INSERT 
WITH CHECK (auth.role() = 'authenticated');

-- Create policy for authenticated users to update problems
CREATE POLICY "Authenticated users can update problems" 
ON public.problems 
FOR UPDATE 
USING (auth.role() = 'authenticated');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_problems_updated_at
BEFORE UPDATE ON public.problems
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample data
INSERT INTO public.problems (title, short_description, description, prize_money, available_slots, domain, difficulty) VALUES
('AI-Powered Healthcare Diagnostics', 'Develop an AI system for medical image analysis', 'Create an AI system that can analyze medical images (X-rays, MRIs, CT scans) to assist doctors in early detection of diseases. The solution should provide confidence scores and highlight areas of concern with high accuracy and reliability.', 50000, 10, 'Healthcare', 'advanced'),
('Smart Cybersecurity Threat Detection', 'Create an AI-driven cybersecurity system', 'Build an AI-driven cybersecurity system that can detect and predict potential security threats in real-time by analyzing network traffic patterns, user behavior, and system logs. Include automated response mechanisms.', 75000, 8, 'Cybersecurity', 'advanced'),
('Intelligent Climate Predictor', 'Build AI model for climate analysis', 'Develop an AI model that analyzes environmental data to predict climate patterns and their impact on specific regions. Include recommendations for mitigation strategies and actionable insights for communities.', 40000, 12, 'Environmental', 'intermediate'),
('AI-Enhanced Educational Tutor', 'Personalized AI tutoring system', 'Create a personalized AI tutoring system that adapts to individual learning styles, identifies knowledge gaps, and provides customized learning paths for students across multiple subjects.', 30000, 15, 'Education', 'intermediate'),
('Smart Energy Optimization', 'AI system for energy efficiency', 'Build an AI system that optimizes energy consumption in smart buildings by learning usage patterns, predicting demand, and automatically adjusting systems for maximum efficiency.', 35000, 10, 'Sustainability', 'advanced'),
('Financial Fraud Detection', 'AI-driven fraud detection system', 'Develop a sophisticated AI system that can detect fraudulent financial transactions in real-time by analyzing transaction patterns, user behavior, and risk factors with high precision.', 60000, 6, 'Fintech', 'advanced');