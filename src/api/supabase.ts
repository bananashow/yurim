import { createClient } from '@supabase/supabase-js';

export interface Database {
  public: {
    Tables: {
      contact: {
        Row: {
          // the data expected from .select()
          id: number;
          created_at: Date;
          address: string;
          py: number;
          name: string;
          phone: number;
          budget: number;
          question: string;
        };
        Insert: {
          // the data to be passed to .insert()
        };
        Update: {
          // the data to be passed to .update()
        };
      };
    };
  };
}

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL as string;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY as string;
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
