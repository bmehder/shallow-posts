<script>
	/** @type {HTMLDialogElement} */
	export let modalElement
</script>

<dialog bind:this={modalElement} on:close>
	<button on:click={() => modalElement.close()}>
		<iconify-icon icon="carbon:close-filled"></iconify-icon>
	</button>
	<slot />
</dialog>

<style>
	dialog {
		max-width: 64rem;
		margin-block: 1rem;
		padding: 2rem;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
	}

	dialog::backdrop {
		background-color: hsl(0 0% 0% / 60%);
	}

	button {
		all: unset;
		position: absolute;
		top: 0.5rem;
		right: 0.25rem;
		background-color: none;
		border: none;
		font-size: 2rem;
		transition: 100ms scale;

		&:hover {
			scale: 0.95;
		}
	}
</style>
