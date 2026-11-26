
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tnzrodpsodvcbhcqalqu.supabase.co';
const supabaseKey = 'sb_publishable_jRbdCrEsZQ_GWhk4vRpr2w_2obUe2c9';

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
