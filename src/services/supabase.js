import { createClient } from '@supabase/supabase-js';

// Access environment variables using import.meta.env for Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn("Supabase URL or Anon Key is missing. Portofolio data will not be loaded.");
  // throw new Error("Supabase URL and Anon Key are required. Check your .env file and ensure they are prefixed with VITE_ and the dev server was restarted.");
}

const createDummySupabase = () => {
  const mockQuery = {
    select: () => mockQuery,
    eq: () => mockQuery,
    single: () => Promise.resolve({ data: null, error: null }),
    order: () => Promise.resolve({ data: [], error: null }),
    insert: () => Promise.resolve({ data: null, error: null }),
  };

  return {
    from: () => mockQuery,
    channel: () => ({
      on: () => ({
        subscribe: () => ({
          unsubscribe: () => { }
        })
      }),
      subscribe: () => ({
        unsubscribe: () => { }
      })
    }),
    storage: {
      from: () => ({
        upload: () => Promise.resolve({ data: null, error: null }),
        getPublicUrl: () => ({ data: { publicUrl: '' } })
      })
    }
  };
};

export const supabase = (supabaseUrl && supabaseKey)
  ? createClient(supabaseUrl, supabaseKey)
  : createDummySupabase();
// Dummy supabase object to prevent crashes if keys are missing