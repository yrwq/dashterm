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
    let cmd = ""
    // holds the last used command
    let last_cmd
    // holds the value of the prompt icon
    let prompt_icon = ":: "
    // holds the output of a command
    let content = ""
    // holds the whole command given in arrar
    let cmd_arr

    // holds bookmarks added
    // TODO
    let bm = []

    function bm_add(name, url) {
        localStorage.setItem(name, url)
    }

    function bm_get(name) {
        return localStorage.getItem(name)
    }

    // handle each command
    // TODO: move to a comp
    function handle_command() {
        // set last cmd to current
        last_cmd = cmd
        // make an array out of the whole command
        cmd_arr = cmd.split(" ");

        // switch the first index of the command
        switch(cmd_arr[0]) {
            case "add": {
                bm_add(cmd_arr[1], cmd_arr[2])
                cmd = ""
                break
            }
            case "open": {
                let url = bm_get(cmd_arr[1])
                window.open("https://" + url, "_blank")
                cmd = ""
                break
            }
            case "help": {
                content = "help, clear"
                cmd = ""
                break
            }
            case "clear": {
                content = ""
                cmd = ""
                break
            }
            default: {
                break
            }
        }
    }

    // handle key presses, i use if instead of switch
    function handle_keys(e) {
        inp.focus()
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
