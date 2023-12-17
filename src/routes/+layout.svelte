<script>
	import '../style.css';
	import Header from '../lib/Header.svelte';
	import Footer from '../lib/Footer.svelte';
</script>

<div class="grid-system">
	<slot />
  <Footer></Footer>
	<Header></Header>
</div>

<style>
	:root {
		--padding-inline: 1rem;
		--content-max-width: 60rem;
		--breakout-max-width: 130rem;
	}

	@media (min-width: 1024px) {
		:root {
			--padding-inline: 4rem;
			--content-max-width: 90rem;
			--breakout-max-width: 130rem;
		}
	}

	:global(.grid-system) {
		display: grid;
		grid-template-columns: [full-width-start] minmax(var(--padding-inline), 1fr) [breakout-start] minmax(
				0,
				calc((var(--breakout-max-width) - var(--content-max-width)) / 2)
			) [content-start] min(100% - (2 * var(--padding-inline)), var(--content-max-width)) [content-end] minmax(
				0,
				calc((var(--breakout-max-width) - var(--content-max-width)) / 2)
			) [breakout-end] minmax(var(--padding-inline), 1fr) [full-width-end];
	}

	:global(.grid-system > *) {
		grid-column: content;
	}

	:global(.grid-system > .breakout) {
		grid-column: breakout;
	}

	:global(.grid-system > .full-width) {
		grid-column: full-width;
	}
</style>
