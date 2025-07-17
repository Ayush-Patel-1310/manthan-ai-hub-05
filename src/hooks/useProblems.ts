import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface Problem {
  id: string;
  title: string;
  short_description: string;
  description: string;
  prize_money: number;
  available_slots: number;
  domain: string;
  difficulty: 'advanced' | 'intermediate' | 'beginner';
  created_at: string;
  updated_at: string;
}

export const useProblems = () => {
  const [problems, setProblems] = useState<Problem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProblems = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('problems')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProblems((data || []) as Problem[]);
    } catch (err) {
      console.error('Error fetching problems:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProblems();
  }, []);

  const refetchProblems = () => {
    fetchProblems();
  };

  return { problems, loading, error, refetchProblems };
};