import * as v from 'valibot';
import { error } from '@sveltejs/kit';
import { query } from '$app/server';
import * as db from '$lib/server/database';

export const getPosts = query(async () => {
	const posts = await db.sql
	`
		SELECT id, title, slug
		FROM post
		ORDER BY published_at
			DESC
	`;
	if (!posts){
		error(404, 'No posts found');
	}
	return posts;
});

export const getPost = query(v.number(), async (id) => {
	const [post] = await db.sql
	`
		SELECT id, title, content
		FROM post
		WHERE id = ${id}
	`;
	if (!post){
		error(404, 'No post found with id ' + id);
	}
	return post;
});