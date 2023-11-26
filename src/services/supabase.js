import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://kfogjipsarbmqaspptwp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtmb2dqaXBzYXJibXFhc3BwdHdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk4Mjk3MDMsImV4cCI6MjAxNTQwNTcwM30.RMRXprnpjKg9aDKPI8uy4o_9whD0eYdvRtki72nycmc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
