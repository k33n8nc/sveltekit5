import { query } from '$app/server';
import * as v from 'valibot';
import { error } from '@sveltejs/kit';
import * as db from '$lib/server/database';

export const getPosts = query(async () => {
	const posts = await db.sql`
		SELECT id, title, slug
		FROM post
		ORDER BY published_at
			DESC
	`;

	if (!posts) {
		throw error(404, 'No posts found');
	}

	return {
		posts
	};
});

export const getPost = query(v.number(), async (id) => {
	const [post] = await db.sql`
		SELECT * FROM post
		WHERE id = ${id}
	`;

	if (!post) {
		throw error(404, 'Post not found');
	}

	return {
		post
	};
});