<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="bg-gray-800 text-white">
	<div class="container mx-auto mb-4">
		<ul class="flex items-center gap-4 h-14">
			<li><a href="/">home</a></li>
			<li><a href="/blog">blog</a></li>
			<li><a href="/blog/new">new post</a></li>
		</ul>
	</div>
</div>

<main class="container mx-auto">
	{@render children?.()}
</main>
