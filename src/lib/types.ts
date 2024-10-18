export type Categories = 'sveltekit' | 'svelte'

export type Post = {
	title: string
	slug: string
	desc: string
	date: string
	tags: Categories[]
	published: boolean
}