-- First, add the new problem_statement_id column as nullable
ALTER TABLE public."User_Submissions" 
ADD COLUMN problem_statement_id UUID REFERENCES public.problems(id) ON DELETE CASCADE;

-- If there are existing submissions, we could set them to the first problem's ID
-- But since this is likely a fresh setup, we'll just drop existing data if any
DELETE FROM public."User_Submissions";

-- Now drop the old problem_statement column
ALTER TABLE public."User_Submissions" 
DROP COLUMN problem_statement;

-- Finally, make problem_statement_id not nullable
ALTER TABLE public."User_Submissions" 
ALTER COLUMN problem_statement_id SET NOT NULL;