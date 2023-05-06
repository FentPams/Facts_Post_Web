import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://olzaavmdvnmrlthqflxs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9semFhdm1kdm5tcmx0aHFmbHhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMxNDcyMjUsImV4cCI6MTk5ODcyMzIyNX0.XtIjsNbv-jNBeN7a5TTL0R-ty7nB3TbjaZAD0cWmWkE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
