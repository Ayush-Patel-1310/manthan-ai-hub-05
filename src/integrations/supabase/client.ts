// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ylbzsdedzrvrdoienogl.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsYnpzZGVkenJ2cmRvaWVub2dsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4NTI4NTMsImV4cCI6MjA2NjQyODg1M30.AnEuTr0SGs5UYOuLblEbaR5_mOkwTKaI27nPTLVKxeQ";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);