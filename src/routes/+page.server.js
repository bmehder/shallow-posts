/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const response = await fetch(`https://rfh-api.com/wp-json/wp/v2/posts?_embed`)

	/** @type {import('wp-types').WP_REST_API_Posts} */
	const posts = await response.json()

	return {
		posts,
	}
}
