import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://iyvkrddznfsfwcbjevgr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5dmtyZGR6bmZzZndjYmpldmdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE2NjA1NzEsImV4cCI6MjAzNzIzNjU3MX0.jsCwvmW4jqseYmMdk6wCdfbZT_89_A7vzx163_DWESU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
