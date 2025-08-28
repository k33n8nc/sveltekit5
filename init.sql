CREATE TABLE post (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    content TEXT,
    published_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO post (title, slug, content) VALUES
('Exploring Svelte 5 Runes', 'exploring-svelte-5-runes', 'Svelte 5 introduces a new reactivity model with Runes...'),
('Data Persistence with SvelteKit', 'data-persistence-with-sveltekit', 'Learn how to use remote functions and a database to persist data in your SvelteKit app.'),
('Getting Started with Postgres', 'getting-started-with-postgres', 'A beginner-friendly guide to setting up and using a PostgreSQL database.');
