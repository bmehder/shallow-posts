/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
	const slug = params.slug
	const response = await fetch(`https://rfh-api.com/wp-json/wp/v2/posts?slug=${slug}`)
	/** @type {import('wp-types').WP_REST_API_Posts} */
	const posts = await response.json()

	return {
		post: posts[0],
	}
}
