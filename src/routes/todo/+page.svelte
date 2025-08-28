<script lang="ts">
	let todos = $state([
		{ id: 1, text: 'Learn Svelte 5', completed: true },
		{ id: 2, text: 'Build a Todo app', completed: true }
	]);
	let newTodoText = $state('');

	function addTodo() {
		if (newTodoText.trim() !== '') {
			todos.push({
				id: Date.now(),
				text: newTodoText,
				completed: false
			});
			newTodoText = '';
		}
	}

	function removeTodo(id: number) {
		todos = todos.filter((todo) => todo.id !== id);
	}
</script>

<div class="container mx-auto">
	<h1 class="text-2xl font-bold mb-4">Svelte 5 Todo App</h1>

	<div class="flex mb-4">
		<input
			type="text"
			bind:value={newTodoText}
			class="border rounded-l px-4 py-2 w-full"
			placeholder="Add a new todo"
			onkeydown={(e) => e.key === 'Enter' && addTodo()}
		/>
		<button onclick={addTodo} class="bg-blue-500 text-white rounded-r px-4 py-2">
			Add
		</button>
	</div>

	<ul>
		{#each todos as todo (todo.id)}
			<li class="flex items-center py-2 justify-between">
				<span class:line-through={todo.completed}>
					{todo.text}
				</span>
				<div class="flex items-center justify-between">
					<button onclick={() => removeTodo(todo.id)} class="text-red-500">
						Remove
					</button>
					<button onclick={() => (todo.completed = !todo.completed)} class="text-green-500 ml-2">
						{todo.completed ? 'Undo' : 'Complete'}

					</button>
				</div>
			</li>
		{/each}
	</ul>
</div>
