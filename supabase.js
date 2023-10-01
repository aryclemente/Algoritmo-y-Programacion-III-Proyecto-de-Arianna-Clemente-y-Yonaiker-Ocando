import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sjayaaikzhyrvleaziil.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqYXlhYWlremh5cnZsZWF6aWlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI3MzQyMzcsImV4cCI6MjAwODMxMDIzN30.dIKNWZOh3rRfWGvP4HML_N6-bFv0Uhp1Bi9J_u6QJf";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
