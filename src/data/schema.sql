-- 1. User Profiles (extends Supabase Auth)
create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique,
  full_name text,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- 2. Exercises
create table exercises (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  long_description text,
  instructions text[],
  benefits text[],
  duration integer not null,
  category text not null,
  featured boolean default false,
  icon text,
  color text,
  animation text,
  severity text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- 3. Exercise Sessions (user's completed exercises)
create table exercise_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  exercise_id uuid references exercises(id) on delete cascade,
  completed_at timestamp with time zone default timezone('utc'::text, now()),
  duration integer not null,
  rating integer,
  notes text
);

-- 4. Progress Tracking (user's daily progress)
create table progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  date date not null,
  regulated_percentage integer,
  slightly_activated_percentage integer,
  highly_activated_percentage integer,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- 5. User Preferences (optional, for app settings)
create table user_preferences (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  theme text default 'light',
  notifications_enabled boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now())
); 