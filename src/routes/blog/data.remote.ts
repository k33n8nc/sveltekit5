import * as v from 'valibot';
import { error, redirect } from '@sveltejs/kit';
import { query, form } from '$app/server';
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

export const createPost = form(async (data) => {

	const title = data.get('title');
	const content = data.get('content');

	// Check the data is valid
	if (typeof title !== 'string' || typeof content !== 'string') {
		error(400, 'Title and content are required');
	}

	const slug = title.toLowerCase().replace(/ /g, '-');

	// Insert into the database and get the generated ID back
	await db.sql`
		INSERT INTO post (slug, title, content)
		VALUES (${slug}, ${title}, ${content})
	`;

});

export const removePost = query(v.number(), async (id) => {
	await db.sql`
		DELETE FROM post
		WHERE id = ${id}
	`;
	throw redirect(303, '/blog');
});
