// Supabase Client Configuration
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// Configurazione Supabase - puoi usare variabili d'ambiente o valori hardcoded
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "https://rjgzvogrvvsejytqafih.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqZ3p2b2dydnZzZWp5dHFhZmloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5Nzc1NDEsImV4cCI6MjA2OTU1MzU0MX0.04zXdZ_uvN4NiUjmrT6gXRt1C_GM3znok-pR7MdzXaw";

// Per usare le tue credenziali Supabase:
// 1. Crea un file .env nella root del progetto
// 2. Aggiungi le tue credenziali:
//    VITE_SUPABASE_URL=your_supabase_project_url
//    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});