
-- Create a storage bucket for proposal files
INSERT INTO storage.buckets (id, name, public)
VALUES ('proposals', 'proposals', true);

-- Create RLS policies for the proposals bucket
CREATE POLICY "Anyone can upload proposal files" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'proposals');

CREATE POLICY "Anyone can view proposal files" ON storage.objects
FOR SELECT USING (bucket_id = 'proposals');

-- Add RLS policies for User_Submissions table (correct case)
ALTER TABLE "User_Submissions" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert submissions" ON "User_Submissions"
FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can view submissions" ON "User_Submissions"
FOR SELECT USING (true);
