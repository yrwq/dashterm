<script lang="ts">
    // TODO: titlebar
    // TODO: 3 terminals with flexbox, change terminals with a key
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    // variables

    // holds the value of main inputbox where commands go
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
    // TODO: after refreshing, the page bookmarks gone
    let bm = []

    // add https:// before url, if not given
    function format_url(url) {
        let formatted = url;
        if (!/^http|https:\/\//.test(formatted)) {
            formatted = "https://" + formatted;
        }
        return formatted;
    }

    // add a bookmark to local storage
    function bm_add(name, url) {
        localStorage.setItem(name, format_url(url))
        let new_bm = { "key": name , "value": url }
        bm.push(new_bm)
    }

    // get a bookmark's value from local storage
    function bm_get(name) {
        return localStorage.getItem(name)
    }

    // get a bookmark's value from local storage
    // TODO: remove item from bm var too
    function bm_del(name) {
        return localStorage.removeItem(name)
    }

    function bm_list() {
        refresh()
        let k
        let v
        for (let i of bm) {
            k = i.key
            console.log(k)
            v = i.value
            content += `<a href="` + v + `" target="_blank">` + k + `</a>`
        }
    }

    function refresh() {
        bm = []
        let new_bm
        for (const [key, value] of Object.entries(localStorage)) {
            new_bm = { "key": key , "value": value }
            bm.push(new_bm)
        }
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
            case "ls":
            case "l":
            case "la":
            case "list": {
                content = ""
                bm_list()
                cmd = ""
                break
            }
            case "rm":
            case "del": {
                bm_list()
                bm_del(cmd_arr[1])
                cmd = ""
                break
            }
            case "touch":
            case "add": {
                bm_list()
                bm_add(cmd_arr[1], cmd_arr[2])
                cmd = ""
                break
            }
            case "o":
            case "open": {
                let url = bm_get(cmd_arr[1])
                window.open(url, "_blank")
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
                cmd = ""
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
        refresh()
    })
	
</script>

<main>
    <div id="terminal">
        <div id="content">{@html content}</div>
        <div id="prompt">
            {prompt_icon} <input id="name" type="text" bind:value={cmd} bind:this={inp}>
        </div>
    </div>
</main>

<svelte:window on:keydown={handle_keys} />
