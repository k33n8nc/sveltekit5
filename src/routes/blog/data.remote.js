import { query } from '$app/server';
import * as db from '$lib/server/database';

export const getPosts = query(async () => {
	const posts = await db.sql`
		SELECT id, title, slug
		FROM post
		ORDER BY published_at
			DESC
	`;

	return posts;
});