import { error } from '@sveltejs/kit';
import * as db from '$lib/server/database';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const [post] = await db.sql
	`
		SELECT title, content
		FROM post
		WHERE id = ${parseInt(params.id, 10)}
	`;

    if (!post) {
        throw error(404, 'Not found');
    }

	return {
		post
	};
}
