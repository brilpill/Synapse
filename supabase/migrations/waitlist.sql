-- Create the waitlist table
CREATE TABLE IF NOT EXISTS public.waitlist (
    id BIGSERIAL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public inserts (sign-ups)
CREATE POLICY "Allow public sign-up" ON public.waitlist
    FOR INSERT 
    WITH CHECK (true);

-- Create policy to allow only authenticated users (admin) to view the list
CREATE POLICY "Allow admin to view list" ON public.waitlist
    FOR SELECT 
    USING (auth.role() = 'service_role');
