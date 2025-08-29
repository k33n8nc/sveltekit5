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

export const createPost = form(
	v.object({
		title: v.pipe(v.string(), v.minLength(1, 'Title is required')),
		content: v.pipe(v.string(), v.minLength(1, 'Content is required'))
	}),
	async (data) => {
		const { title, content } = data;

		const slug = title.toLowerCase().replace(/ /g, '-');

		// Insert into the database and get the generated ID
		const [newPost] = await db.sql`
			INSERT INTO post (slug, title, content)
			VALUES (${slug}, ${title}, ${content})
			RETURNING id
		`;

		// Redirect to the newly created page using the ID
		redirect(303, `/blog/${newPost.id}`);
	}
);
