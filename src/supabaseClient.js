import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tqaeoyfsmrhqamtcsztd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxYWVveWZzbXJocWFtdGNzenRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyOTA2NzcsImV4cCI6MjA3OTg2NjY3N30.xr3Q2L7Od7a4cBouHkDN9t3mx-71afsCJ2r90Wb03XY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
