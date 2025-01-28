const { createClient } = supabase;
const supabaseUrl = 'https://whfadeqyezqxtjctqpoq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoZmFkZXF5ZXpxeHRqY3RxcG9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0Njc3NzIsImV4cCI6MjA1MzA0Mzc3Mn0.C5S9JUPKaf2NIUXcMTsgAFKE_grGNrJloDGXQkfdP4E'
const supabaseClient = createClient(supabaseUrl, supabaseKey);

window.supabase = supabaseClient;