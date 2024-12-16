import { writable } from 'svelte/store'
import Home from '../routes/Home/Home.svelte'

export let Main: any = writable(Home)