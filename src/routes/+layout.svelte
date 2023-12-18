<script>
	import '$lib/app.css'
</script>

<svelte:head>
	<title>Shallow Posts - Sveltekit 2.0</title>
</svelte:head>

<div class="wrapper">
	<header>
		<h1><a href="/">Shallow Posts with SvelteKit 2.0</a></h1>
	</header>
	
	<main>
		<slot />
	</main>
</div>

<style>
	.wrapper {
		display: grid;
		gap: 2rem;
		
		& main {
			max-width: 80rem;
			margin-inline: auto;
			padding-inline: 2rem;
		}
		
		& header {
			padding-block: 1rem;
			padding-inline: 2rem;
			background-color: #323232;
			text-align: center;
			
			& h1 {
				font-weight: 500;
			}
		}
	}
</style>