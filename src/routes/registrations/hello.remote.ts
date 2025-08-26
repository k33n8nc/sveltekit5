// src/routes/registrations/hello.remote.ts
import { query } from '$app/server';
export const hello = query(async () => 'Hello from the server!');