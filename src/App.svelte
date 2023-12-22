<script lang="ts">
    // TODO: titlebar
    // TODO: 3 terminals with flexbox, change terminals with a key
    // TODO: store bookmarks
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    // variables

    // represents the main inputbox where commands go
    let inp
    // holds the current command
    let cmd
    // holds the last used command
    let last_cmd
    // holds the value of the prompt icon
    let prompt_icon = ":: "
    // holds the output of a command
    let content = ""

    // functions

    // handle each command
    // TODO: move to a comp
    function handle_command() {
        // set last cmd
        last_cmd = cmd
        switch(cmd) {
            case "help": {
                cmd = ""
                content = "help, clear"
                break
            }
            case "clear": {
                cmd = ""
                content = ""
                break
            }
            default: {
                cmd = ""
                break
            }
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
    <div id="terminal">
        <div id="content">{content}</div>
        <div id="prompt">
            {prompt_icon} <input id="name" type="text" bind:value={cmd} bind:this={inp}>
        </div>
    </div>
</main>

<svelte:window on:keydown={handle_keys} />
