<script lang="ts">
	import { formatDate } from '$lib/utils';
	export let data
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="max-w-3xl mx-auto text-slate-700 dark:text-slate-300 px-4 antialiased">
  <!-- Title -->
	<hgroup class="mt-12 mb-4">
		<h1 class="text-3xl">{data.meta.title}</h1>
		<p class="text-sm text-gray-500 mt-4">发布于 {formatDate(data.meta.date)}</p>
	</hgroup>

  <!-- Tags -->
	<div class="flex gap-2 mb-4">
		{#each data.meta.categories as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
	</div>

  <!-- Post -->
	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>

<style >
	.prose {
		@apply pb-8;
	}
	:global(.prose h2),
	:global(.prose h3),
	:global(.prose h4),
	:global(.prose h5),
	:global(.prose h6) {
		@apply mb-4;
	}
	:global(.prose p) {
		@apply mb-4;
	}
	:global(.prose ol li) {
		@apply mb-2;
	}
	:global(.prose hr) {
		@apply my-2;
	}
	:global(.shiki) {
		@apply rounded-sm p-2;
	}
</style>
