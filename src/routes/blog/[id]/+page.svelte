<script>
    /** @type {import('./$types').PageProps} */
    let { data } = $props();
</script>

<h1 class="text-xl">{data.post.title}</h1>

<div class="flex flex-col gap-1">
    {@html data.post.content}
    <a href="/blog" class="underline">back</a>
</div>
