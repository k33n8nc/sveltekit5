<script lang="ts">
    import { getPost } from '../data.remote';
    let { params } = $props();
</script>

<h1 class="text-xl">Recent posts</h1>

<svelte:boundary>
    {#await getPost(Number(params.id))}
        <p>Loading post...</p>
    {:then post}
        <h1>{post.title}</h1>
        <div>{@html post.content}</div>
    {:catch error}
        <p>Error loading post: {error.message}</p>
    {/await}
</svelte:boundary>

<a href="/blog">back</a>
