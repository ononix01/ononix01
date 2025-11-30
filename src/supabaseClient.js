import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tqaeoyfsmrhqamtcsztd.supabase.co';
const supabaseAnonKey = 'sb_publishable_Shmx_2S_309jzv7OqcjCYA_20Shwjwj';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
