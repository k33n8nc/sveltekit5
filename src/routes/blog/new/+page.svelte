<script lang="ts">
    import { createPost } from '../data.remote';
</script>

<h1>Create a new post</h1>

<form {...createPost.enhance(async ({ form, data, submit }) => {
    try {
        await submit();
        form.reset();
        console.log('Post created:', data);
        return data;
    } catch (error) {
        console.log('Oh no! Something went wrong' + error);
    }
})} class="flex flex-col gap-4 my-4">
    <label>
        <h2>Title</h2>
        <input name="title" class="w-full"/>
    </label>

    <label>
        <h2>Write your post</h2>
        <textarea name="content" class="w-full"></textarea>
    </label>

    <button class="bg-slate-300 px-3 py-2 rounded cursor-pointer">Publish!</button>
</form>