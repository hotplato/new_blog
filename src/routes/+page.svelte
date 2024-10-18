<script lang="ts">
	export let data;
	import { formatDate } from '$lib/utils';
</script>

<svelte:head>
	<title>HotPlato Blog</title>
	<meta name="description" content="my blog" />
</svelte:head>

<!-- Posts -->
<section class="max-w-3xl mx-auto py-8">
	<ul class="antialiased">
		{#each data.posts as post}
			<li class="mb-4">
				<a href={post.slug} class="text-xl font-bold hover:text-gray-500">{post.title}</a>
				<p class="text-base text-gray-700 dark:text-gray-300 mt-2">{post.desc}</p>
				<p class="text-sm text-gray-500 dark:text-gray-400 mt-2">{formatDate(post.date)}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
</style>
