<script lang="ts">
    import { onMount } from 'svelte';

    // variables

    // represents the main inputbox where commands go
    let inp
    // holds the current command
    let cmd
    // holds the last used command
    let last_cmd

    // functions

    // handle each command
    // TODO: move to a comp
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

    // handle key presses, i use if instead of switch
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

    onMount(() => {
        inp.focus()
    })
	
</script>

<main>
    <input id="name" type="text" bind:value={cmd} bind:this={inp}>
</main>

<style>
</style>

<svelte:window on:keydown={handle_keys} />
