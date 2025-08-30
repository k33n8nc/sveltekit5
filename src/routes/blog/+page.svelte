<script lang="ts">
    import { getPosts } from './data.remote';
</script>

<h1 class="text-xl">Recent posts</h1>

<svelte:boundary>
<div class="grid grid-cols-3 gap-4 my-4">
    {#each await getPosts() as { id, title }}
        <a href="{`/blog/${id}`}" class="shadow rounded overflow-hidden">
            <img src="https://placeholdit.com/400x200/dddddd/999999?text=Thumbnail" alt="" class="w-full">
            <span class="flex m-2">
                {title}
            </span>
        </a>
    {/each}
</div>

{#snippet pending()}
    <p>loading...</p>
{/snippet}
</svelte:boundary>

<button onclick={() => getPosts().refresh()} class="bg-slate-300 px-3 py-2 rounded cursor-pointer">
    Refresh posts
</button>