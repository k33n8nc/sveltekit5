<script>
    import { getPosts } from './data.remote';
</script>

<h1>Recent posts</h1>

<svelte:boundary>
    <ul>
        {#each await getPosts() as { id, title }}
            <li><a href="/blog/{id}">{title}</a></li>
        {/each}
    </ul>

    {#snippet pending()}
        <p>loading...</p>
    {/snippet}
</svelte:boundary>