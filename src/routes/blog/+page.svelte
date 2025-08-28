<script>
    import { getPosts } from './data.remote';
</script>

<h1 class="text-xl">Recent posts</h1>

<svelte:boundary>
    <ul>
        {#each await getPosts() as { id, title }}
            <li class="underline"><a href="/blog/{id}">{title}</a></li>
        {/each}
    </ul>

    {#snippet pending()}
        <p>loading...</p>
    {/snippet}
</svelte:boundary>