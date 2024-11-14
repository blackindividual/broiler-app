import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sajojwqrihzlyqubpzgf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNham9qd3FyaWh6bHlxdWJwemdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA4MjU1ODcsImV4cCI6MjA0NjQwMTU4N30.FDlk3DKTokl1HEY4gGtUVQY_rZxwXugbCzzabehZOkk';
export const supabase = createClient(supabaseUrl, supabaseKey);
