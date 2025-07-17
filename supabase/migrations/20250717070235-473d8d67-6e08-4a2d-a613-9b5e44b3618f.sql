-- Update User_Submissions table to use problem_statement_id as foreign key
-- Add new problem_statement_id column
ALTER TABLE public."User_Submissions" 
ADD COLUMN problem_statement_id UUID REFERENCES public.problems(id) ON DELETE CASCADE;

-- Drop the old problem_statement column
ALTER TABLE public."User_Submissions" 
DROP COLUMN problem_statement;

-- Make problem_statement_id not nullable
ALTER TABLE public."User_Submissions" 
ALTER COLUMN problem_statement_id SET NOT NULL;