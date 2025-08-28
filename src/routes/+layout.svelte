<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="bg-gray-200">
	<div class="container mx-auto mb-4">
		<ul class="flex items-center gap-4 h-14">
			<li><a href="/">home</a></li>
			<li><a href="/todo">todo</a></li>
			<li><a href="/gsap">gsap</a></li>
		</ul>
	</div>
</div>

{@render children?.()}
