<script lang="ts">
    import { createPost } from '../data.remote';
</script>

<h1>Create a new post</h1>

<form {...createPost}>
    <label>
        <h2>Title</h2>
        <input name="title" />
    </label>

    <label>
        <h2>Write your post</h2>
        <textarea name="content"></textarea>
    </label>

    <button>Publish!</button>
</form>