<script lang="ts">
    // holds the current command
    let cmd
    // holds the last used command
    let last_cmd

    function handle_command() {
        // set last cmd
        last_cmd = cmd
        switch(cmd) {
            case "help": {
                cmd = ""
                alert("help")
                break
            }
            default:
                cmd = ""
                break
        }
    }

    function handle_keys(e) {
        // enter
	    if(e.keyCode == 13) {
            handle_command()
        }
        // up arrow
        else if (e.keyCode == 38) {
            cmd = last_cmd
        }
    }
	
</script>

<main>
    <input id="name" type="text" bind:value={cmd} autofocus>
</main>

<style>
</style>

<svelte:window on:keydown={handle_keys} />
