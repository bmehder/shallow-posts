<script>
	import { onNavigate, replaceState } from '$app/navigation'

	export let data
	
	onNavigate(() => replaceState('/', {selected: undefined}))
</script>

<article>
	<h1>{@html data.post.title.rendered}</h1>
	<div>{@html data.post.content.rendered}</div>
</article>

<style>
	article {
		max-width: 48rem;
		margin-inline: auto;
		padding: 1.5rem;
		padding-block-end: 3rem;
	}

	h1 {
		padding-block-end: 2rem;
		font-size: 2rem;
	}
	
	div :global(> * + *) {
		margin-block-start: 1.5rem;
		line-height: 1.7;
	}

	div :global(img:first-child) {
		margin-block-end: 2.5rem;
		aspect-ratio: 16 / 9;
		object-fit: cover;
		object-position: top;
	}

	div :global(li) {
		margin-inline-start: 1.5rem;
		line-height: 2;
	}
</style>
