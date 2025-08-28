import postgres from 'postgres';

// TODO: use environment variables
const connection_string = 'postgresql://user:password@localhost:5432/mydatabase';

export const sql = postgres(connection_string);
