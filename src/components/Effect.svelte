<p>Count = {count}</p>
<button onclick={addNum}>Addddd</button>

<script>
    let count = $state(0);
    function addNum (){
        count++;
    }

    console.log('log from <script> root')

    $effect(()=>{
        console.log('log from $effect(()=>)');

        return () => {
            console.log('log from $effect return () => {}');
        }
    })
</script>