
-- Create table for Contact Us form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  procedure TEXT,
  condition_details TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for Join as Partner form submissions
CREATE TABLE public.partner_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  partner_type TEXT NOT NULL DEFAULT 'individual',
  full_name TEXT NOT NULL,
  phone_code TEXT NOT NULL DEFAULT '+91',
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  country TEXT NOT NULL DEFAULT 'India',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on both tables
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.partner_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public forms, no auth required)
CREATE POLICY "Allow public inserts on contact_submissions"
ON public.contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Allow public inserts on partner_submissions"
ON public.partner_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);
