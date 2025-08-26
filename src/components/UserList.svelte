<script lang="ts">
	let { users } = $props();
    users = [
        {
            id: 1,
            name: 'Robbert',
        },
        {
            id: 2,
            name: 'Developer'
        },
        {
            id: 3,
            name: 'C++'
        }
    ]

  import { hello } from '../routes/registrations/hello.remote';
  let message = $state('');
  async function fetchMessage() {
    message = await hello();
  }
</script>

<div>
    <ul>
        {#each users as user, i (user.id)}
        <li>
            {user.name}
            {i}
        </li>
        {/each}
    </ul>
</div>

<button onclick={fetchMessage} class="bg-blue-500 text-white rounded px-4 py-2 cursor-pointer">Say Hello</button>
<p>message: {message}</p>