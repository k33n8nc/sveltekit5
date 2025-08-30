<script lang="ts">
    import { getPost, removePost } from '../data.remote';
    import { TrashCanSolid, ArrowLeftSolid } from 'svelte-awesome-icons';
    let { params } = $props();
</script>

<img src="https://placeholdit.com/1200x300/dddddd/999999?text=Header" alt="" class="rounded shadow w-full">

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

<div class="flex items-center justify-between">
    <a href="/blog" class="bg-slate-300 px-3 py-2 rounded cursor-pointer flex">
        <ArrowLeftSolid class="mr-2"/>back to posts
    </a>

    <button
            onclick={() => removePost(Number(params.id))}
            class="bg-red-500 text-white px-3 py-2 rounded cursor-pointer flex">
        <TrashCanSolid class="mr-2"/> delete
    </button>
</div>