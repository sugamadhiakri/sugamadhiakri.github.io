<script>
	import { email, phone } from '../info'
	import { sketch } from '$lib/drawable'
	import { drawablyDivider } from 'drawably'

	const divider = sketch(drawablyDivider)
</script>
<footer class="flex flex-col items-center">
	<div use:divider class="w-3/4 max-w-[1080px] mt-20" />
	<div
		class="flex flex-col items-center justify-center mt-10 mb-10 space-y-2 font-thin text-center md:space-y-0 md:flex-row md:space-x-6"
	>
		<p class="text-zinc-600">{email}</p>
		<p class="hidden md:block text-zinc-600">•</p>
		<p class="text-zinc-600">{phone}</p>
</footer>
