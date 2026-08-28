import { createClient } from '@supabase/supabase-js';
import { CONFIG } from './config.js';

// Cliente para uso con npm (útil si migras a Next.js / SSR)
// Para el sitio vanilla actual, js/supabase.js ya usa CDN y lee CONFIG.
// Este archivo es para que `npm install @supabase/supabase-js` tenga sentido
// y para que `NEXT_PUBLIC_*` funcione en un entorno Node/Next.

export const supabase = createClient(CONFIG.supabaseUrl, CONFIG.supabaseKey);
