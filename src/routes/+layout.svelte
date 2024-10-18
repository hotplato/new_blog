<script lang="ts">
	import Header from './Header.svelte';
	import { ModeWatcher} from "mode-watcher";
	import '../app.css';
</script>

<div class="min-h-screen bg-white dark:bg-slate-900">
	<ModeWatcher />
	<Header></Header>
	<main>
		<slot></slot>
	</main>
</div>

<style>
	/* .app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	} */

	/* main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	} */
</style>
