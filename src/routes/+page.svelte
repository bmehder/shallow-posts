<script>
	// @ts-nocheck
	import { goto, preloadData, pushState } from '$app/navigation'
	import { page } from '$app/stores'
	import { disableScrolling, enableScrolling } from '$lib/utils'
	import Modal from '$lib/Modal.svelte'
	import Post from './posts/[slug]/+page.svelte'

	export let data

	/** @type {HTMLDialogElement} */
	let modalElement

	/** @param {MouseEvent} evt */
	async function showModal() {
		
		/** @type {HTMLAnchorElement} */
		const { href } = this

		const result = await preloadData(href)

		if (result.type === 'loaded' && result.status === 200) {
			pushState(href, { selected: result.data })
			modalElement?.showModal()
		} else {
			goto(href)
		}
	}

	function closeModal() {
		disableScrolling()
		$page.route.id !== '/' && history.back()
		setTimeout(() => {
			enableScrolling()
		}, 300)
	}

	$: !$page.state.selected && modalElement?.close()
</script>

<Modal bind:modalElement on:close={closeModal}>
	{#if $page.state.selected}
		<Post data={$page.state.selected} />
	{/if}
</Modal>

<section>
	<div class="auto-grid" style="--min: 24rem;">
		{#each data.posts as post}
			<div class="post">
				<a on:click|preventDefault={showModal} href="/posts/{post.slug}">
					<img
						class="square"
						src={post._embedded?.['wp:featuredmedia']?.[0].source_url}
						alt={post.title.rendered}
					/></a
				>
				<div class="flow text">
					<h3>
						<a on:click|preventDefault={showModal} href="/posts/{post.slug}"
							>{@html post.title.rendered}</a
						>
					</h3>
					<div class="excerpt">{@html post.excerpt.rendered}</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	a {
		display: block;
	}

	.post {
		border: 1px solid;
		font-size: 1.25rem;
	}

	.text {
		padding: 2rem;
	}

	.excerpt {
		line-height: 1.7;

		& * {
			margin-top: 1.5rem;
		}
	}
</style>
