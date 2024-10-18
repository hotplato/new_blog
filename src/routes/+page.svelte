<script lang="ts">
	export let data;
	import { formatDate } from '$lib/utils';
</script>

<svelte:head>
	<title>HotPlato Blog</title>
	<meta name="description" content="my blog" />
</svelte:head>

<!-- Posts -->
<section class="max-w-3xl mx-auto">
	<ul class="antialiased">
		{#each data.posts as post}
			<li>
				<a href={post.slug} class="text-xl">{post.title}</a>
				<p class="text-sm text-gray-500">{formatDate(post.date)}</p>
				<p class="text-base text-gray-700">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
</style>
