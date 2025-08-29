<script lang="ts">
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

<button onclick={() => getPosts().refresh()} class="bg-purple-300 px-3 py-2 rounded cursor-pointer">
    call getPosts().refresh()
</button>