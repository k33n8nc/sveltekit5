<script lang="ts">
    import { getPost } from '../data.remote';
    let { params } = $props();
</script>

<svelte:boundary>
    <main class="my-4">
        {#await getPost(Number(params.id))}
            <p>Loading post...</p>
        {:then post}
            <h1 class="text-xl mb-1">{post.title}</h1>
            <div>{@html post.content}</div>
        {:catch error}
            <p>Error loading post: {error.message}</p>
        {/await}
    </main>
</svelte:boundary>

<a href="/blog" class="bg-slate-300 px-3 py-2 rounded">back</a>
